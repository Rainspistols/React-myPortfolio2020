import React from 'react';
import './ShortAdvantages.scss';

const ShortAdvantages = () => {
  const data = [
    { upper: '2 YEARS', under: 'Work experience' },
    { upper: '50+', under: 'Total projects' },
    { upper: '20+', under: 'React projects' },
  ];

  const rendeShortAdvantages = data.map(({ upper, under }, index) => (
    <div className='ShortAdvantage' key={index}>
      <p className='upper'>{upper}</p>
      <p className='under'>{under}</p>
    </div>
  ));

  return <div className='ShortAdvantages'>{rendeShortAdvantages}</div>;
};

export default ShortAdvantages;
