import React from 'react';
import './Advantages.scss';
import { IconContext } from 'react-icons';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Advantages = () => {
  const dataAdvantages = [
    'Experience : 2 years+',
    'Availability : ASAP',
    'Languages: Polish,  English, Russian',
    'Good team player',
    'Open and eager to learn new technologies',
    'Able to learn fast',
    'Advanced UI/UX experience',
  ];

  const [listRef, listInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  const renderAdvantages = dataAdvantages.map((item, index) => (
    <motion.li
      key={index}
      animate={listInView ? 'visible' : 'hidden'}
      custom={index}
      variants={variants}
      positionTransition
    >
      <IconContext.Provider value={{ className: 'checkIcon' }}>
        <IoMdCheckboxOutline />
      </IconContext.Provider>
      {item}
    </motion.li>
  ));

  return (
    <ul ref={listRef} className='myAdvantages'>
      {renderAdvantages}
    </ul>
  );
};

export default Advantages;
