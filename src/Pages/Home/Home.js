import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import './Home.css'
import homebg from '../../Assets/Images/csdreanhouse-cover-1.jpg'


const Home = () => {
    return (
        <MDBContainer fluid breakpoint='sm md lg xl xxl'>
            <MDBContainer fluid>
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
                            <MDBBtn outline rounded className='home-contact-btn'>
                                Warning
                            </MDBBtn>
                        </a>
                    </MDBCol>
                    <MDBCol lg='6' md='12' sm='12' className='mb-4 mb-md-0'>
                        <div className='home-bg'></div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0'>
                        <h2>Who We Are?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint!
                        </p>
                    </MDBCol>
                    <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0'>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    )
}

export default Home