'use client'

import { useState } from 'react'
import { postData } from '@/lib/api'

export default function ProblemForm() {
  const [title, setTitle] = useState('')
  const [statement, setStatement] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = await postData('/problems', { title, statement })
    setResult(JSON.stringify(data, null, 2))
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create a New Problem</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter problem title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Statement</label>
          <textarea
            placeholder="Enter the problem statement"
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Create Problem
        </button>
      </form>
      {result && (
        <pre className="mt-6 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">{result}</pre>
      )}
    </div>
  )
}
