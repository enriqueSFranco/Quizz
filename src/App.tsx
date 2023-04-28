import { shallow } from 'zustand/shallow'
import Header from './components/Header'
import Question from './components/Question'
import LayoutMain from './layout/LayoutMain'
import { useQuestion } from './store/question'

function App() {
  const { questions, fetchQuestions } = useQuestion(state => ({ questions: state.questions, fetchQuestions: state.fetchQuestions }), shallow)

  function handleStartingGame() {
    fetchQuestions()
  }

  return (
    <div className='bg-black h-screen grid place-items-center'>
      <div className='flex flex-col gap-10'>
        <Header />
        <LayoutMain>
          {questions.length === 0 && <button onClick={handleStartingGame} className='bg-blue-500/25 text-white w-24 h-10 rounded-sm'>Iniciar</button>}
          {questions.length > 0 && <Question />}
        </LayoutMain>
      </div>
    </div>
  )
}

export default App
