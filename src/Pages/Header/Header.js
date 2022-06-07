import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg'


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow p-3 mb-5 bg-body rounded sticky-top' >
            <Container>
                <Navbar.Brand as={Link} to='/'><img style={{ width: "80px" }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between' >
                    <Nav>
                        <Nav.Link as={Link} to='/' className=' fs-6  '>Home</Nav.Link>

                        <Nav.Link as={Link} className=' fs-6 ' to='/products_&_services'>
                            Products & Services
                        </Nav.Link>
                        <Nav.Link as={Link} to='/become_a_client' className=' fs-6 ' >
                            Become a Client
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about_us' className=' fs-6 ' >
                            About Us
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to='/login' className=' fs-6  '>Login</Nav.Link>

                        <Nav.Link as={Link} className=' fs-6 ' to='/register'>
                            Register
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;