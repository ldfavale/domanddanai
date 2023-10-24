import { useState } from 'react'
import Slider from './components/Slider'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
    </>
  )
}

export default App
