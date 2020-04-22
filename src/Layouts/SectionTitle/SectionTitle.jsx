import React from 'react';
import './SectionTitle.scss';
import MainPadding from '../MainPadding/MainPadding';

const SectionTitle = ({ title, color }) => {
  return (
    <MainPadding>
      <h1 className='SectionTitle'>
        {title + ' ..'}
        <span className='line' style={{ background: color }}></span>
      </h1>
    </MainPadding>
  );
};

export default SectionTitle;
