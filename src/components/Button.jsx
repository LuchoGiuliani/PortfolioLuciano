import React from 'react'

const Button = ({styles}) => {
  return (
   <a target='_blank' href="https://wa.me/+541134936556"> <button type='button' className={`hover:scale-110 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get in touch
    </button>
  </a>
  )
}

export default Button