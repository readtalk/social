export function HomeHTML(user: { id: string; email: string }) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Homepage</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#FF0000" />

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/global.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap" rel="stylesheet" />
</head>
<body>
  <main class="readtalk-card" role="main">
    <header class="profile-header">
      <div class="avatar" aria-hidden="true">RT</div>
      <div class="user-info">
        <h1>Settings</h1>
        <p class="email">${user.email}</p>
      </div>
    </header>

    <section class="user-details">
      <div class="detail-row">
        <span class="label">User ID</span>
        <span class="value">${user.id}</span>
      </div>
      <div class="detail-row">
        <span class="label">Email</span>
        <span class="value">${user.email}</span>
      </div>
    </section>

    <a href="/logout" class="btn-logout">Logout</a>

    <footer style="margin-top: 2rem; text-align: center; font-size: 0.75rem; color: #6b7280; border-top: 1px solid #f3f4f6; padding-top: 1rem;">
      <p>&copy; ${new Date().getFullYear()} ReadTalk</p>
    </footer>
  </main>
</body>
</html>`;
}
