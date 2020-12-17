import React from 'react'
import { InfoSection, Gallery } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjThree2,homeObjThree3,TopLine } from './Data';
import { Pricing } from '../../components';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import '../App.css'
import ReactPlayer from 'react-player';
import Footer from '../../components/Footer/Footer';


function Home() {
    return (
        <>
        
         <Gallery {...homeObjOne} />
        
      <InfoSection {...homeObjTwo} />

      <TopLine>Gallery</TopLine>
      <ImageSlider slides={SliderData} />;
          
      
      <Pricing />
      <InfoSection {...homeObjFour} />
      <Footer />
        </>
    );
}

export default Home;
