 'use client';
 import { motion } from 'framer-motion';
 import styles from '../styles';
 import {   slideIn, staggerContainer, textVariant } from '../utils/motion';
 import Image from 'next/image';
 const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className=' w-full flex justify-center items-center'>
      <motion.h1 
      variants={textVariant(1.1) }
      className={styles.heroHeading}>Metaverse</motion.h1>
      </div>
      <motion.div
      variants={textVariant(1.2) }
      className=' w-full flex justify-center items-center z-20'>
        <h1 className={styles.heroHeading} >Ma</h1>
        <div  className={styles.heroDText} />
        <h1 className={styles.heroHeading} >Ness</h1>
      </motion.div>

<motion.div
variants={slideIn('right', 'tween', 0.2, 1)
}
className="relative w-full md:-mt-[20px] -mt-[12px]"
>
  <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px] ' >
    <Image src="/cover.png" alt='cover' fill className='object-cover w-full h-full rounded-tl-[140px] z-[10]'/>


    <a href="#explore">
      <div className='w-full flex justify-end sm:mt-[120px] mt-[50px] pr-[40px] relative z-10'>
        <Image src="/stamp.png" alt='stamp' width={155} height={155} className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' />
      </div>
    </a>
          </div>

 




</motion.div>



 </motion.div> 


     
  </section>
);

export default Hero;
