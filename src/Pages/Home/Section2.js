import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import aboutus from '../../Assets/about-us-box.gif'
import product from '../../Assets/product-box.gif'
import client from '../../Assets/become-client-box.gif'
import research from '../../Assets/research.png'
import download from '../../Assets/download-box.gif'
import { Badge, Card } from 'react-bootstrap';
import { faCaretRight, faCircleArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Section2.css'


const Section2 = () => {
    useEffect(() => {
        Aos.init({ duration: 1700 });
    }, []);
    return (
        <div className='row mt-5 gap-5 px-3 extragap justify-content-lg-between justify-content-md-between justify-content-center mb-5' >
            <Card data-aos="fade-up" data-aos-delay="0" style={{ width: '18rem' }} className='border-0 shadow shadow-md' >
                <Card.Img variant="top" src={aboutus} />
                <Card.Body>

                    <Card.Text className='text-start'>
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/Capital_Profile'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>Capital Profile</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>Mission & Vision</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	Board of Directors</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	Management/ Executive</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>Circulation</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	Career Opportunity</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>Contacts</span>
                        </Link>


                    </Card.Text>

                </Card.Body>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="200" style={{ width: '18rem' }} className='border-0 shadow shadow-md'>
                <Card.Img variant="top" src={product} />
                <Card.Body>

                    <Card.Text id='accordion' className='text-start'>

                        <div class="c">
                            <input type="checkbox" id="faq-1" />
                            <h6><label for="faq-1" className='text-danger'> <FontAwesomeIcon icon={faCaretRight} />
                                <span className='ms-2 text-dark'>Issue Management</span></label></h6>
                            <div class="p">
                                <p className='fw-bold'>Coppertech Industries Ltd.</p>
                                <p> <Link className='text-success' style={{ textDecoration: 'none' }} to='/'>
                                    <FontAwesomeIcon icon={faCircleArrowRight} />
                                    <span className='ms-2 text-dark'>Prospectus</span>
                                </Link></p>
                                <p> <Link className='text-success' style={{ textDecoration: 'none' }} to='/'>
                                    <FontAwesomeIcon icon={faCircleArrowRight} />
                                    <span className='ms-2 text-dark'>Abridged_Version</span>
                                </Link></p>
                                <p className='fw-bold'>Oimex Electrode Limited</p>
                                <p> <Link className='text-success' style={{ textDecoration: 'none' }} to='/'>
                                    <FontAwesomeIcon icon={faCircleArrowRight} />
                                    <span className='ms-2 text-dark'>Prospectus</span>
                                </Link></p>
                                <p> <Link className='text-success' style={{ textDecoration: 'none' }} to='/'>
                                    <FontAwesomeIcon icon={faCircleArrowRight} />
                                    <span className='ms-2 text-dark'>IPO Application Process</span>
                                </Link></p>
                                <p> <Link className='text-success' style={{ textDecoration: 'none' }} to='/'>
                                    <FontAwesomeIcon icon={faCircleArrowRight} />
                                    <span className='ms-2 text-dark'>List of IPO Applicants</span>
                                </Link></p>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="500" style={{ width: '18rem' }} className='border-0 shadow shadow-md'>
                <Card.Img variant="top" src={client} />
                <Card.Body>

                    <Card.Text className='text-start'>
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/Capital_Profile'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>Bangladeshi Individuals</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	Bangladeshi Institutions</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	Foreign Investors</span>
                        </Link>
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	NRBs</span>
                        </Link>
                        <br />
                        <img className='w-100' src={research} alt="" />
                        <br />
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	Daily Market Commentary</span>
                        </Link>




                    </Card.Text>

                </Card.Body>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="800" style={{ width: '18rem' }} className='border-0 shadow shadow-md'>
                <Card.Img variant="top" src={download} />
                <Card.Body>

                    <Card.Text className='text-start'>
                        <h6 className='fw-bold'>Forms</h6>
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	All Forms</span>
                        </Link>
                        <h6 className='fw-bold'>Notice/Circular</h6>
                        <Link className='text-danger' style={{ textDecoration: 'none' }} to='/'><FontAwesomeIcon icon={faCaretRight} />
                            <span className='ms-2 text-dark'>	BSEC:</span>
                        </Link>
                        <br />
                        <div className='mt-4 mb-5'>

                            <button className=' w-100 py-2 rounded rounded-pill text-danger fw-bold bg-light shadow-lg'>

                                <FontAwesomeIcon icon={faLock} /><span className='ms-3'>Online<span className='text-success'>Trading</span></span></button>
                            <div style={{ marginTop: '-55px ', marginLeft: "10px" }} > <Badge bg="light" text="muted">
                                Login
                            </Badge>{' '}</div>

                        </div>
                        <button className='  w-100 py-2 rounded rounded-pill text-danger fw-bold bg-light shadow-lg'>

                            IPO <span className='text-success'>Results</span></button>
                    </Card.Text>

                </Card.Body>
            </Card>



        </div>
    );
};

export default Section2;