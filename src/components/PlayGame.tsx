import { useQuestion } from '../store/question'
import Question from '../components/Question'
import { IconArrowRight, IconArrowLeft } from './Icon'
import { Footer } from './Footer'

const LIMIT_QUESTIONS: number = 10

const PlayGame = () => {
  const { questions, currentQuestion, goNextQuestion, goBackQuestion, fetchQuestions } = useQuestion(state => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    goNextQuestion: state.goNextQuestion,
    goBackQuestion: state.goBackQuestion,
    fetchQuestions: state.fetchQuestions
  }))


  const actualQuestion = questions[currentQuestion]

  function handleStartingGame() {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <>
      {questions.length === 0 && <button onClick={handleStartingGame} className='bg-blue-500/25 text-white w-24 h-10 rounded-sm'>Iniciar</button>}
      {questions.length > 0 && (
        <div className='flex flex-col items-center justify-center gap-5'>
          <div className='flex items-center gap-3'>
            <button
              disabled={currentQuestion > questions.length}
              onClick={goBackQuestion}
              className='bg-transparent grid place-content-center w-12 h-12 rounded-full hover:bg-white/10'><IconArrowLeft /></button>
            <span className='text-white'>{currentQuestion} / {questions.length}</span>
            <button
              disabled={currentQuestion > questions.length}
              onClick={goNextQuestion}
              className='bg-transparent grid place-content-center w-12 h-12 rounded-full hover:bg-white/10'><IconArrowRight /></button>
          </div>
          <Question questionInfo={actualQuestion} />
          <Footer />
        </div>
      )}
    </>
  )
}

export default PlayGame