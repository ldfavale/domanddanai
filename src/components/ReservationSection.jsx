import React from 'react'
import salud from '../assets/images/cheers.png'
const arrow_right_icon = <svg class="w-3 h-3 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>;


function ReservationSection() {
  return (
    <section id='rsvp' className=" font-now  [background:url(./assets/images/rsvp-flower.png)_center_bottom_20px_no-repeat_local]  ">
      <div className='flex flex-col justify-center items-center pb-32 bg-[rgba(255,255,255,0.50)]'>
        <div className='flex flex-col  m-4 text-center bg-white  max-w-[45rem]'>
        <div className='flex justify-center items-center px-8 pt-8 bg-white '>
              <div className='w-24 h-[1px] bg-gray-300'></div>
              <img src={salud} alt="" className='h-12 w-12 mx-8' />
              <div className='w-24 h-[1px] bg-gray-300'></div>
            </div>
          <h3 className='  text-2xl uppercase  my-3 mt-8  font-medium text-[rgb(32, 42, 65)] tracking-wide' >Are You attending?</h3>
          <p className=' text-sm md:text-base text-gray-500 mb-10 font-light   leading-6'> Please fill in the form to confirm your attendance. We are so exited to share this special moment with you </p>

          <div className='border-[1.6px] border-solid border-[#edf3f5] p-[1.6px] flex col'>
            <div className='border-[1.6px] border-solid border-[#edf3f5]  w-full flex flex-col py-8 px-5 font-light '>
              <div id="form" className='flex flex-col md:flex-row   flex-wrap justify-between'>
                <input required name='name' type="text" placeholder='Your Name*' className='mb-6 h-11 w-full md:w-80  pr-2 px-2 py-4 border-1 border-solid border-[#edf3f5] bg-[#fbfbfb]  text-sm '/>
                <input required  name='email' type="email" placeholder='Your Email*' className='mb-6 h-11 w-full md:w-80   px-2 py-4 border-1 border-solid border-[#edf3f5] bg-[#fbfbfb]  text-sm '/>
                <select name="guests" id="" className='mb-6 h-11 w-full px-2  border-1 border-solid border-[#edf3f5] md:w-80 bg-[#fbfbfb] text-sm text-gray-500 '>
                  <option value="" disabled selected>Number of Guests*</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select name="guests" id="" className='mb-6 h-11 w-full px-2  border-1 border-solid border-[#edf3f5] md:w-80 bg-[#fbfbfb] text-gray-500 text-sm '>
                  <option value="" disabled selected>I Am Attending*</option>
                  <option value="all">All Events</option>
                  <option value="ceremony">Wedding Ceremony</option>
                  <option value="party">Reception Party</option>
                </select>
                <textarea name="message" id="" cols="30" rows="5" placeholder='Your Message' className='mb-6  w-full px-2 py-4 border-1 border-solid border-[#edf3f5] bg-[#fbfbfb] text-sm '></textarea>
                {/* <input type="button" value="send invitation {arrow_right_icon}" className='bg-[--main-color] py-4 px-6 uppercase text-white text-xs font-bold' /> */}
              </div>
                <div className='flex flex-col justify-center items-center '>
                  <button  className='bg-[--main-color]  py-4 px-6 uppercase text-white text-xs font-bold flex justify-center items-center' > Send Invitation <span className='mb-1'>{arrow_right_icon}</span></button>
                </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ReservationSection
