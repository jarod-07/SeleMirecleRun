import React from 'react';
import './DashBoardCompStyle.scss'
import { BenefitsGraphic } from '../DasboardGraphics/BenefitsGraphic';
import { VoluntaryDeductionsGraphic } from '../DasboardGraphics/VoluntaryDeductionsGraphic';

export const DashBoardComp = () => {
  return (
    <div className='parent'>
      <div className='div1'> </div>
      <div className='div2'> <BenefitsGraphic/></div>
      <div className='div3'> <VoluntaryDeductionsGraphic/> </div>
      <div className='div4'> </div>
    </div>
  );
};