import React from 'react'
import {stats } from '../constants'
import styles from '../style'
import { useLanguage } from '../context/LanguageContext'

const Stats = () =>  {
  const {currentLanguage} = useLanguage()
  return(
  <section className={`${styles.flexCenter} flex-row justify-center items-center   sm:pt-16 `}>
    {stats.map((stat) =>(
      <div key={stat.id} className={`flex-1 before:underline  flex justify-center items-center flex-row m-3 mt-12`}>
        
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white '>{stat.value}</h4>
        <p className='stats_hero font-poppins font-normal xs:text-[30px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 '>{currentLanguage === "en" ? stat.title : stat.titleSpanish}</p>
      </div>
    ))}

  </section>
  )}


export default Stats