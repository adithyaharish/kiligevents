import React from 'react'
import { InfoSection, Gallery } from '../../components';
import { homeObjOne, homeObjTwo, homeObjFour,TopLine } from './Data';
import { Pricing } from '../../components';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import '../App.css'
import Footer from '../../components/Footer/Footer';
import Form from '../Form/Form';

function Home() {
    return (
        <>
        <div id="home">
         <Gallery {...homeObjOne} />

        </div>

        <div id="home2">
      <InfoSection {...homeObjTwo} />
      </div>

        <div id="gallery">
      <TopLine>Gallery</TopLine>
      <ImageSlider slides={SliderData} />;
      </div>
      
      <div id="services">
      <Pricing />
      </div>

      <div id="about"> 
      <InfoSection  {...homeObjFour} />
      </div>

      <div id="form"> 
      <Form />
      </div>

      <div id="reach out">
      <Footer />
      </div>
        </>
    );
}

export default Home;
