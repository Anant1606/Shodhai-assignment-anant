'use client'

import Link from 'next/link'

export default function Home() {
  const features = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊', description: 'View your progress and statistics' },
    { name: 'Contests', path: '/contests', icon: '🏆', description: 'Participate in coding competitions' },
    { name: 'Problems', path: '/problems', icon: '📝', description: 'Practice coding challenges' },
    { name: 'Submissions', path: '/submissions', icon: '📤', description: 'Track your solutions' },
    { name: 'Users', path: '/users', icon: '👥', description: 'Connect with other coders' },
  ]

  return (
    <main className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Contest Platform</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your one-stop platform for competitive programming and coding challenges
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.path}
              className="group relative rounded-xl border border-gray-200 p-6 hover:border-indigo-600 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                    {feature.name}
                  </h3>
                  <p className="mt-1 text-gray-600 group-hover:text-gray-900">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
