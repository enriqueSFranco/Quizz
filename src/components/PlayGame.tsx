import { shallow } from 'zustand/shallow'
import { useQuestion } from '../store/question'
import Question from '../components/Question'


const PlayGame = () => {
  const { questions, currentQuestion, fetchQuestions } = useQuestion(state => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    fetchQuestions: state.fetchQuestions
  }), shallow)

  const actualQuestion = questions[currentQuestion]

  function handleStartingGame() {
    fetchQuestions()
  }

  return (
    <>
      {questions.length === 0 && <button onClick={handleStartingGame} className='bg-blue-500/25 text-white w-24 h-10 rounded-sm'>Iniciar</button>}
      {questions.length > 0 && <Question questionInfo={actualQuestion} />}
    </>
  )
}

export default PlayGame