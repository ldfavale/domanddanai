import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div id='header' className=' flex flex-col '>
        <div className="flex flex-col py-8 border-b border-gray-200">
          <h1 className="font-aphrodite text-2xl md:text-3xl  mb-3 text-center ">
            Dom & Danai
          </h1>
          {/* Wedding Date */}
          <div className="flex justify-center items-center">
            <span className='font-now text-[0.625rem] text-gray-400 before:bg-gray-400 after:bg-gray-400 md:text-xs line-subtitle  tracking-widest '>17 FEB 2024 </span>
          </div>

        </div>
        <div className="flex justify-end md:justify-center px-8 py-3   ">



        <nav className=' justify-center font-now uppercase font-semibold  text-xs  hidden md:flex'>
          <ul className='flex flex-row [&_li]:py-3 [&_li]:md:px-6  [&_li]:lg:px-8 [&_li]:flex [&_li]:items-center '>
            <li>Countdown</li>
            <li>Our Story</li>
            <li>Moments</li>
            <li>Reservation</li>
            <li>The Place</li>
          </ul>
        </nav>

        <span className='p-[0.6rem] border bg-[#202a41]  md:hidden'>
          <svg class="w-5 h-4  text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"  stroke-width="1.7" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </span>

        </div>
      </div>
    )
  }
}
