import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Question, ErrorResponse } from '../types'
import { getQuestions } from '../services/questionService'

interface QuestionState {
  questions: Question[]
  currentQuestion: number
  selectedAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goBackQuestion: () => void
  fetchQuestions: (limit: number) => Promise<void>
}

export const useQuestion = create<QuestionState>()(persist((set, get) => ({
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
      answerUserSelected: answerIndex,
      isCorrectUserAnswer
    }
    set({ questions: newQuestions })
  },
  goNextQuestion: () => {
    const { currentQuestion, questions } = get()
    const totalQuestions = questions.length
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < totalQuestions) set({ currentQuestion: nextQuestion })
  },
  goBackQuestion: () => {
    const { currentQuestion } = get()
    const prevQuestion = currentQuestion - 1

    if (prevQuestion > 0) set({ currentQuestion: prevQuestion })
  },
  fetchQuestions: async (limit: number): Promise<void> => {
    try {
      const questions = await getQuestions(limit)
      set({ questions })
    } catch (error) {
      return error
    }
  }
}), {
  name: '__zustand__state__',
  storage: createJSONStorage(() => localStorage)
}))
