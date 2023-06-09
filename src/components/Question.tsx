import { useQuestion } from '../store/question'
import { type Question as QuestionType } from '../types'
import { uuid, getBackgroundColor } from '../utils'
import Prisma from './Prisma'
import Option from './Option'

interface Props {
  questionInfo: QuestionType
}

const Question: React.FC<Props> = ({ questionInfo }) => {
  const selectedAnswer = useQuestion(state => state.selectedAnswer)
  const { id, question, options, answerUserSelected } = questionInfo

  const handleSelectedAnswer = (answerIndex: number) => () => selectedAnswer(id, answerIndex)

  return (
    <article className='w-full text-white flex flex-col gap-7'>
      {/* pregunta */}
      <Prisma question={question} />
      {/* opciones */}
      <ul className='divide-y divide-slate-200'>
        {options.map((option, index) => (
          <Option
            key={`option-id_${uuid()}`}
            option={option}
            answerUserSelected={answerUserSelected}
            bgColor={getBackgroundColor(questionInfo, index)}
            onSelectedAnswer={handleSelectedAnswer(index)}
          />
        ))}
      </ul>
    </article>
  )
}

export default Question