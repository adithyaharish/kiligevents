import React from 'react';
import { Button } from '../../globalStyles';
import emailjs from "emailjs-com";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,

} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
   Form,
  FormInput,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink

} from './Footer.elements';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_y58yhms', 'template_att9lhk', e.target, 'user_lF0HFIjABZc0fhCm4O5sr')
  .then((result) => {
  console.log(result.text);
  }, (error) => {
  console.log(error.text);
  });
  e.target.reset();
  }

function Footer() {
    return (
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            To know more about us, get in touch now.
          </FooterSubHeading>
          <FooterSubText>Say hi and we will get back to you...</FooterSubText>

          <Form onSubmit={sendEmail}>
          <FormInput name='from_name' type='email' placeholder='Your Email' />
          <FormInput name='message' type='text' placeholder='Message' />
          <Button fontBig value="Send">Connect with us</Button>
        </Form>

        </FooterSubscription>

        <FooterLinksContainer>
           <FooterLinksWrapper>

           <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>7010516857</FooterLink>
            <FooterLink to='/'>Kannan K</FooterLink>
            <FooterLink to='/'>4002,TNHB Colony, Villapuram</FooterLink>
            <FooterLink to='/'>Madurai-12, Tamil Nadu</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Social media</FooterLinkTitle>
            <SocialIconLink
              href={
                'https://www.facebook.com/kiligevents610/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </SocialIconLink>
            
            <SocialIconLink href={'mailto:kilingevents610@gmail.com'} target='_blank' aria-label='Gmail'>
              <SiGmail />
            </SocialIconLink>
            <SocialIconLink href={'https://www.instagram.com/kilig_events/'} target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>

          </FooterLinkItems>

          </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            
            Kilig Events
          </SocialLogo>
         
          <FooterLink href={'mailto:adithyaharish10@gmail.com'} target='_blank' aria-label='Gmail'>WEBSITE CREATED BY - adithyaharish10@gmail.com - 9489480346</FooterLink> 

        </SocialMediaWrap>
      </SocialMedia>


        </FooterContainer>
    );
}
export default Footer;