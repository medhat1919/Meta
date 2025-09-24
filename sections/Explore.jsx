'use client';
 import { motion } from 'framer-motion';
 import { TypingText } from '../components';
 import styles from '../styles';
 import {   fadeIn, staggerContainer } from '../utils/motion';
 import ExploreCard from '../components/ExploreCard';
  import { exploreWorlds } from '../constants';
  import {useState} from 'react';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return(
  
  <section className= 'sm:p-[10px] xs:p-3 px-6 pt-[150px] relative z-10'>
 <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col sm:mb-16 mb-6`}
 >
<motion.div
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="flex flex-col justify-center items-center"
>
  <h1 className="text-[13px] font-bold leading-[68px] text-center text-white">| The World</h1>
  <p className=" font-bold sm:text-[52px] text-[20px] text-center text-secondary-white">Choose The World You Want To Explore </p>
</motion.div>

<motion.div
variants={staggerContainer}
className={`${styles.innerWidth} mt-[50px] flex flex-wrap justify-center gap-3 h-[500px]`}>

{exploreWorlds.map((world, index) => (    
  <ExploreCard key={world.id} {...world} index={index} imgUrl={world.imgUrl} title={world.title} description={world.description}  active={active} handleClick={setActive} />
))}

  </motion.div>










  </motion.div>
  </section>
)
};

export default Explore;
