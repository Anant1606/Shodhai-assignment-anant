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
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-xl font-bold mb-4">Create Problem</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Statement"
          className="w-full border p-2"
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
      {result && <pre className="mt-4 p-2 bg-gray-100">{result}</pre>}
    </div>
  )
}
