'use client'

import { useState } from 'react'
import { postData } from '@/lib/api'

export default function ContestForm() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = await postData('/contests', { name })
    setResult(JSON.stringify(data, null, 2))
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create a New Contest</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Contest Name</label>
          <input
            type="text"
            placeholder="Enter contest name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Create Contest
        </button>
      </form>
      {result && (
        <pre className="mt-6 p-4 bg-gray-100 rounded-lg text-sm overflow-x-auto">{result}</pre>
      )}
    </div>
  )
}
