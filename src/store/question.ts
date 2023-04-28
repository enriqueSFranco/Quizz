import { create } from 'zustand'
import type { Question, ErrorResponse } from '../types'

interface QuestionState {
  questions: Question[]
  currentQuestion: number
  selectedAnswer: (questionId: number, answerIndex: number) => void
  fetchQuestions: () => Promise<Question[]>
}

export const useQuestion = create<QuestionState>((set, get) => ({
  questions: [],
  currentQuestion: 1,
  selectedAnswer: (questionId: number, answerIndex: number): void => {
    const { questions } = get() // recuperamos el estado de questions
    const newQuestions: Question[] = structuredClone(questions)

    // encontrar el indice de la pregunta
    const questionIndex: number = newQuestions.findIndex(question => question.id === questionId)
    // recuperamos la informacion de la pregunta
    const questionInfo = newQuestions[questionIndex]
    // comparamos si la respuesta de la pregunra es igual a la respuesta que selecciono el usuario
    const isCorrectUserAnswer = questionInfo.answer === answerIndex

    newQuestions[questionIndex] = {
      ...questionInfo,
      questionUserSelected: answerIndex,
      isCorrectUserAnswer
    }
    set({ questions: newQuestions })
  },
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
      const { questions } = await response.json()
      const data = questions.sort(() => Math.random() - 0.5).slice(0, 5)
      set({ questions: data })
      return data
    } catch (error) {
      return error
    }
  }
}))
