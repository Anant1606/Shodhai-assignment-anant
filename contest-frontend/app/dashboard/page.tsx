'use client'

import { useEffect, useState } from 'react'
import { getData } from '@/lib/api'

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    contests: 0,
    problems: 0,
    submissions: 0,
  })

  useEffect(() => {
    Promise.all([
      getData('/users'),
      getData('/contests'),
      getData('/problems'),
      getData('/submissions'),
    ]).then(([users, contests, problems, submissions]) => {
      setStats({
        users: users.length,
        contests: contests.length,
        problems: problems.length,
        submissions: submissions.length,
      })
    })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Platform Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(stats).map(([key, val]) => (
          <div key={key} className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold capitalize">{key}</h2>
            <p className="text-3xl font-bold">{val}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
