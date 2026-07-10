// app/routes/settings.tsx
export default function Settings() {
  // 🔥 Ambil data user dari context atau localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {user.email?.[0]?.toUpperCase() || '?'}
          </div>
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-600">{user.email || 'No email'}</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500">User ID: <span className="font-mono">{user.id || 'N/A'}</span></p>
        </div>
        <div className="mt-6">
          <a href="/logout" className="w-full inline-block text-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
