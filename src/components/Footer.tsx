import { useQuestion } from '../store/question'

export const Footer: React.FC = () => {
  const questions = useQuestion(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(question => {
    const { answer, answerUserSelected } = question
    if (answerUserSelected == null) unanswered++
    else if (answerUserSelected === answer) correct++
    else incorrect++
  })

  return (
    <footer className='text-white bg-white/10 w-full h-16 grid place-content-center'>
      <ul className='flex items-center justify-center gap-4'>
        <li><span>✅ Correctas: {correct}</span></li>
        <li><span>❌ Incorrectas: {incorrect}</span></li>
        <li><span>❓ Sin responder: {unanswered}</span></li>
      </ul>
    </footer>
  )
}
