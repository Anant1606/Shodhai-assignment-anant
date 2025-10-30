'use client'

import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface PageLayoutProps {
  children: ReactNode
  title: string
  loading?: boolean
}

export default function PageLayout({ children, title, loading }: PageLayoutProps) {
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
          loading: {
            style: {
              background: '#6D28D9',
              color: 'white',
            },
          },
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="pb-5 border-b border-gray-700">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              <p className="mt-4 text-sm text-gray-300 font-medium">Loading...</p>
            </div>
          </div>
        ) : (
          <div className="mt-8">{children}</div>
        )}
      </div>
    </main>
  )
}