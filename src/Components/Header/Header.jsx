import React, { useState } from 'react';
import './Header.scss';
import MainPadding from '../../Layouts/MainPadding/MainPadding';
import NavMenu from '../NavMenu/NavMenu';
import { IconContext } from 'react-icons';
import { MdSubdirectoryArrowRight } from 'react-icons/md/';
import { IoMdMenu } from 'react-icons/io/';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuActive, setMenuIsActive] = useState(false);

  const onToggleMenu = () => {
    setMenuIsActive(!isMenuActive);
  };

  const renderIcon = isMenuActive ? <MdClose /> : <IoMdMenu />;

  return (
    <motion.header className='Header'>

      <MainPadding>
        <div className='toggleAndName'>
          <motion.div
            className='iconWrap'
            onClick={onToggleMenu}
            whileTap={{ scale: 2 }}
          >
            <IconContext.Provider value={{ className: 'menuIcon' }}>
              {renderIcon}
            </IconContext.Provider>
          </motion.div>

          <span className='name'>Galchenko Maksym</span>
        </div>

        <NavMenu isMenuActive={isMenuActive} />

        <div className='text'>
          <p className='slogan'>I turn ideas into web applications.</p>

          <IconContext.Provider value={{ className: 'arrow' }}>
            <MdSubdirectoryArrowRight />
          </IconContext.Provider>

          <span className='profession'>Frontend Developer</span>
        </div>
      </MainPadding>
    </motion.header>
  );
};

export default Header;
