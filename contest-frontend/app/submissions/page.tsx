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
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-xl font-bold mb-4">Submit Code</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="User ID"
          className="w-full border p-2"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Problem ID"
          className="w-full border p-2"
          value={problemId}
          onChange={(e) => setProblemId(e.target.value)}
        />
        <textarea
          placeholder="Code"
          className="w-full border p-2"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {result && <pre className="mt-4 p-2 bg-gray-100">{result}</pre>}
    </div>
  )
}
