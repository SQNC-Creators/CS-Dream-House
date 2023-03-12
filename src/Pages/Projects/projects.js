import React from 'react';
import './projects.css';
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBCardImage, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import home1 from './../../Assets/Images/Home1.png';
import home2 from './../../Assets/Images/Home2.png';
import home3 from './../../Assets/Images/Home3.png';
import home4 from './../../Assets/Images/Home4.png';


function projects() {
  return (
    <MDBContainer>
      <MDBRow className='projects-r'>
        <MDBCol lg='3' md='6'>
          <img src={home1} alt='....' className='about-cardimg' />
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <img src={home2} alt='....' className='about-cardimg' />
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <img src={home3} alt='....' className='about-cardimg' />
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <img src={home4} alt='....' className='about-cardimg' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='projects-r3'>
        <p className='projects-t1'>Our Projects</p>
        <p className='projects-t2'>Lorem ipsum dolor sit amet, autem utamur necessitatibus
          cu duo, eos vivendo explicari honestatis ad, mea at
          ornatus ancillae imperdiet. No pri purto mollis. Sea albucius
          scripserit eu, et pri mazim vivendum, sea ex harum menandri.
          Moderatius contentiones necessitatibus cu ius, ut nam
          liber legimus feugait.</p>
      </MDBRow>
      <MDBRow className='projects-r2'>
        <MDBCol lg='3' md='6'>
          <img src={home1} alt='....' className='about-cardimg' />
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <img src={home2} alt='....' className='about-cardimg' />
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <img src={home3} alt='....' className='about-cardimg' />
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <img src={home4} alt='....' className='about-cardimg' />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default projects