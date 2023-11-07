import React from 'react'


function LocationSection({id,bannerImg}) {

  return (
    <div id="location" className='flex flex-col pb-20'>
      <div className="">
        <div className={"h-[510px]  bg-[url('./assets/images/aguaverde.webp')]   bg-[center_left_-300px] md:bg-[center_left]  bg-no-repeat flex flex-col justify-center items-center" }>
             {/* Main Title */}
             <h2 className='   font-italiana text-4xl sm:text-5xl md:text-6xl     text-white text-center   z-10'> Let's Celebrate</h2>
        </div>
        <div className='flex  justify-center items-center  pt-32  md:pt-44 px-10'>
        <div className='flex flex-col justify-center items-center  max-w-xs '>
            <h3 className='   font-italiana text-4xl sm:text-4xl md:text-5xl  text-center   z-10'>The Reception</h3>
            <p className='text-center my-12 md:my-28' >
              The wedding ceremony will take place at Estancia Aguaverde <br/><br/>
              17 February, 2024 Camino del Cerro Eguzquiza Km. 7, Punta del Este, Uruguay<br/><br/>
              5PM - 12PM
            </p>
          </div>
          {/* <div className='flex flex-col justify-center items-center w-72 mx-32'>
            <h3 className='   font-italiana text-4xl sm:text-4xl md:text-5xl  text-center   z-10'>The Reception</h3>
            <p className='text-center mt-28' >
              The wedding ceremony will take place at Estancia Aguaverde <br/><br/>
              17 February, 2024 Camino del Cerro Eguzquiza Km. 7, Punta del Este, Uruguay<br/><br/>
              5PM - 12PM
            </p>
          </div> */}
        </div>
      </div>


      {/* https://www.google.com/maps/place/Estancia+Aguaverde/@-34.843679,-54.87884,17z/data=!4m9!3m8!1s0x95751be35b57acad:0xbbf7e6f2a152c88e!5m2!4m1!1i2!8m2!3d-34.8427182!4d-54.8790803!16s%2Fg%2F11clgd_8_g?hl=es&entry=ttu */}


    </div>
  )
}

export default LocationSection
