// workers/auth.ts
import { issuer } from "@openauthjs/openauth";
import { CloudflareStorage } from "@openauthjs/openauth/storage/cloudflare";
import { PasswordProvider } from "@openauthjs/openauth/provider/password";
import { createSubjects } from "@openauthjs/openauth/subject";
import { object, string } from "valibot";

// ============================================================
// SUBJECTS
// ============================================================
const subjects = createSubjects({
  user: object({ id: string() }),
});

// ============================================================
// OPEN AUTH ISSUER — Tanpa UI, tanpa routing manual
// ============================================================
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // ============================================================
    // ISSUER — TANPA PasswordUI, TANPA routing manual
    // ============================================================
    return issuer({
      storage: CloudflareStorage({
        namespace: env.AUTH_STORAGE,
      }),
      subjects,
      providers: {
        // PasswordProvider TANPA PasswordUI
        password: PasswordProvider(),
      },
      // TANPA THEME
      success: async (ctx, value) => {
        if (value.provider === "password") {
          const userId = await getOrCreateUser(env, value.email);
          return ctx.subject("user", { id: userId });
        }
        throw new Error("Invalid provider");
      },
    }).fetch(request, env, ctx);
  },
} satisfies ExportedHandler<Env>;

// ============================================================
// UTILITY — getOrCreateUser
// ============================================================
async function getOrCreateUser(env: Env, email: string): Promise<string> {
  const result = await env.AUTH_DB.prepare(
    `
    INSERT INTO user (email)
    VALUES (?)
    ON CONFLICT (email) DO UPDATE SET email = email
    RETURNING id;
    `
  )
    .bind(email)
    .first<{ id: string }>();

  if (!result) {
    throw new Error(`Unable to process user: ${email}`);
  }

  console.log(`Found or created user ${result.id} with email ${email}`);
  return result.id;
}

// ============================================================
// TYPE DEFINITIONS
// ============================================================
interface Env {
  AUTH_STORAGE: KVNamespace;
  AUTH_DB: D1Database;
}
