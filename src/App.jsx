import { useState } from 'react'
import Slider from './components/Slider'
import Header from './components/Header'
import paloma from './assets/images/paloma.png'
import our_story from './assets/images/our_story.jpeg'
import vertical_story from './assets/images/vertical_story.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      <section className=' h-screen mt-8'>
        <div className='flex flex-col '>
          <div className='flex justify-center items-center px-8 pt-8 '>
            <div className='w-24 h-[1px] bg-gray-300'></div>
            <img src={paloma} alt="" className='h-16 w-14 mx-8' />
            <div className='w-24 h-[1px] bg-gray-300'></div>
          </div>

          <h1 className="font-now text-2xl md:text-3xl text-center mb-2"> Our love Story </h1>
          <div className='flex flex-col md:flex-row items-center justify-center p-4'>
            <img src={our_story} alt="" className='w-[100%] my-8 max-w-lg md:hidden ' />
            <img src={vertical_story} alt="" className='w-[100%] my-8 max-w-md hidden md:flex' />
            <div className='p-8  shadow-2xl sombrita max-w-lg md:-ml-20 z-10 bg-white'>
              <h1 className="font-aphrodite text-2xl md:text-3xl text-center mb-5"> Once upon a time... </h1>
              <h2 className="font-now text-[--main-color]  text-sm  md:text-base text-center mb-6">
              A Dutch and a Canadian Who fell in love in Uruguay.
              </h2>
              <p className='font-now text-sm  text-gray-400'> We both left our lives in The Netherlands and Canada in 2022 and started a new adventure in Uruguay. We met in a small local church and his family invited her over for lunch. We had so many things in common and it immediately felt like we’ve been friends for years. It was the start of a good friendship.
                  Throughout the rest of the summer we became better friends and could talk for hours about combined interests. Despite that, our lovestory began after summer. The funny thing is that both of our families met each other before we fell in love. Little did we know we would all become family very soon after that.
                  We both knew we wanted to spent the rest of our lives together and the rest is history. </p>
            </div>
          </div>


        </div>
      </section>
      {/* <a href="https://www.flaticon.es/iconos-gratis/paloma" title="paloma iconos">Paloma iconos creados por shmai - Flaticon</a> */}
    </>
  )
}

export default App
