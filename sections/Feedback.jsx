'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';


const Feedback = () => (
       <section className='sm:p-[150px] xs:p-8 px-6 pt-[150px]'>

<motion.div variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto ${styles.flexCenter} lg:flex-row  gap-6 flex-col`}
>

  <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col">

<div className='feedback-gradient'/>
<div className='relative h-[450px] w-[300px] z-10 bg-[#1d1836] p-4 rounded-[32px] border border-[#6a6a6a]'>
  <div className='mt-12 mb-5'>
  <h4 className='font-bold text-[24px] text-secondary-white'>Samantha</h4>
  <p className='mt-[8px] text-white'>Founder | Metaversus</p></div>
    <p className='mt-[40px] font-normal text-[20px] text-secondary-white'>
    "With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything"
  </p>
  </div>



  </motion.div>

<motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col ">
<div className=' h-[450px]  rounded-3xl'>
  <img src="planet-09.png" alt=""  className='w-full h-full rounded-3xl object-cover  ' /></div>
</motion.div>






</motion.div>
  </section>
);

export default Feedback;
