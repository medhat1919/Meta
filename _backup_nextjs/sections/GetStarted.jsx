'use client';
 import { motion } from 'framer-motion';
  import styles from '../styles';
 import {   fadeIn, staggerContainer ,planetVariants} from '../utils/motion';
   import { startingFeatures } from '../constants';

   import Image from 'next/image';
 const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} lg:flex-row flex-col`}
  > 
 
  <motion.div
    variants={planetVariants('left')}
    className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
  >
    <Image
      src="/get-started.png"
      alt="get-started"
      width={350}
      height={350}
      className=" w-[90%] h-[90%] object-contain"
    />





  </motion.div>
  
  <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className="flex-[0.75] flex justify-center flex-col"
  >
    <h2 className='font-normal text-[14px] text-secondary-white '>| How Metaversus Works</h2>
    <p className="mt-[8px] font-bold text-[34px] sm:text-[32px] text-center lg:mr-10 text-secondary-white"
>Get started with just a few clicks</p>

    <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
<div className='flex flex-row items-center gap-5'>
<div className='bg-[#323f5d] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
<p className='font-bold text-[20px] text-white'>01</p>
</div>
<p className='font-normal text-[16px] text-secondary-white'>Find a world that suits you and you want to enter</p>

</div>
<div className='flex flex-row items-center gap-5'>
<div className='bg-[#323f5d] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
<p className='font-bold text-[20px] text-white'>02</p>
</div>
<p className='font-normal text-[16px] text-secondary-white'>Enter the Metaverse world by clicking on the card </p>

</div>
<div className='flex flex-row items-center gap-5'>
<div className='bg-[#323f5d] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
<p className='font-bold text-[20px] text-white'>03</p>
</div>
<p className='font-normal text-[16px] text-secondary-white'> Abandon your home life and enjoy the life in the metaverse</p>

</div>
      
    </div>
     
  </motion.div>
  
  </motion.div>
  </section>
);

export default GetStarted;
