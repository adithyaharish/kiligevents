import React from 'react';
import { Button } from '../../globalStyles';
import emailjs from "emailjs-com";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
   Form,
  FormInput

} from './Form.elements';


function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_y58yhms', 'template_jw0ozfl', e.target, 'user_lF0HFIjABZc0fhCm4O5sr')
  .then((result) => {
  console.log(result.text);
  }, (error) => {
  console.log(error.text);
  });
  e.target.reset();
  }

function Forms() {
    return (

      <div id="form">
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Fill your event requirements.
          </FooterSubHeading>

          <Form onSubmit={sendEmail}>
          <FormInput name='from_name' type='email' placeholder='Your Email' />
          <FormInput name='name' type='text' placeholder='Name' />
          <FormInput name='phone' type='text' placeholder='Phone' />
          <FormInput name='event type' type='text' placeholder='Event type' />
          <FormInput name='event date' type='text' placeholder='Event date' />
          <FormInput name='requirements' type='text' placeholder='Requirements' />
          <Button fontBig value="Send">Send</Button>
        </Form>

        </FooterSubscription>

        </FooterContainer>

        </div>
    );
}
export default Forms;