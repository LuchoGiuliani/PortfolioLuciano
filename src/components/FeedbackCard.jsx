import React from 'react'
import { quotes,reyes } from '../assets'

const FeedbackCard = ({content, name, title, img,link}) => (
  <div className='flex justify-between flex-col px-10 py-12  max-w-[356px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
   <a href={link} target="_blank">
    <div className='flex flex-col'>
      <img src={img} alt={name} className=" w-[196px] h-[196px] rounded-full" />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white my-10'>{name}</h4>
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</p>
      </div>
    </div>
    </a>
  </div>
)

export default FeedbackCard