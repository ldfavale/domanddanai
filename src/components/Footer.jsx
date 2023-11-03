import React from 'react'
import couple from '../assets/images/couple.jpg'

function Footer() {
  return (
    <footer id='thank_you' className=' flex flex-col mt-20 items-center justify-center h-screen p-12  [background:url(./assets/images/footer-shape.png)_center_bottom/100%_no-repeat_local] bg-[rgba(178,201,211,0.1)]'>
      <div className=' flex items-center justify-center w-80 h-72 md:w-[21rem] mb-8 mt-40 md:mb-16 [background:url("./assets/images/couple-frame.png")_center_center/cover_no-repeat_local]'>
        <img src={couple} alt="couple" className='rounded-full  w-[71%] -mt-10 -ml-4' />
      </div>
      <h2 className="font-aphrodite text-[2.625rem] md:text-[3.25rem] mb-8 md:mb-12">Thank You</h2>
      <p className="font-now text-xs md:text-sm leading-5 md:leading-6 text-gray-400 text-center mb-40 max-w-lg md:max-w-3xl">Place me like a seal over your heart,
    like a seal on your arm;
for love is as strong as death,
    its jealousy unyielding as the grave.
It burns like blazing fire,
    like a mighty flame.
 Many waters cannot quench love;
    rivers cannot sweep it away.
If one were to give
    all the wealth of one’s house for love,
    it would be utterly scorned. <br/><span className='text-[--link-color] font-medium'>Song of Songs 8:6-7</span></p>
    </footer>
  )
}

export default Footer
