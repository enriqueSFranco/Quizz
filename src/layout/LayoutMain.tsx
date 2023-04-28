import { PropsChildren } from '../types'

const LayoutMain: React.FC<PropsChildren> = ({ children }) => {
  return (
    <main className='w-full'>
      <section className='rounded-md overflow-hidden w-full'>
        {children}
      </section>
    </main>
  )
}

export default LayoutMain