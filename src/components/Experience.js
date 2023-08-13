import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}{' '}
          <a
            className='capitalize text-primary dark:text-primaryDark'
            href={companyLink}
            target={'_blank'}
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-0'>
      <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='relative w-[75%] mx-auto lg:w-[90%] md:w-full'>
        <motion.div
          className='absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top  dark:bg-primaryDark dark:shadow-3xl'
          style={{ scaleY: scrollYProgress }}
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Full Stack Web Developer'
            company='Smoove'
            companyLink='https://smoove.homes'
            time='2022-Present'
            address='Remote'
            work="Integral in creating Smoove's online moving platform. Led front-end and back-end work, enabling user-friendly features like registration, booking, tracking, and payments. Collaborated for seamless UX, optimized visuals, and effective testing. Aligned with stakeholders for brand cohesion and impactful outcome."
          />

          <Details
            position='Freelance Software Developer'
            company='UpWork'
            companyLink='https://upwork.com'
            time='December 2021-November 2022'
            address='Remote'
            work='As an Upwork freelance web developer, I design and build company websites. I create wirep-frames, optimize graphics, and collaborate with clients to align with their brand and goals. Thorough testing and debugging ensure seamless website functionality, polished, functional sites.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
