import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';
import './Navigation.css';
import logo from '../../Assets/Images/Logo.png';
import { Link } from 'react-router-dom';


export default function App() {
    const [showNav, setShowNav] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='navbarbrandimg' href='#'>
                    <img src={logo} height='50' alt='logo' loading='lazy' />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse className='navbitems' navbar show={showNav}>
                    <MDBNavbarNav className='justify-content-end'>
                        <MDBNavbarItem>
                            <MDBNavbarLink tag={Link} to='/' active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink tag={Link} to='/projects'>
                                Projects
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink tag={Link} to='/aboutus'>
                                About Us
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink tag={Link} to='/contact'>
                                Contact Us
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}