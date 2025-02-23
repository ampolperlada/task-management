import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h1 className="text-xl font-bold">Task Manager</h1>
          <nav>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="block p-2 rounded hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/tasks" className="block p-2 rounded hover:bg-gray-700">
                  Tasks
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
