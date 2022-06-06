import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Mujib_100_Logo.svg.png'


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow p-3 mb-5 bg-body rounded' >
            <Container>
                <Navbar.Brand as={Link} to='/'><img style={{ width: "80px" }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link as={Link} to='/' className=' fs-5  '>Home</Nav.Link>

                        <Nav.Link as={Link} className=' fs-5 ' to='/products_&_services'>
                            Products & Services
                        </Nav.Link>
                        <Nav.Link as={Link} to='/become_a_client' className=' fs-5 ' >
                            Become a Client
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about_us' className=' fs-5 ' >
                            About Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;