export interface Question {
  id: number
  question: string
  options: string[]
  answer: number
  questionUserSelected?: number
  isCorrectAnswerUserSelected?: boolean
}

export interface ErrorResponse {
  err: Error
  statusCode: string
  statusText: string
}
