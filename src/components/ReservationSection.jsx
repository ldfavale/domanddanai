import React, {useRef, useState} from 'react'
import salud from '../assets/images/cheers.png'
const arrow_right_icon = <svg className="w-3 h-3 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>;

import emailjs from '@emailjs/browser';






function ReservationSection({handleShowAlert}) {

  const form = useRef()
  const [formLoading, setFormLoading] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setFormLoading(true)
    emailjs.sendForm('service_dxrjpaa', 'template_pjmwlr5', form.current, '9SB5Pl4JoUOwPWuuy')
      .then((result) => {
          console.log(result.text);
          handleShowAlert("success","Your place has been succesfully reserved")
          setFormLoading(false)
        }, (error) => {
          console.log(error.text);
          handleShowAlert("failure","An error ocurred. Please try again later")
          setFormLoading(false)

      });
      e.target.reset()
  };

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
              <form id="form" ref={form} onSubmit={sendEmail} className='flex flex-col md:flex-row   flex-wrap justify-between'>
                <input required name='name' type="text" placeholder='Your Name*' className='mb-6 h-11 w-full md:w-80  pr-2 px-2 py-4 border-1 border-solid border-[#edf3f5] bg-[#fbfbfb]  text-sm '/>
                <input required  name='email' type="email" placeholder='Your Email*' className='mb-6 h-11 w-full md:w-80   px-2 py-4 border-1 border-solid border-[#edf3f5] bg-[#fbfbfb]  text-sm '/>
                <select name="guests" id="" defaultValue="" className='mb-6 h-11 w-full px-2  border-1 border-solid border-[#edf3f5] md:w-80 bg-[#fbfbfb] text-sm text-gray-500 '>
                  <option value="" disabled >Number of Guests*</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select name="attending" id="" defaultValue="" className='mb-6 h-11 w-full px-2  border-1 border-solid border-[#edf3f5] md:w-80 bg-[#fbfbfb] text-gray-500 text-sm '>
                  <option value="" disabled >I Am Attending*</option>
                  <option value="Both Events">All Events</option>
                  <option value="The ceremony">Wedding Ceremony</option>
                  <option value="The party">Reception Party</option>
                </select>
                <textarea name="message" id="" cols="30" rows="5" placeholder='Your Message' className='mb-6  w-full px-2 py-4 border-1 border-solid border-[#edf3f5] bg-[#fbfbfb] text-sm '></textarea>
                {/* <input type="button" value="send invitation {arrow_right_icon}" className='bg-[--main-color] py-4 px-6 uppercase text-white text-xs font-bold' /> */}
                <div className='w-full flex flex-col justify-center items-center'>
                {!formLoading &&
                    <button type='submit' className='bg-[--main-color]  py-4 px-6 uppercase text-white text-xs font-bold flex justify-center items-center' >
                        Send Invitation <span className='mb-1'>{arrow_right_icon}</span>
                    </button>
                }
                {formLoading &&
                    <button type='submit' className='bg-[--main-color]  py-4 px-6 uppercase text-white text-xs font-bold flex justify-center items-center leading-3' >
                        <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-3  text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                        Loading...
                    </button>
                }
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ReservationSection
