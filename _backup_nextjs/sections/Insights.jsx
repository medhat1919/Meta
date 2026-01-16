  'use client';
 import { motion } from 'framer-motion';
  import styles from '../styles';
 import {   fadeIn, staggerContainer,  textContainer } from '../utils/motion';
 import Image from 'next/image';
 

const Insights = () => (
     <section className='sm:p-[150px] xs:p-8 px-6 pt-[150px]'>

<motion.div variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto ${styles.flexCenter}   gap-6 flex-col`}
>


<motion.div variants={ textContainer} className={`${styles.flexCenter} flex-col`}>
  
    <h2 className='font-normal text-[14px] text-secondary-white '>| Insight</h2>
    <p className="mt-[8px] font-bold text-[34px] sm:text-[32px] text-center lg:mr-10 text-secondary-white"
>Insight about Metaversus</p>
</motion.div>


<div className='flex flex-col gap-6'>
<motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
 className=" w-[100%] h-[250px] flex lg:flex-row items-center flex-col gap-4">
  
     <img src="/planet-06.png" alt="map" className="lg:w-[250px] w-full h-full object-cover rounded-[32px]" />
<div className='flex flex-col gap-2 ml-4' >
  <h2 className='font-bold text-[34px] text-secondary-white '>The launch of the Metaversus Makes Elon Musk Proud</h2>
    <p className="mt-[8px] font-normal text-[14px] sm:text-[15px] text-left lg:mr-10 text-gray-500"
>Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas ultricies mi eget mauris.</p>
</div>

<div className='hidden sm:flex justify-center items-center cursor-pointer gap-2 p-5 rounded-full  border border-white   '>
  <img src="/arrow.svg"  alt="" />
</div>
 

</motion.div>
<motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
 className=" w-[100%] h-[250px] flex lg:flex-row items-center flex-col gap-4">
  
     <img src="/planet-07.png" alt="map" className="lg:w-[250px] w-full h-full object-cover rounded-[32px]" />
<div className='hidden sm:flex flex-col gap-2 ml-4' >
  <h2 className='font-bold text-[34px] text-secondary-white '>7 tips to easily master the madness of the Metaversus</h2>
    <p className="mt-[8px] font-normal text-[14px] sm:text-[14px] text-left lg:mr-10 text-gray-500"
>Vetia congue laoreet egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
</div>

<div className='hidden sm:flex justify-center items-center cursor-pointer gap-2 p-5 rounded-full  border border-white  '>
  <img src="/arrow.svg" alt="" />
</div>
 

</motion.div>
<motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
 className=" w-[100%] h-[250px] flex lg:flex-row items-center flex-col gap-4">
  
     <img src="/planet-08.png" alt="map" className="lg:w-[250px] w-full h-full object-cover rounded-[32px]" />
<div className='hidden sm:flex flex-col gap-2 ml-4' >
  <h2 className='font-bold text-[34px] text-secondary-white '>With one platform you can explore the whole world virtual and real</h2>
    <p className="mt-[8px] font-normal text-[14px] sm:text-[12px] text-left lg:mr-10 text-gray-500"
>quam quis quam ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.</p>
</div>

<div className='hidden sm:flex justify-center items-center cursor-pointer gap-2 p-5 rounded-full  border border-white -mr-2  '>
  <img src="/arrow.svg" alt="" />
</div>
 

</motion.div>
</div>











</motion.div>
  </section>
);

export default Insights;
