// public/home.tsx
export function HomeHTML(user: { id: string; email: string }) {
  // Ambil waktu sekarang untuk ditampilkan (contoh)
  const currentTime = new Date().toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#FF0000" />
  <meta name="description" content="ReadTalk - Dashboard Autentikasi" />

  <title>ReadTalk | Beranda</title>

  <!-- CSS Standar (tanpa build process) -->
  <link rel="stylesheet" href="/style.css" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/favicon.ico" />

  <!-- Font Inter dari Google Fonts (opsional, fallback sudah di CSS) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap" rel="stylesheet" />
</head>

<body>
  <main class="readtalk-card" role="main" aria-labelledby="profile-heading">
    
    <!-- HEADER PROFIL -->
    <header class="profile-header">
      <div class="avatar" aria-hidden="true">RT</div>
      <div class="user-info">
        <h1 id="profile-heading">Dashboard</h1>
        <p class="email">${user.email}</p>
      </div>
    </header>

    <!-- DETAIL AKUN -->
    <section class="user-details" aria-label="Detail akun">
      <div class="detail-row">
        <span class="label">ID Pengguna</span>
        <span class="value">${user.id}</span>
      </div>
      <div class="detail-row">
        <span class="label">Email</span>
        <span class="value">${user.email}</span>
      </div>
      <div class="detail-row">
        <span class="label">Status</span>
        <span class="value" style="color: #22c55e; font-weight: 500;">✓ Aktif</span>
      </div>
      <div class="detail-row">
        <span class="label">Login pada</span>
        <span class="value" style="font-family: inherit;">${currentTime}</span>
      </div>
    </section>

    <!-- TOMBOL LOGOUT -->
    <a href="/logout" class="btn-logout">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:0.5rem;">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      Keluar
    </a>

    <!-- FOOTER KECIL -->
    <footer style="margin-top: 2rem; text-align: center; font-size: 0.75rem; color: #6b7280; border-top: 1px solid #f3f4f6; padding-top: 1rem;">
      <p>© ${new Date().getFullYear()} ReadTalk — Aman & Terpercaya</p>
    </footer>
  </main>
</body>
</html>`;
}
