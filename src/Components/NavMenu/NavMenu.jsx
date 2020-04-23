import React from 'react';
import './NavMenu.scss';
import { motion } from 'framer-motion';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const NavMenu = ({ isMenuActive }) => {
  const data = [
    { href: null, text: 'Home' },
    { href: '#projects', text: 'Projects' },
    { href: '#aboutMe', text: 'About me' },
    { href: '#contact', className: 'contact', text: 'Contact' },
  ];

  const renderMenu = data.map(({ ...arr }, index) => (
    <NavMenuItem
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
