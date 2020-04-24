import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: (i) =>
    window.innerWidth >= 1024
      ? {
          transition: { delay: i * 0.1 },
          y: -300,
        }
      : {
          x: '-100%',
          transition: { delay: i * 0.1 },
        },
  visible: (i) =>
    window.innerWidth >= 1024
      ? {
          transition: { delay: i * 0.1 },
          y: 0,
        }
      : {
          transition: { delay: i * 0.1 },
          x: 0,
        },
  whileHover: {
    color: 'red'
  },
};

const NavMenuItem = ({
  className,
  href,
  text,
  index,
  isMenuActive,
  whileHover,
}) => {
  return (
    <motion.li
      whileTap={window.innerWidth >= 1024 ? { scale: 0.8 } : { scale: 1.5 }}
      className={className + ' NavMenuItem'}
      variants={variants}
      animate={isMenuActive ? 'visible' : 'hidden'}
      custom={index}
      initial='hidden'
      whileHover={whileHover}
    >
      <a href={href}>{text}</a>
    </motion.li>
  );
};

export default NavMenuItem;
