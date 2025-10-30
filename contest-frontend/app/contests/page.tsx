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
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-xl font-bold mb-4">Create Contest</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Contest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
      {result && <pre className="mt-4 p-2 bg-gray-100">{result}</pre>}
    </div>
  )
}
