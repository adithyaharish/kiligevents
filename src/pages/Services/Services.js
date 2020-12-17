import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Footer from '../../components/Footer/Footer';
function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
}

export default Services;