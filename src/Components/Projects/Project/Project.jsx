import React from 'react';
import './Project.scss';
import { motion } from 'framer-motion';

const Project = ({ imgPath, title, href }) => {
  return (
    <li className='Project'>
      <img src={imgPath} alt={title} />
      <motion.a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </motion.a>
    </li>
  );
};

export default Project;
