'use client'

import { useState } from 'react'
import { postData } from '@/lib/api'

export default function SubmissionForm() {
  const [userId, setUserId] = useState('')
  const [problemId, setProblemId] = useState('')
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = await postData('/submissions', {
      userId: parseInt(userId),
      problemId: parseInt(problemId),
      code,
    })
    setResult(JSON.stringify(data, null, 2))
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Submit Your Code</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">User ID</label>
          <input
            type="number"
            placeholder="Enter your User ID"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Problem ID</label>
          <input
            type="number"
            placeholder="Enter the Problem ID"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={problemId}
            onChange={(e) => setProblemId(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Code</label>
          <textarea
            placeholder="Paste your code here"
            className="w-full border border-gray-300 rounded-lg p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Submit Code
        </button>
      </form>
      {result && (
        <pre className="mt-6 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">{result}</pre>
      )}
    </div>
  )
}
