import React from 'react'
import Countdown from "react-countdown";

const Completionist = () => { return };
const wedding_date = new Date(2024,1,17,20,0,0)

const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    console.log(completed)
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='max-w-2xl bg-[rgba(178,201,211,0.85)]'>
      <div className='flex flex-row'>
        <div className="p-8 py-7 lg:py-5 w-16 sm:w-20 md:w-44 flex flex-col  justify-center items-center">
          <h2 className='font-aphrodite text-white text-3xl lg:text-5xl xl:text-7xl mb-2 lg:mb-4 xl:mb-6'>{days}</h2>
          <span className='font-now text-white text-sm'>DIAS</span>
        </div>
        <div className="p-8 py-5 w-16 sm:w-20 md:w-44 flex flex-col  justify-center items-center">
          <h2 className='font-aphrodite text-white text-3xl lg:text-5xl xl:text-7xl mb-2 lg:mb-4 xl:mb-6'>{hours}</h2>
          <span className='font-now text-white text-sm'>HORAS</span>
        </div>
        <div className="p-8 py-5 w-16 sm:w-20 md:w-44 flex flex-col  justify-center items-center">
          <h2 className='font-aphrodite text-white text-3xl lg:text-5xl xl:text-7xl mb-2 lg:mb-4 xl:mb-6'>{minutes}</h2>
          <span className='font-now text-white text-sm'>MINS</span>
        </div>
        <div className="p-8 py-5 w-16 sm:w-20 md:w-44 flex flex-col  justify-center items-center">
          <h2 className='font-aphrodite text-white text-3xl lg:text-5xl xl:text-7xl mb-2 lg:mb-4 xl:mb-6'>{seconds}</h2>
          <span className='font-now text-white text-sm'>SEGS</span>
        </div>
      </div>
    </div>
    );
  }
};


function WeddingCountdown() {
  return (
      <Countdown date={wedding_date} renderer={renderer} />
  )
}

export default WeddingCountdown
