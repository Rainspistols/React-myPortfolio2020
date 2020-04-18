import React, { useState } from 'react';
import './Nav.scss';
import NavMenu from '../NavMenu/NavMenu';
import { IoMdMenu } from 'react-icons/io/';
import { IconContext } from 'react-icons';
import { MdSubdirectoryArrowRight } from 'react-icons/md/';

const Nav = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const onCloseMenu = () => {
    setMenuIsActive(false);
  };

  return (
    <div className='Nav'>
      <NavMenu menuIsActive={menuIsActive} onCloseMenu={onCloseMenu}/>
      <div className='header' onClick={() => setMenuIsActive(true)}>
        <IconContext.Provider value={{ className: 'menuIcon' }}>
          <IoMdMenu />
        </IconContext.Provider>

        <span className='name'>Galchenko Maksym</span>
      </div>

      <div className='text'>
        <p className='slogan'>I turn ideas into web applications.</p>

        <IconContext.Provider value={{ className: 'arrow' }}>
          <MdSubdirectoryArrowRight />
        </IconContext.Provider>

        <span className='profession'>Frontend Developer</span>
      </div>
    </div>
  );
};

export default Nav;
