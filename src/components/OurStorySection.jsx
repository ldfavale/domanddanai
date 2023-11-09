import React from 'react'


function LocationSection() {

  return (
    <div id="our_story" className='flex flex-col pb-20'>
      <div className="">
        <div className={"h-[420px] md:h-[510px] bg-[url('./assets/images/our_story.jpeg')] md:bg-[url('./assets/images/our_story_banner.jpg')] bg-center  bg-no-repeat flex flex-col justify-center items-center" }>
             {/* Main Title */}
             <h2 className='   font-italiana text-4xl sm:text-5xl md:text-6xl     text-white text-center   z-10'> Our Story</h2>
        </div>
        <div className='flex  justify-center items-center pt-20  md:pt-44 px-10'>
        <div className='flex flex-col justify-center items-center  max-w-2xl md:mx-22'>
            <h3 className='   font-italiana text-4xl sm:text-4xl md:text-5xl  text-center   z-10'>A Dutch and a Canadian who fell in love in Uruguay.</h3>
            <p className='text-center font-gayathri my-20 md:my-28 md:text-lg' >
                We both left our lives in The Netherlands and Canada in 2022 and started a new adventure in Uruguay. It was in a small local church that we met and his family invited her over for lunch. We had so many things in common and it immediately felt like we’ve been friends for years. It was the start of a good friendship. Throughout the rest of the summer we became better friends and could talk for hours about combined interests. Despite that, our lovestory began after summer. The ironic thing is that both of our families met each other before we fell in love. Little did we know we would all become family very soon after that. We both knew we wanted to spend the rest of our lives together. The rest is history.
            </p>
          </div>
        </div>
      </div>


      {/* https://www.google.com/maps/place/Estancia+Aguaverde/@-34.843679,-54.87884,17z/data=!4m9!3m8!1s0x95751be35b57acad:0xbbf7e6f2a152c88e!5m2!4m1!1i2!8m2!3d-34.8427182!4d-54.8790803!16s%2Fg%2F11clgd_8_g?hl=es&entry=ttu */}


    </div>
  )
}

export default LocationSection
