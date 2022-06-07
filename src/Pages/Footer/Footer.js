import React from 'react';
import './Footer.css'
import logo from '../../Assets/logo.jpg'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Row className='align-items-lg-center justify-content-center'>

                <Col xs={6} md={4} className='mt-3 ' >

                    <h4>Contact</h4>
                    <p >Ta-39/1, Hasna Monjil, Gulshan-Badda Link Road, Dhaka-1212.
                        <br />
                        Helpline:  01858-977722

                        <br />
                        Email: career@masterkey.tech

                    </p>

                </Col>
                <Col xs={6} md={4} className='mt-3 '>
                    <h4>COMPANY</h4>
                    <Link as={Link} to='/' className=' fs-6 links '>Home</Link>
                    <br />
                    <Link as={Link} className=' fs-6 links' to='/products_&_services'>
                        Products & Services
                    </Link>
                    <br />
                    <Link as={Link} to='/become_a_client' className=' fs-6 links' >
                        Become a Client
                    </Link>
                    <br />
                    <Link as={Link} to='/about_us' className=' fs-6 links' >
                        About Us
                    </Link>
                </Col>
                <Col xs={6} md={4} className='mt-3' >
                    <img src={logo} alt="" />
                </Col>

            </Row>
            <p className='mt-4'>Copyright © 2022 Masterkey Technologies Ltd.</p>

        </footer>
    );
};

export default Footer;