import { motion } from 'framer-motion';
import React from 'react';

const SkillTag = ({ name }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      className='font-semibold bg-dark text-light py-2 px-5 rounded-full dark:bg-light dark:text-dark
       md:text-sm md:py-1.5 md:px-3'
    >
      {name}
    </motion.li>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-xl font-bold mb-4 text-dark/75 dark:text-light/75 md:text-lg'>
        {title}
      </h3>
      <ul className='flex flex-wrap justify-center gap-3'>
        {skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-28 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div className='w-full flex flex-col gap-12 mt-16 mb-40 md:mb-32'>
        <SkillCategory
          title='Data Science & Analytics'
          skills={[
            'Python',
            'SQL',
            'pandas',
            'NumPy',
            'GeoPandas',
            'Jupyter',
            'Matplotlib',
            'Statistical Modeling',
          ]}
        />
        <SkillCategory
          title='Software Engineering'
          skills={[
            'JavaScript',
            'TypeScript',
            'C',
            'React',
            'Next.js',
            'Node.js',
            'REST APIs',
            'Git/GitHub',
          ]}
        />
        <SkillCategory
          title='Tools & Platforms'
          skills={[
            'Firebase',
            'Stripe',
            'Mapbox',
            'Sanity CMS',
            'Vercel',
            'Figma',
          ]}
        />
      </div>
    </>
  );
};

export default Skills;
