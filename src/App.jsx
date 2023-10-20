import { useState } from 'react'
import './App.css'
import HeroSlider, { Overlay, Slide, Nav, ButtonsNav } from "hero-slider";

import slide1 from './assets/images/slide1.jpeg'
import slide2 from './assets/images/slide2.jpeg'
import slide3 from './assets/images/slide3.jpeg'
// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
 const giauPass = "https://themegeniuslab.com/html/jolly/assets/images/slider/slide-1.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='  h-44 '></div>
      <HeroSlider
      height={"calc(100vh - 210px)"}
      style={{minHeight: "650px"}}
      autoplay
      accessibility={{
        shouldDisplayButtons: false
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <div className='flex  flex-col items-center justify-center h-[100%]'>
          <div className='h-10'></div>
          <h1 className=' font-aphrodite text-[5rem] slider-title mb-4 text-white [text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);] '> Dom & Danai</h1>

          <span className='font-now  text-white text-xl slider-subtitle mb-12'>17 FEB 2024 </span>

          <div className=' max-w-2xl bg-[rgba(178,201,211,0.8)] '>
            <div className=' flex flex-row'>
              <div className="p-8 py-5 w-44 flex flex-col  justify-center items-center">
                <h2 className='font-aphrodite text-white text-7xl mb-7'>177</h2>
                <span className='font-now text-white text-sm'>DIAS</span>
              </div>
              <div className="p-8 py-5 w-44 flex flex-col  justify-center items-center">
                <h2 className='font-aphrodite text-white text-7xl mb-7'>17</h2>
                <span className='font-now text-white text-sm'>HORAS</span>
              </div>
              <div className="p-8 py-5 w-44 flex flex-col  justify-center items-center">
                <h2 className='font-aphrodite text-white text-7xl mb-7'>54</h2>
                <span className='font-now text-white text-sm'>MINUTOS</span>
              </div>
              <div className="p-8 py-5 w-44 flex flex-col  justify-center items-center">
                <h2 className='font-aphrodite text-white text-7xl mb-7'>29</h2>
                <span className='font-now text-white text-sm'>SEGUNDOS</span>
              </div>
            </div>
          </div>
        </div>
      </Overlay>

      <Slide


        background={{
          backgroundImageSrc: slide1
        }}
      />

      <Slide


        background={{
          backgroundImageSrc: slide2
        }}
      />

      <Slide


        background={{
          backgroundImageSrc: slide3
        }}
      />

      <Slide


        background={{
          backgroundImageSrc: slide1
        }}
      />

      <Nav  />
    </HeroSlider>
    <div className='  h-56 '></div>


    </>
  )
}

export default App
