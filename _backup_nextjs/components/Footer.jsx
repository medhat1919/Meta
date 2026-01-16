'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, footerVariants } from '../utils/motion';


const Footer = () => (
  <motion.footer variants={footerVariants}
    initial="hidden"
    whileInView="show"

    className={`${styles.paddings} py-8 relative z-10`}>
<div className='footer-gradient'/>

<div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
  <div className='flex items-center justify-between flex-wrap gap-5'>
    <h4 className='font-bold md:text-[64px] text-[44px] text-white leading-tight'>Enter the Metaverse</h4>
    <button className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
      <img src="/headset.svg" alt="headset" className='w-[24px] h-[24px] object-contain' />
      <span className='font-normal text-[16px] text-white'>Enter Metaverse</span>
    </button>
  </div>
  
  <div className='flex flex-col'>
    <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
    <div className='flex items-center justify-between flex-wrap gap-4'>
      <h4 className='font-extrabold text-[24px] text-white leading-tight'>METAVERSUS</h4>
      <p className='font-normal text-[14px] text-white opacity-50'>Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
      <div className='flex gap-4'>
        <img src="/facebook.svg" alt="facebook" className='w-[24px] h-[24px] object-contain cursor-pointer' />
        <img src="/twitter.svg" alt="twitter" className='w-[24px] h-[24px] object-contain cursor-pointer' />
        <img src="/instagram.svg" alt="instagram" className='w-[24px] h-[24px] object-contain cursor-pointer' />
        <img src="/linkedin.svg" alt="linkedin" className='w-[24px] h-[24px] object-contain cursor-pointer' />
      </div>
    </div>
  </div>

</div>


  </motion.footer>
);

export default Footer;
