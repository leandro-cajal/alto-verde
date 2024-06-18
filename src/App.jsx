import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' font-quicksand'>
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App
