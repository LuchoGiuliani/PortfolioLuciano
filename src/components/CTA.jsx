import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2} >
     Connect with me 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}> I am always eager to take on new challenges and collaborate with like-minded professionals to create innovative and impactful solutions. Thank you for your consideration, and I look forward to hearing from you soon.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA