import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBCardImage, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import AgentM from './../../Assets/Images/agent-m.jpg';
import AgentF from './../../Assets/Images/agent-f.jpg';
import './about.css';

function about() {
    return (
        <MDBContainer fluid breakpoint='sm md lg xl xxl main-cont'>
            <MDBContainer className='home-sec2'>
                <MDBRow className='home-bgrow'>
                    <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0'>
                        <h2 className='about-text2' style={{ color: '#eb5e06' }}>Who we are?</h2>
                        <div className='home-para'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint! <br /> <br />
                        </div>
                        <a>
                            <MDBBtn outline className='home-contact-btn'>
                                Contact Us
                            </MDBBtn>
                        </a>
                    </MDBCol>
                    <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0 home-bgcol'>
                        <div className='home-bg2'></div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer>
                <h2 className='about-text3' style={{ color: '#eb5e06' }}>Meet Our Team</h2>
                <MDBRow className='about-crow1'>
                    <MDBCol lg='3' md='6'>
                        <img src={AgentM} alt='....' className='about-cardimg' />
                    </MDBCol>
                    <MDBCol className='about-ccol'>
                        <p className='about-ctitle'>John Black</p>
                        <p className='about-ctxt'>Lorem ipsum dolor sit amet, autem utamur necessitatibus
                            cu duo, eos vivendo explicari honestatis ad, mea at
                            ornatus ancillae imperdiet. No pri purto mollis. Sea albucius
                            scripserit eu, et pri mazim vivendum, sea ex harum menandri.
                            Moderatius contentiones necessitatibus cu ius, ut nam
                            liber legimus feugait. Lorem ipsum dolor sit amet, autem utamur necessitatibus
                            cu duo, eos vivendo explicari honestatis ad, mea at
                            ornatus ancillae imperdiet. No pri purto mollis. Sea albucius
                            scripserit eu, et pri mazim vivendum.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='about-crow2'>
                    <MDBCol lg='3' md='6'>
                        <img src={AgentF} alt='....' className='about-cardimg' />
                    </MDBCol>
                    <MDBCol className='about-ccol'>
                        <p className='about-ctitle'>Maria Vermillion</p>
                        <p className='about-ctxt'>Lorem ipsum dolor sit amet, autem utamur necessitatibus
                            cu duo, eos vivendo explicari honestatis ad, mea at
                            ornatus ancillae imperdiet. No pri purto mollis. Sea albucius
                            scripserit eu, et pri mazim vivendum, sea ex harum menandri.
                            Moderatius contentiones necessitatibus cu ius, ut nam
                            liber legimus feugait. Lorem ipsum dolor sit amet, autem utamur necessitatibus
                            cu duo, eos vivendo explicari honestatis ad, mea at
                            ornatus ancillae imperdiet. No pri purto mollis. Sea albucius
                            scripserit eu, et pri mazim vivendum.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </MDBContainer>
    )
}

export default about