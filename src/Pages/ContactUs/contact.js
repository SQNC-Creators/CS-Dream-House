import React from 'react';
import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import './contact.css';
import contactImg from './../../Assets/Images/contact-img.png';

function contact() {
  return (
    <MDBContainer className='contact-main'>
      <MDBRow>
        <MDBCol className='contact-f'>
          <form>
            <h2 className='contact-formH'>Contact Us</h2>
            <MDBRow>
              <label className='inp-lable'>Your Name</label>
              <input className='inp-contact' type='text' id='form1Example1' />
            </MDBRow>
            <MDBRow>
              <label className='inp-lable'>Email</label>
              <input className='inp-contact' type='text' id='form1Example1' />
            </MDBRow>
            <MDBRow>
              <label className='inp-lable'>Your Message</label>
              <textarea className='inp-contact' type='text' id='form1Example1' placeholder='Type your message here...'></textarea>
            </MDBRow>

            <button type='submit' block className='cont-btn'>
              Contact Us
            </button>
          </form>

        </MDBCol>
        <MDBCol className='img-col-contact'>
          <div className='contact-imgdiv'><img src={contactImg} alt='' className='contatcIm'/></div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default contact