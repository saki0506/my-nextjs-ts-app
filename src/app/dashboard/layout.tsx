import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
      <aside className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          ダッシュボード
        </h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="block py-2 px-3 rounded-md hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ダッシュボードホーム
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="block py-2 px-3 rounded-md hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                設定
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}