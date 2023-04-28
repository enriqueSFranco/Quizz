import { IconTypeScript } from './Icon'

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center gap-4'>
      <IconTypeScript />
      <h1 className='text-white uppercase text-5xl font-mono'>Preguntas sobre Typescript</h1>
    </header>
  )
}

export default Header