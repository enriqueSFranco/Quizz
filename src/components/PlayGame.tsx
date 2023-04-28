import { shallow } from 'zustand/shallow'
import { useQuestion } from '../store/question'
import Question from '../components/Question'


const PlayGame = () => {
  const { questions, currentQuestion, goNextQuestion, fetchQuestions } = useQuestion(state => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    goNextQuestion: state.goNextQuestion,
    fetchQuestions: state.fetchQuestions
  }), shallow)


  const actualQuestion = questions[currentQuestion]

  function handleStartingGame() {
    console.log('fetch')
    fetchQuestions()
  }

  return (
    <>
      {questions.length === 0 && <button onClick={handleStartingGame} className='bg-blue-500/25 text-white w-24 h-10 rounded-sm'>Iniciar</button>}
      {questions.length > 0 && (
        <div>
          <button onClick={goNextQuestion} className='bg-blue-800 text-white'>Siguiente</button>
          <Question questionInfo={actualQuestion} />
        </div>
      )}
    </>
  )
}

export default PlayGame