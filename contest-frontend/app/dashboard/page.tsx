'use client'

import { useEffect, useState } from 'react'
import { getData } from '@/lib/api'
import { Toaster, toast } from 'react-hot-toast'

interface DashboardStats {
  users: number
  contests: number
  problems: number
  submissions: number
}

interface StatCard {
  key: keyof DashboardStats
  label: string
  icon: string
}

const statCards: StatCard[] = [
  {
    key: 'users',
    label: 'Total Users',
    icon: `<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`
  },
  {
    key: 'contests',
    label: 'Active Contests',
    icon: `<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
  },
  {
    key: 'problems',
    label: 'Total Problems',
    icon: `<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>`
  },
  {
    key: 'submissions',
    label: 'Total Submissions',
    icon: `<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>`
  }
]

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    users: 0,
    contests: 0,
    problems: 0,
    submissions: 0,
  })
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    try {
      const [usersRes, contestsRes, problemsRes, submissionsRes] = await Promise.all([
        getData<any[]>('/users'),
        getData<any[]>('/contests'),
        getData<any[]>('/problems'),
        getData<any[]>('/submissions'),
      ])

      // Check for errors in any response
      const errors = [usersRes, contestsRes, problemsRes, submissionsRes]
        .filter(res => res.error)
        .map(res => res.error)

      if (errors.length > 0) {
        throw new Error(errors.join(', '))
      }

      setStats({
        users: usersRes.data?.length || 0,
        contests: contestsRes.data?.length || 0,
        problems: problemsRes.data?.length || 0,
        submissions: submissionsRes.data?.length || 0,
      })
    } catch (err) {
      console.error('Error fetching stats:', err)
      toast.error('Failed to load dashboard statistics')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 pb-8">
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#8B5CF6',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#8B5CF6',
            },
          },
          error: {
            style: {
              background: '#1F2937',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#1F2937',
            },
          },
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="pb-5 border-b border-gray-700">
          <h1 className="text-3xl font-bold text-white">Platform Dashboard</h1>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              <p className="mt-4 text-sm text-gray-300 font-medium">Loading statistics...</p>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map(({ key, label, icon }) => (
              <div key={key} className="bg-gray-800 rounded-lg overflow-hidden border border-purple-500/20">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-purple-900/20 rounded-lg flex items-center justify-center border border-purple-500/30"
                        dangerouslySetInnerHTML={{ __html: icon }}
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-400 truncate">{label}</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-white">{stats[key]}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
