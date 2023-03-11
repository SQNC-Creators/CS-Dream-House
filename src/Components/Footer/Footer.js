import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'
import logo from '../../Assets/Images/Logo.png'

export default function App() {
    return (
      <MDBFooter className='text-center text-lg-left footer_up'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <img src={logo} height='150' />
            </MDBCol>
  
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-start'>Cs Dream House</h5>
  
              <p className='text-start'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus sint!
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
  
        <div className='text-center p-3 copyright'>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-light' href='https://csdreamhouse.com/'>
            <strong>CS Dream House</strong>
          </a>
        </div>
      </MDBFooter>
    );
  }