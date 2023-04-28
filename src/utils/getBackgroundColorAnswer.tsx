import { type Question } from '../types'
import { COLORS } from '../consts'

export const getBackgroundColor = (data: Question, selectedAnswerIndex: number): string => {

  const { answerUserSelected, answer } = data
  if (answerUserSelected == null) return COLORS.transparent
  if (selectedAnswerIndex !== answer && selectedAnswerIndex !== answerUserSelected) return COLORS.transparent
  if (selectedAnswerIndex === answer) return COLORS.succes
  if (selectedAnswerIndex === answerUserSelected) return COLORS.error

  return COLORS.transparent
}