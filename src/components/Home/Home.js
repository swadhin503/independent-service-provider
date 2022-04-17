import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../images/gym-1.jpg'
import photo2 from '../../images/gym-2.jpg'
import photo3 from '../../images/gym-3.jpg'
import Blogs from '../Blogs/Blogs';
import Servicess from '../Servicess/Servicess';

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="mb-5 mt-3">
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={photo1}
                alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Build Your Body</h3>
                        <p>Book your seat now to keep your body fit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Second slide"
                    />
            
                    <Carousel.Caption>
                        <h3>Build Your Body</h3>
                        <p>Book your seat now to keep your body fit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo3}
                        alt="Third slide"
                    />
            
                 </Carousel.Item>
            </Carousel>
        </div>
        <Servicess></Servicess>
        <Blogs></Blogs>
        </div>

    );
};

export default Home;