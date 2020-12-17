import styled from 'styled-components';


export const homeObjOne = {
    primary: false,
    lightBg: true,
    lightTopLine: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Event management',
    headline: ' Make your event more colourful with us',
    description:
      "Based in India, Kilig events plans and executes unique ideas to fulfill events to its atmost potential."+
      " Be it a large,small or just normal event, Kannan and his team provide great insights that will make your big day unforgetable."+
      " Our entire team  through their tireless efforts and commitment to quality will be dedicated and driven to help you achieve your big picture.",
    buttonLabel: 'Event planning is our passion',
    start: 'true'
  };
  
  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }

  export const homeObjTwo = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'WHO ARE WE AND WHAT WE DO',
    headline: '',
    description:
      <NewlineText text={"Our main objective is to build a personal connect with customers. We plan outlines and all minute details of your event by structurinng and coordinating all moving parts."+
      " We, Kilig evennts spend time both in and out our office and make sure we never failed to deliver quality results.\nThe positive feedbacks that we receive on our well trained and experience team keeps us moving."+
    "\nYou are just 3 steps away from your dream event:\n1. Tell us your idea\n2. Let KILIG EVENTS do the magic\n3. Sit back and relax"} />,
    buttonLabel: 'Fill in your event',
    link:'/forms',
    imgStart: '',
    img: require('../../images/fill3.jpg').default,
    alt: 'Vault',
    start: ''
  };


  
   
  
  export const homeObjFour = {
    primary: true,
    lightBg: true,
    lightTopLine: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Our message',
    headline: 'Make your moments a memory with us',
    description:
      "Hello from Kannan(Founder) and Nagendran(co-founder) of KILIG events. Having been in the field from 2018, we have made 45+ marriages, 35+ birthday and baby showers, 25+ retirement parties and much more events colourful"+
       "We are up-to-date on trends and technology and are striving hard to be the best in our niche. We promise to make your dream moments true.",
    buttonLabel: 'sign up',
    link:'/sign-up',
    imgStart: 'start',
    img: require('../../images/kannan2.jpg').default,
    alt: 'Vault',
    start: 'true'
  };

  export const TopLine = styled.div`
  color: black;
  font-size: 30px;
  line-height: 16px;
  font-weight: 1000;
  letter-spacing: 1.4px;
  margin-bottom: 15px;
  padding-top:20px;
  margin: 0 -15px -15px -15px;
  text-align:center;
`;