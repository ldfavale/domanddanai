import React, { useState } from 'react'

 function Header() {

    const [menuButtonClicked, setMenuButtonClicked] = useState(false);

    return (
      <div id='header' className=' flex flex-col '>
        <div className="flex justify-end md:justify-center px-8 py-3   ">
        <nav className=' justify-center font-gayathri uppercase font-semibold  text-xs  hidden md:flex'>
          <ul className='flex flex-row [&_li]:py-3 [&_li]:md:px-6  [&_li]:lg:px-8 [&_li]:flex [&_li]:items-center '>
            <li><a href="#our_story">Our Story</a></li>
            <li><a href="#the_place">Location</a></li>
            <li><a href="#rsvp">RSVP</a></li>
          </ul>
        </nav>

        <button onClick={()=>{setMenuButtonClicked(!menuButtonClicked)}} className='p-[0.6rem] border bg-[#202a41]  md:hidden transition-all'>
          <svg className="w-5 h-4  text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"  strokeWidth="1.7" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        </div>


      { menuButtonClicked &&
        <nav className='font-gayathri uppercase font-semibold text-xs '>
          <ul className='flex flex-col text-center items-center justify-center [&_li]:py-3 [&_li]:md:px-6  [&_li]:lg:px-8 [&_li]:flex [&_li]:items-center '>
            <li><a href="#countdown">Countdown</a></li>
            <li><a href="#our_story">Our Story</a></li>
            <li><a href="#the_place">The Place</a></li>
            <li><a href="#rsvp">Reservation</a></li>
            <li><a href="#thank_you">Thank You</a></li>
          </ul>
        </nav>
        }

      </div>
    )

}

export default Header
