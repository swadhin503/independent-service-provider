import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image1 from '../../images/body-building.jpg';
import image2 from '../../images/health-club.jpg';
import image3 from '../../images/ladues-gym-service.jpg';

const Servicess = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '25rem' }} variant="top" src={image1} />
                        <Card.Body>
                        <Card.Title>Body Building</Card.Title>
                        <Card.Text>
                        Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes.It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength.
                        </Card.Text>
                        <Card.Text>Price: $200</Card.Text>
                        <Button className="text-white" variant="info">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '25rem' }} variant="top" src={image2} />
                        <Card.Body>
                        <Card.Title>Health Club</Card.Title>
                        <Card.Text>
                        Experience Movati's World-Class gym equipment, fitness classes, & luxurious club amenities. World-class equipment, luxurious club amenities, classes, and dedicated women's areas. Showers Open. Enhanced Ventilation. Physical Distancing. Continous Cleaning.
                        </Card.Text>
                        <Card.Text>Price: $300</Card.Text>
                        <Button className="text-white" variant="info">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '25rem' }} variant="top" src={image3} />
                        <Card.Body>
                        <Card.Title>Ladies Gym Service</Card.Title>
                        <Card.Text>
                        Achieve Your Fitness Goals With Our High-Tech Workout Equipment In 20-Minute Sessions. Reap Maximum Benefits From Every Session With Our ARX Workouts. Book A Free Workout Today. Personal Training. Metabolic Testing.
                        </Card.Text>
                        <Card.Text>Price: $250</Card.Text>
                        <Button className="text-white" variant="info">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Servicess;