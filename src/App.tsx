import Header from './components/Header'
import LayoutMain from './layout/LayoutMain'
import PlayGame from './components/PlayGame'

function App() {
  return (
    <div className='bg-black h-screen grid place-items-center'>
      <div className='flex flex-col gap-10'>
        <Header />
        <LayoutMain>
          <PlayGame />
        </LayoutMain>
      </div>
    </div>
  )
}

export default App
