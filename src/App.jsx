import { useState } from 'react'
import Slider from './components/Slider'
import Header from './components/Header'
import OurStorySection from './components/OurStorySection'
import ThePlaceSection from './components/ThePlaceSection'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      <OurStorySection />
      <ThePlaceSection/>
      <ReservationSection/>
      <Footer/>

      {/* <a href="https://www.flaticon.es/iconos-gratis/paloma" title="paloma iconos">Paloma iconos creados por shmai - Flaticon</a> */}
      {/* /* background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, #b2c9d3), to(transparent)); */}
      {/* <a href="https://www.freepik.com/icons/wedding">Icon by Freepik</a> */}
      {/* <a href="https://www.freepik.com/icons/wedding">Icon by Freepik</a> */}
      {/* <a href="https://www.freepik.es/search?format=search&last_filter=query&last_value=blue+love+map+marker&query=blue+love+map+marker&type=icon">Icono de Andrean Prabowo</a> */}
       </>
  )
}

export default App
