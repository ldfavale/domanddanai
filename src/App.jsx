import { useState } from 'react'
import Slider from './components/Slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='  h-44 '></div>
      <Slider />


    </>
  )
}

export default App
