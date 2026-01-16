'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';

const ExploreCard = ({ id,index , active,  imgUrl, title, handleClick}) => (
      
      <motion.div
         variants={fadeIn('right', 'tween',index * 0.2, 1)}
          className={`relative ${active === id ? 'flex lg:w-[400px] w-[200px]' : 'lg:flex-[0.5] flex-[2]'}  flex items-center justify-center min-w-[170px] h-[450px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
          onClick={() => handleClick(id)}
      >
        <Image src={imgUrl} alt={title} fill className=" absolute object-cover w-full h-full  rounded-[24px]" />
         
{active !== id?(
<div className="absolute flex-[2.5] z-10 rotate-[-90deg] w-[100px] lg:bottom-10 bottom-10 lg:left-[30px] left-[-10px]  ">
  <h1 className="font-bold  text-white">{title}</h1>
</div>
):
(<div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
  <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
    <Image src="/headset.svg" alt="headset" width={30} height={30} className="object-contain"/>
  </div>
   <p className="mt-[4px] text-[16px] uppercase font-normal leading-[20px] text-white">Enter The Metaverse</p>
    <h2 className="mt-[14px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
</div>
)
}

      </motion.div>

  );

export default ExploreCard;
