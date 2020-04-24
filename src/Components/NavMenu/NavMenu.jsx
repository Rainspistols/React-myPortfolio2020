import React from 'react';
import './NavMenu.scss';
import { motion } from 'framer-motion';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const NavMenu = ({ isMenuActive, dimensionWidth }) => {
  const data = [
    // { href: null, text: 'Home' }, -- FOR RUTURE
    {
      href: '#projects',
      text: 'Projects',
      whileHover: {
        backgroundColor: `#0CB2DC`,
        scale: 1.2,
        color: 'rgb(255,255,255)',
      },
    },
    {
      href: '#aboutMe',
      text: 'About me',
      whileHover: {
        backgroundColor: `rgb(241,214,32)`,
        scale: 1.2,
        color: 'rgb(255,255,255)',
      },
    },
    {
      href: '#contact',
      className: 'contact',
      text: 'Contact',
      whileHover: { scale: 1.2 },
    },
  ];

  const renderMenu = data.map(({ ...arr }, index) => (
    <NavMenuItem
      dimensionWidth={dimensionWidth}
      {...arr}
      isMenuActive={isMenuActive}
      key={index}
      index={index}
    />
  ));

  return (
    <motion.nav className='NavMenu'>
      <ul className='menuList'>{renderMenu}</ul>
    </motion.nav>
  );
};

export default NavMenu;
