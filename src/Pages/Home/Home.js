import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBCardImage, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'
import React from 'react'
import cardImg from './../../Assets/Images/home-card.jpg'
import './Home.css'
import homebg from '../../Assets/Images/csdreanhouse-cover-1.jpg'


const Home = () => {
    return (
        <MDBContainer fluid breakpoint='sm md lg xl xxl main-cont'>
            <MDBContainer className='secon-cont'>
                <MDBRow>
                    <MDBCol lg='6' md='12' sm='12' className='mb-4 mb-md-0'>
                        <h1 className='home-h1'>
                            Build
                            <br />
                            <span className='home-span-your'>Your</span>
                            <br />
                            <span className='home-span-dream'>Dream</span>
                        </h1>
                        <a>
                            <MDBBtn outline className='home-contact-btn'>
                                Contact Us
                            </MDBBtn>
                        </a>
                    </MDBCol>
                    <MDBCol lg='6' md='12' sm='12' className='mb-4 mb-md-0'>
                        <div className='home-bg'></div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <hr className='hrHome'></hr>

            <MDBContainer className='home-sec2'>
                <MDBRow className='home-bgrow'>
                    <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0'>
                        <h2 className='home-text2'>Who we are?</h2>
                        <div className='home-para'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint! <br /> <br />
                            culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint... <a className='home-readmore'>Read More</a>
                        </div>
                    </MDBCol>
                    <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0 home-bgcol'>
                        <div className='home-bg2'></div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className='home-designcont'>
                <div className='home-design'></div>
            </MDBContainer>

            <MDBContainer className='home-card'>
                <div className='card-div'>
                    <MDBCard>
                        <MDBRow className='g-0 card-row'>
                            <MDBCol className='card-imgcol'>
                                <MDBCardImage src={cardImg} className='card-img' alt='...' fluid />
                            </MDBCol>
                            <MDBCol>
                                <MDBCardBody className='card-boystyle'>
                                    <MDBCardTitle className='card-title'>What we do</MDBCardTitle>
                                    <MDBCardText className='card-txt'>
                                        Lorem ipsum dolor sit amet, autem utamur necessitatibus
                                        cu duo, eos vivendo explicari honestatis ad, mea at
                                        ornatus ancillae imperdiet. No pri purto mollis. Sea albucius
                                        scripserit eu, et pri mazim vivendum, sea ex harum menandri.
                                        Moderatius contentiones necessitatibus cu ius, ut nam
                                        liber legimus feugait. <br /> <br />
                                        culpa corporis vitae repudiandae aliquam voluptatem veniam,
                                        est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                                        est atque cumque eum delectus sint... <a className='home-readmore'>Read More</a>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </MDBContainer>

            <MDBContainer>
                <MDBRow>
                    <MDBCol sm='6'>
                        <MDBCard className='home-cardset1'>
                            <MDBCardBody>
                                <MDBCardTitle className='card-visiont'>Our Vision</MDBCardTitle>
                                <MDBCardText className='card-visiont2'>
                                    Lorem ipsum dolor sit amet, autem
                                    utamur necessitatibus cu duo, eos
                                    vivendo explicari honestatis ad, mea
                                    at ornatus ancillae imperdiet. Lorem ipsum dolor sit amet, autem
                                    utamur necessitatibus cu duo, eos
                                    vivendo explicari honestatis ad, mea
                                    at ornatus ancillae imperdiet.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='6'>
                        <MDBCard className='home-cardset2'>
                            <MDBCardBody>
                                <MDBCardTitle className='card-visiont'>Our Mission</MDBCardTitle>
                                <MDBCardText className='card-visiont2'>
                                    Lorem ipsum dolor sit amet, autem
                                    utamur necessitatibus cu duo, eos
                                    vivendo explicari honestatis ad, mea
                                    at ornatus ancillae imperdiet. Lorem ipsum dolor sit amet, autem
                                    utamur necessitatibus cu duo, eos
                                    vivendo explicari honestatis ad, mea
                                    at ornatus ancillae imperdiet.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </MDBContainer>
    )
}

export default Home