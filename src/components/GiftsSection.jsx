import React from 'react'


function GiftsSection() {

  return (
    <div id="gifts" className='flex flex-col pb-10 md:pb-20'>
      <div className="">
        <div className='flex  justify-center items-center   pt-24 px-5 bg-[rgb(198,202,214)]'>
        <div className='flex flex-col justify-center items-center  '>
            <h3 className='   font-italiana text-3xl sm:text-4xl md:text-5xl  text-center  max-w-6xl z-10 mb-12 px-4 md:px-10'>Your presence at our wedding will be a blessing, but if you want to give something else, all gifts will be donated to our favourite charities. Thank you very much!</h3>
            <a href="#footer" className='bg-[rgb(1,1,1)]  py-4 px-6 text-sm md:text-base text-white  mb-24 flex justify-center items-center' >
                        Contact Us
             </a>
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

export default GiftsSection
