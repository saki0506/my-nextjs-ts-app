import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 shadow-md">
          <nav className="bg-gradient-to-r from-blue-600 to-indigo-700">
            <ul className="flex items-center justify-start gap-6 p-4 max-w-6xl mx-auto">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-blue-200 font-semibold transition-colors"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-blue-200 font-semibold transition-colors"
                >
                  概要
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-white hover:text-blue-200 font-semibold transition-colors"
                >
                  ダッシュボード
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings"
                  className="text-white hover:text-blue-200 font-semibold transition-colors"
                >
                  設定
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-4 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}