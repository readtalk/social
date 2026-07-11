export function SettingsHTML(user: { id: string; email: string }) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Settings | READTalk</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  
  <script src="https://cdn.tailwindcss.com"></script>
  <meta name="theme-color" content="#FF0000" />
  <style>
    body { background: #f0f2f5; }
    .readtalk-card { background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  </style>
</head>
<body class="min-h-screen flex items-center justify-center p-4">
  <div class="readtalk-card p-8 max-w-md w-full">
    <div class="flex items-center gap-4 mb-6">
      <div class="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center text-white text-2xl font-bold shadow-md">
        RT
      </div>
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
        <p class="text-gray-600">${user.email}</p>
      </div>
    </div>
    <div class="border-t border-gray-100 pt-4 space-y-2">
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">User ID</span>
        <span class="font-mono text-gray-700">${user.id}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Email</span>
        <span class="text-gray-700">${user.email}</span>
      </div>
    </div>
    <div class="mt-6">
      <a href="/logout" class="w-full inline-block text-center bg-[#FF0000] text-white px-4 py-2.5 rounded-lg hover:bg-[#CC0000] transition font-medium">
        Logout
      </a>
    </div>
  </div>
</body>
</html>`;
}
