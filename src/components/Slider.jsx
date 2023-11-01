import React from 'react'

import '../App'
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide5 from '../assets/images/slide5.jpg'
import WeddingCountdown from './WeddingCountdown';




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

          {/* Main Title */}
          <h1 className=' font-aphrodite text-[2.5rem] mb-8 mt-4 md:text-6xl lg:text-[5rem] slider-title md:mb-10  text-white [text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);] text-center '> Dom & Danai</h1>

          {/* Wedding Date */}
          <span className='line-subtitle line-subtitle-slider font-now  text-white before:bg-white after:bg-white  text-[0.625rem] md:text-xs  lg:text-[1.125rem]  mb-12 tracking-widest'>17 FEB 2024 </span>

          {/* Countdown */}
          <WeddingCountdown />

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
          backgroundImageSrc: slide5
        }}
      />

      <Nav  />
    </HeroSlider>
    </div>
  )
}

export default Slider
