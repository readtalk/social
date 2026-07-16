export function HomeHTML(user: { id: string; email: string }) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Homepage</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#FF0000" />
  <meta name="description" content="ReadTalk - Dashboard" />

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/favicon.ico" />
  
  <link rel="stylesheet" href="/global.css" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap" rel="stylesheet" />
</head>
<body>
  <main class="readtalk-card" role="main" aria-labelledby="profile-heading">

    <header class="profile-header">
      <div class="avatar" aria-hidden="true">RT</div>
      <div class="user-info">
        <h1 id="profile-heading">Settings</h1>
        <p class="email">${user.email}</p>
      </div>
    </header>

    <section class="user-details" aria-label="Account details">
      <div class="detail-row">
        <span class="label">User ID</span>
        <span class="value">${user.id}</span>
      </div>
      <div class="detail-row">
        <span class="label">Email</span>
        <span class="value">${user.email}</span>
      </div>
      <div class="detail-row">
        <span class="label">Status</span>
        <span class="value" style="color: #22c55e; font-weight: 500;">Active</span>
      </div>
    </section>

    <a href="/logout" class="btn-logout">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:0.5rem;">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      Logout
    </a>

    <footer style="margin-top: 2rem; text-align: center; font-size: 0.75rem; color: #6b7280; border-top: 1px solid #f3f4f6; padding-top: 1rem;">
      <p>&copy; ${new Date().getFullYear()} ReadTalk &mdash; Secure &amp; Trusted</p>
    </footer>
  </main>
</body>
</html>`;
}
