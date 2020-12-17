import React from 'react';
import { InfoSection} from '../../components';
import {homeObjThree3,homeObjThree4,homeObjThree1,homeObjThree2,homeObjFour,TopLine } from './Data';
import { Pricing } from '../../components';
import Carousel from "react-elastic-carousel";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import  { useState } from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import '../App.css'
import Footer from '../../components/Footer/Footer';

{/*
const breakPoints = [
    { width: 1, itemsToShow: 1 },
  ];
*/}

function Products() {

  return (
    <>
    
    {/*}
        <Carousel breakPoints={breakPoints}>
          
      <Gallery {...homeObjThree1} />
      <Gallery {...homeObjThree2} />
      <Gallery {...homeObjThree3} />
      <Gallery {...homeObjThree4} />

      </Carousel>
    */}
    <TopLine>Gallery</TopLine>
     <ImageSlider slides={SliderData} />;
  

      <Pricing />
      <InfoSection {...homeObjFour} />
      <Footer />
       </>
  );
}

export default Products;