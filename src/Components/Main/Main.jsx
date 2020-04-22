import React from 'react';
import './Main.scss';
import ShortAdvantages from '../ShortAdvantages/ShortAdvantages';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';

const Main = () => {
  return (
    <main className='Main'>
      <ShortAdvantages />

      <Projects />
      <AboutMe />
    </main>
  );
};

export default Main;
