import { useState } from 'react'
import Slider from './components/Slider'
import Header from './components/Header'
import OurStorySection from './components/OurStorySection'
import ThePlaceSection from './components/ThePlaceSection'
import ReservationSection from './components/ReservationSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      <OurStorySection />
      <ThePlaceSection/>
      <ReservationSection/>

      {/* <a href="https://www.flaticon.es/iconos-gratis/paloma" title="paloma iconos">Paloma iconos creados por shmai - Flaticon</a> */}
      {/* /* background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, #b2c9d3), to(transparent)); */}
      {/* <a href="https://www.freepik.com/icons/wedding">Icon by Freepik</a> */}
      {/* <a href="https://www.freepik.com/icons/wedding">Icon by Freepik</a> */}
       </>
  )
}

export default App
