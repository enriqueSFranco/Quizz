interface Props {
  children: React.ReactNode
}

const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <main className='flex flex-col items-center gap-4'>

      <section>
        {children}
      </section>
    </main>
  )
}

export default LayoutMain