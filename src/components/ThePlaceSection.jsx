import React from 'react'
import aguaverde from '../assets/images/aguaverde_cut_peli.jpeg'
import map from '../assets/images/map_ok.png'


function ThePlaceSection() {
  return (
    <div id='the_place' className='flex flex-col pb-20'>
      <div className=" bg-[#DAEEEC]">
        <div className="h-[510px] after:bg-[url('./assets/images/smiling.png')] after:bg-no-repeat  after:bg-[1216px_810px_]  after:bg-[center_top_-80px] sm:after:bg-[center_top_-80px] celebrate
        after:relative after:-top-[31.85rem] after:z-[0] after:left-0 after:w-full after:h-full after:content-[''] after:block">
             {/* Main Title bg-[912px_607px_] bg-[608px_405px_] */}
        </div>
      </div>

      <h1 className=' font-aphrodite text-4xl sm:text-5xl md:text-6xl     text-white text-center   -mt-[23rem] z-10'> Celebrate Our Love</h1>

      {/* Wedding Date */}
      <h3 className=' font-now  text-white text-center  text-lg md:text-xl  lg:text-2xl [letter-spacing:5px] mt-4 z-10'>17 FEB 2024 </h3>

      {/* https://www.google.com/maps/place/Estancia+Aguaverde/@-34.843679,-54.87884,17z/data=!4m9!3m8!1s0x95751be35b57acad:0xbbf7e6f2a152c88e!5m2!4m1!1i2!8m2!3d-34.8427182!4d-54.8790803!16s%2Fg%2F11clgd_8_g?hl=es&entry=ttu */}

      <div className=' mt-28 flex flex-col sm:flex-row  sm:flex-wrap p-4 items-center sm:justify-center'>

        <div className='bg-white p-3  order-3 lg:order-1 flex flex-col max-w-[428px] sm:max-w-xs  mx-2 md:mx-4 items-center mb-10 sombrita z-0'>
          {/* <h3 className='font-aphrodite text-lg sm:text-xl text-center mb-10 before:relative before:top-9 before:left-[50%]   before:-translate-x-1/2 before:w-32 before:h-[2px] before:flex before:bg-gray-300 '> The Place</h3> */}
         <img src={aguaverde} alt="aguaverde" />
        </div>

        {/* #c3dacf #b4ccc1 cerde degrade */}

        <div className='bg-white  p-14  order-1 lg:order-2 flex flex-col max-w-[428px] sm:max-w-xs mx-2 md:mx-4 items-center mb-10 sombrita z-0'>
          <h3 className='font-aphrodite text-lg sm:text-xl text-center mb-10 before:relative before:top-9 before:left-[50%]   before:-translate-x-1/2 before:w-32 before:h-[2px] before:flex before:bg-gray-300 '> The Reception</h3>
          <p className='text-[13px] sm:text-sm font-now text-center text-gray-500 mb-5'>17 February, 2024 at 8PM  Camino del Cerro Eguzquiza Km. 7, Punta del  Este, Uruguay</p>
          <p className=' font-now text-center text-sm text-gray-900 mb-5'>Estancia Aguaverde</p>
          <a href="https://www.aguaverde.uy" className='uppercase text-xs text-[--main-color] text-center  underline m-2'>www.aguaverde.uy</a>
        </div>

        <div className='bg-white p-3  order-2  lg:order-3  flex flex-col max-w-[428px] sm:max-w-xs  mx-2 md:mx-4 items-center mb-10 sombrita z-0'>
        {/* <h3 className='font-aphrodite text-lg sm:text-xl text-center mb-10 before:relative before:top-9 before:left-[50%]   before:-translate-x-1/2 before:w-32 before:h-[2px] before:flex before:bg-gray-300 '> The Place</h3> */}
         <a style={{pointer:'cursor'}} target="_blank" href="https://www.google.com/maps/place/Estancia+Aguaverde/@-34.843679,-54.87884,17z/data=!4m9!3m8!1s0x95751be35b57acad:0xbbf7e6f2a152c88e!5m2!4m1!1i2!8m2!3d-34.8427182!4d-54.8790803!16s%2Fg%2F11clgd_8_g?hl=es&entry=ttu">
          <img src={map} alt="map" />
          </a>
        </div>
    </div>
    </div>
  )
}

export default ThePlaceSection
