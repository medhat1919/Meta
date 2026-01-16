'use client';
 import { motion } from 'framer-motion';
  import styles from '../styles';
 import {   fadeIn, staggerContainer ,planetVariants} from '../utils/motion';
   import { startingFeatures } from '../constants';

   import Image from 'next/image';
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} lg:flex-row flex-col`}
  > 


 <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className="flex-[0.75] flex justify-center flex-col"
  >
    <h2 className='font-normal text-[14px] text-secondary-white '>| What's New</h2>
    <p className="mt-[8px] font-bold text-[34px] sm:text-[32px] text-center lg:mr-10 text-secondary-white"
>what's new about Metaversus?</p>

    <div className="mt-[31px] flex flex-row max-w-[370px] gap-[24px] text-center">
<div className='flex flex-col items-center gap-5'>
<div className='bg-[#323f5d] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
<Image src="/vrpano.svg" alt="whats-new" width={30} height={30} /> </div>
<h2 className='font-semibold text-[20px] text-secondary-white'>A new world</h2>
<p className='font-normal text-[16px] text-gray-400'> we have the latest update with new world for you to visit</p>

</div>
<div className='flex flex-col items-center gap-5'>
<div className='bg-[#323f5d] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
<Image src="/headset.svg" alt="whats-new" width={30} height={30} /> </div>
<h2 className='font-semibold text-[20px] text-secondary-white'>More Realistic</h2>
 <p className='font-normal text-[16px] text-gray-400'>In the latest update, your eyes are wide opened </p>

</div>
 

    </div>
     
  </motion.div>
























 
  <motion.div
    variants={planetVariants('right')}
    className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
  >
    <Image
      src="/Whats-New.png"
      alt="get-started"
      width={350}
      height={350}
      className=" w-[90%] h-[90%] object-contain"
    />





  </motion.div>
  
 
  
  </motion.div>
  </section>
);

export default WhatsNew;
