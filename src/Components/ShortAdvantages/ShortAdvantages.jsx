import React from 'react';
import './ShortAdvantages.scss';

const ShortAdvantages = () => {
  const data = [
    { upper: '2 YEARS', under: 'Work experience' },
    { upper: '50+', under: 'Total projects' },
    { upper: '20+', under: 'React projects' },
    { upper: '15', under: 'FINISHED COURSES' },
    { upper: '24/7', under: 'accessibility' },
  ];

  const rendeShortAdvantages = data.map(({ upper, under }, index) => (
    <li className='ShortAdvantage' key={index}>
      <p className='upper'>{upper}</p>
      <p className='under'>{under}</p>
    </li>
  ));

  return <ul className='ShortAdvantages'>{rendeShortAdvantages}</ul>;
};

export default ShortAdvantages;
