import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>


          <PricingContainer>

            <PricingCard to='/forms'>
              <PricingCardInfo>
                {/*<PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>*/}
                <PricingCardPlan>Marriage Pack</PricingCardPlan>
                {/*<PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>onr time</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Invitation</PricingCardFeature>
                  <PricingCardFeature>Bridal makeup and mehandhi</PricingCardFeature>
                  <PricingCardFeature>Photofraphy</PricingCardFeature>
                  <PricingCardFeature>catering</PricingCardFeature>
                  <PricingCardFeature>Decoration</PricingCardFeature>
                  <PricingCardFeature>Anchor</PricingCardFeature>
                  <PricingCardFeature>Honeymoon package</PricingCardFeature>
                  <PricingCardFeature>Games,magic show</PricingCardFeature>
                  <PricingCardFeature>Malai</PricingCardFeature>
                  <PricingCardFeature>Welcome girls</PricingCardFeature>
                  <PricingCardFeature>Tatoo and painting</PricingCardFeature>
                  <PricingCardFeature>Welcome by luxury cars</PricingCardFeature>
                  <PricingCardFeature>Travell and accomodation</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>



            <PricingCard to='/forms'>
              <PricingCardInfo>
                {/*<PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>*/}
                <PricingCardPlan>Birthday Pack</PricingCardPlan>
                {/*<PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>onr time</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Invitation</PricingCardFeature>
                  <PricingCardFeature>Cake</PricingCardFeature>
                  <PricingCardFeature>Photography</PricingCardFeature>
                  <PricingCardFeature>Catering</PricingCardFeature>
                  <PricingCardFeature>Decoration</PricingCardFeature>
                  <PricingCardFeature>Anchor</PricingCardFeature>
                  <PricingCardFeature>Birthday baby makeup</PricingCardFeature>
                  <PricingCardFeature>Games,magic show</PricingCardFeature>
                  <PricingCardFeature>Dj and lighting</PricingCardFeature>
                  <PricingCardFeature>Welcome girls</PricingCardFeature>
                  <PricingCardFeature>Fresh cream cakes</PricingCardFeature>
                  <PricingCardFeature>Dance</PricingCardFeature>
                  <PricingCardFeature>Travel and accomodation</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>


            <PricingCard to='/forms'>
              <PricingCardInfo>
                {/*<PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>*/}
                <PricingCardPlan>Retirements parties</PricingCardPlan>
                {/*<PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>onr time</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Invitation</PricingCardFeature>
                  <PricingCardFeature>Decoration</PricingCardFeature>
                  <PricingCardFeature>Photography</PricingCardFeature>
                  <PricingCardFeature>Cakes</PricingCardFeature>
                  <PricingCardFeature>Games show</PricingCardFeature>
                  <PricingCardFeature>Magic show</PricingCardFeature>
                  <PricingCardFeature>Dance</PricingCardFeature>
                  <PricingCardFeature>DJ and light music</PricingCardFeature>
                  <PricingCardFeature>Catering</PricingCardFeature>
                  <PricingCardFeature>Travel and accomodation</PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>



          </PricingContainer>


          <PricingContainer>

          <PricingCard to='/forms'>
              <PricingCardInfo>
                {/*<PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>*/}
                <PricingCardPlan>Engagement/Reception</PricingCardPlan>
                {/*<PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>onr time</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Invitation</PricingCardFeature>
                  <PricingCardFeature>Bridal makeup and mehandhi</PricingCardFeature>
                  <PricingCardFeature>Photography and Decoration</PricingCardFeature>
                  <PricingCardFeature>Catering</PricingCardFeature>
                 
                  <PricingCardFeature>Malai and Chenda melan</PricingCardFeature>
                  <PricingCardFeature>Anchor</PricingCardFeature>
                  <PricingCardFeature>DJ and lighting</PricingCardFeature>
                  <PricingCardFeature>Welcome girls</PricingCardFeature>
                  <PricingCardFeature>Tatoo and painting</PricingCardFeature>
                  <PricingCardFeature>Welcome by luxury cars</PricingCardFeature>
                  <PricingCardFeature>Games,magic show</PricingCardFeature>
                  <PricingCardFeature> Tatoo and painting</PricingCardFeature>
                  <PricingCardFeature>Travell and accomodation</PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>


            <PricingCard to='/forms'>
              <PricingCardInfo>
                {/*<PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>*/}
                <PricingCardPlan>Corporate events</PricingCardPlan>
                {/*<PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>onr time</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Securities</PricingCardFeature>
                  <PricingCardFeature>Travel and accomodation</PricingCardFeature>
                  <PricingCardFeature>Food and bevarages</PricingCardFeature>
                  <PricingCardFeature>Anchors</PricingCardFeature>
                  <PricingCardFeature>DJ and lighting</PricingCardFeature>
                  <PricingCardFeature>Games show</PricingCardFeature>
                  <PricingCardFeature> Photography</PricingCardFeature>
                  <PricingCardFeature>and other necessary things</PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>
                  <PricingCardFeature>   </PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            

            <PricingCard to='/forms'>
              <PricingCardInfo>
                {/*<PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>*/}
                <PricingCardPlan>Stalls for a Event</PricingCardPlan>
                {/*<PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>onr time</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Sweet corn</PricingCardFeature>
                  <PricingCardFeature>Cotton candies</PricingCardFeature>
                  <PricingCardFeature>Pop corn</PricingCardFeature>
                  <PricingCardFeature>Mehandhi</PricingCardFeature>
                 
                  <PricingCardFeature>face painting</PricingCardFeature>
                  <PricingCardFeature>Bangle and baloon stall</PricingCardFeature>
                  <PricingCardFeature>ice  cream stall</PricingCardFeature>
                  <PricingCardFeature>Fresh juice/fruits stall</PricingCardFeature>
                  <PricingCardFeature>petty shops</PricingCardFeature>
                  <PricingCardFeature>Chai items</PricingCardFeature>
                  <PricingCardFeature>Game</PricingCardFeature>
                  <PricingCardFeature> Portrait drawing</PricingCardFeature>
                  <PricingCardFeature>badam milk shake</PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>


          </PricingContainer>

        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;