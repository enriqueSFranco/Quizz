interface Props {
  option: string
  onSelectedAnswer: () => void
}

const Option: React.FC<Props> = ({ option, onSelectedAnswer }) => {
  return (
    <li className='h-16 first:pt-0 last:pb-0'>
      <div onClick={onSelectedAnswer} className='h-full flex items-center cursor-pointer'>{option}</div>
    </li>
  )
}

export default Option