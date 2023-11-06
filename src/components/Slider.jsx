import React from 'react'

import '../App'
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";
import slide1 from '../assets/images/slide1.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide5 from '../assets/images/slide5.jpg'




function Slider() {
  return (
    <div id='countdown'>

      <HeroSlider

      style={{minHeight: "650px"}}
      autoplay
      accessibility={{
        shouldDisplayButtons: false
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100
      }}
    >
      <Overlay>
        {/* Overlay Container */}
        <div className='flex  flex-col items-center justify-center h-[100%]'>
          {/* <div className='h-10 '></div> */}

          <span className='line-subtitle line-subtitle-slider font-gayathri  text-white   text-[0.625rem] md:text-xs  lg:text-[1.125rem]  mb-4 tracking-widest'>17.02.2024 </span>

          {/* Main Title */}
          <h1 className=' font-italiana text-[2.5rem] mb-8 mt-4 md:text-6xl lg:text-[5rem] slider-title md:mb-10  text-white [text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);] text-center '> Danai & Domenic</h1>

          {/* Wedding Date */}
          <span className='line-subtitle line-subtitle-slider font-gayathri  text-white   text-[0.625rem] md:text-xs  lg:text-[1.125rem]  mb-12 tracking-widest'>Are getting married </span>

          {/* Countdown */}
          {/* <WeddingCountdown /> */}

        </div>
      </Overlay>

      <Slide


        background={{
          backgroundImageSrc: slide1
        }}
      />


      <Slide
        background={{
          backgroundImageSrc: slide3
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: slide5
        }}
      />

      <Nav  />
    </HeroSlider>
    </div>
  )
}

export default Slider
