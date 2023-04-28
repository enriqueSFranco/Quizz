import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  question: string
}

const Prisma: React.FC<Props> = ({ question }) => {
  return (
    <SyntaxHighlighter language='javascript' style={atomOneDark}>
      {question}
    </SyntaxHighlighter>
  )
}

export default Prisma