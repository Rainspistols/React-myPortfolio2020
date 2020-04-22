import React from 'react';
import './NavMenuItem.scss';
import { motion } from 'framer-motion';

const variants = {
  hidden: (i) => ({
    x: '-100%',
    transition: { delay: i * 0.1 },
  }),
  visible: (i) => ({
    transition: { delay: i * 0.1 },
    x: 0,
  }),
};

const NavMenuItem = ({ className, href, text, index, isMenuActive }) => {
  return (
    <motion.li
      whileTap={{ scale: 1.5 }}
      className={className + ' NavMenuItem'}
      variants={variants}
      animate={isMenuActive ? 'visible' : 'hidden'}
      custom={index}
      initial='hidden'
    >
      <a href={href}>{text}</a>
    </motion.li>
  );
};

export default NavMenuItem;
