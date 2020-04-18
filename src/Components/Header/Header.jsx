import React from 'react';
import './Header.scss';
import Nav from '../Nav/Nav';
import MainPadding from '../Layouts/MainPadding/MainPadding';

const Header = () => {
  return (
    <header className='Header'>
      <MainPadding>
        <Nav />
      </MainPadding>
    </header>
  );
};

export default Header;
