export interface User {
  id: number
  name: string
  email: string
}

export interface NewUser {
  name: string
  email: string
}

export interface Contest {
  id: number
  name: string
  createdAt?: string
  status?: 'active' | 'completed' | 'upcoming'
}

export interface NewContest {
  name: string
}

export interface Problem {
  id: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface NewProblem {
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface Submission {
  id: number
  userId: number
  problemId: number
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: string
}

export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
}