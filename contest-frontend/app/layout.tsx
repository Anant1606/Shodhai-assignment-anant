import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contest Platform",
  description: "A platform for programming contests and challenges",
};

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 text-transparent bg-clip-text">
                Contest Platform
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Sidebar() {
  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/contests', label: 'Contests', icon: '🏆' },
    { href: '/problems', label: 'Problems', icon: '📝' },
    { href: '/submissions', label: 'Submissions', icon: '📤' },
    { href: '/users', label: 'Users', icon: '👥' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen hidden md:block">
      <div className="h-full px-3 py-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors group"
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function MobileMenu() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 md:hidden">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <a href="/dashboard" className="inline-flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 group">
          <span className="text-xl">📊</span>
        </a>
        <a href="/contests" className="inline-flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 group">
          <span className="text-xl">🏆</span>
        </a>
        <a href="/problems" className="inline-flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 group">
          <span className="text-xl">📝</span>
        </a>
        <a href="/submissions" className="inline-flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 group">
          <span className="text-xl">📤</span>
        </a>
        <a href="/users" className="inline-flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 group">
          <span className="text-xl">👥</span>
        </a>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="min-h-full">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 px-4 py-6 md:px-8 md:py-8 pb-20 md:pb-8">
              <div className="mx-auto max-w-7xl">
                <div className="bg-white rounded-lg shadow p-4 md:p-6">
                  {children}
                </div>
              </div>
            </main>
          </div>
          <MobileMenu />
        </div>
      </body>
    </html>
  );
}
