import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../Assets/s1-01.jpg';
import slider2 from '../../Assets/s2.jpg';
import slider3 from '../../Assets/s3-01.jpg';
import slider4 from '../../Assets/s4-01.jpg';



const Slider = () => {
    return (
        <Carousel >
            <Carousel.Item interval={1900}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1900}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1900}>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1900}>
                <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;