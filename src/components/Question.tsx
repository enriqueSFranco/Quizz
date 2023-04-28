import { useQuestion } from '../store/question'
import { uuid } from '../utils/uuid'

const Question = () => {
  const questions = useQuestion(state => state.questions)

  return (
    <article className='w-full h-full text-white'>
      {/* pregunta */}
      {questions.map(({ id, question, options }) => (
        <div key={`question-id_${id}`}>
          <p className='text-xl text-center'>{question}</p>
          <div>
            {/* opciones */}
            <ul className='divide-y divide-slate-200'>
              {options.map(option => (
                <li key={`option-id_${uuid()}`} className='h-16 first:pt-0 last:pb-0'>
                  <div className='h-full flex items-center cursor-pointer hover:bg-slate-900'>{option}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  )
}

export default Question