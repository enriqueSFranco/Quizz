interface Props {
  option: string
  bgColor: string
  answerUserSelected: number | undefined
  onSelectedAnswer: () => void
}

const Option: React.FC<Props> = ({ option, bgColor, answerUserSelected, onSelectedAnswer }) => {
  return (
    <li className='h-16 first:pt-0 last:pb-0'>
      <button disabled={answerUserSelected != null} onClick={onSelectedAnswer} className={`w-full h-full flex items-center cursor-pointer ${bgColor}`}>{option}</button>
    </li>
  )
}

export default Option