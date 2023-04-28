export interface Question {
  id: number
  question: string
  options: string[]
  answer: number
  questionUserSelected?: number
  isCorrectUserAnswer?: boolean
}

export interface ErrorResponse {
  err: Error
  statusCode: string
  statusText: string
}

export interface PropsChildren {
  children: React.ReactNode
}
