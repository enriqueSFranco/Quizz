export interface Question {
  id: number
  question: string
  options: string[]
  answer: number
  answerUserSelected?: number
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

export interface BackgroundColors {
  transparent: string
  succes: string
  error: string
}
