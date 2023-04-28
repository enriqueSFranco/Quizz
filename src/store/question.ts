import { create } from 'zustand'
import type { Question, ErrorResponse } from '../types'

interface QuestionState {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: () => Promise<Question[]>
}

export const useQuestion = create<QuestionState>(set => ({
  questions: [],
  currentQuestion: 1,
  fetchQuestions: async () => {
    try {
      const response = await fetch('http://localhost:5173/src/api/data.json')
      if (!response.ok) {
        const statusCode: string = response.status === 0 || response.status === null ? 'Oppps, ha ocurrido un error durante la peticion.' : String(response.status)
        const statusText: string = response.statusText === '' ? 'Oppps, ha ocurrido un error' : response.statusText
        const error: ErrorResponse = {
          err: new Error('Oppps, ha ocurrido un error durante la peticion.'),
          statusCode,
          statusText
        }
        throw error
      }
      const data = await response.json()
      set(data)
      return data
    } catch (error) {
      return error
    }
  }
}))
