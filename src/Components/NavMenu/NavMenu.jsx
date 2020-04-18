import React from 'react';
import './NavMenu.scss';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import posed from 'react-pose';
const Nav = posed.nav({
  visible: { transform: 'translateX(0%)' },
  hidden: { transform: 'translateX(-100%)' },
});

const NavMenu = ({ onCloseMenu, menuIsActive }) => {
  return (
    <Nav className='NavMenu' pose={menuIsActive ? 'visible' : 'hidden'}>
      <button onClick={() => onCloseMenu()}>
        <IconContext.Provider value={{ className: 'closeIcon' }}>
          <MdClose />
        </IconContext.Provider>
      </button>

      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Projects</a>
        </li>
        <li>
          <a href='/'>About me</a>
        </li>
        <li>
          <a href='/' className='contact'>
            Contact
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default NavMenu;
