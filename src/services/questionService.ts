import type { ErrorResponse, Question } from '../types'

export async function getQuestions(limit: number): Promise<Question[]> {
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
    const data = questions.sort(() => Math.random() - 0.5).slice(0, limit)
    return data
  } catch (error) {
    return error
  }
}
