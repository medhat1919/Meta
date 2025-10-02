'use client';
 import { motion } from 'framer-motion';
  import styles from '../styles';
 import {   fadeIn, staggerContainer, textContainer } from '../utils/motion';
 const World = () => (
  <section className='sm:p-[150px] xs:p-8 px-6 pt-[150px]'>

<motion.div variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
>


<motion.div variants={ textContainer} className={`${styles.flexCenter} flex-col`}>
  
    <h2 className='font-normal text-[14px] text-secondary-white '>| People on the World</h2>
    <p className="mt-[8px] font-bold text-[34px] sm:text-[32px] text-center lg:mr-10 text-secondary-white"
>Track friends around you and invite them to play together in the same world</p>
</motion.div>
   
 
<motion.div
    variants={fadeIn('up', 'tween', 0.3, 1)}
    className="relative mt-[68px] w-full h-[550px]"
  >
    <img src="/map.png" alt="map" className="w-full h-full object-cover" />
    
    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <img src="/people-01.png" alt="people" className="w-full h-full" />
    </div>
       <div className="hidden lg:block absolute top-1/2 left-[25%] w-[170px] h-[120px] p-[6px]  ">
      <img src="/planet-02.png" alt="people" className="w-full h-full rounded-xl" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[10px] font-bold">The Upside Down</h1>
    </div>
    <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <img src="/people-02.png" alt="people" className="w-full h-full" />
      
    </div>
    <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <img src="/people-03.png" alt="people" className="w-full h-full" />
    </div>
    <div className="hidden lg:block absolute top-[200px] right-[300px] w-[170px] h-[120px] p-[6px] ">
      <img src="/planet-06.png" alt="people" className="w-full h-full rounded-xl" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[10px] font-bold">Hawkins Labs</h1>
    </div>
  </motion.div>









</motion.div>












   </section>
);

export default World;
