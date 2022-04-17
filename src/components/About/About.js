import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../images/shape-3.png'

const About = () => {
    return (
        <div>
           <Card className="text-center">
                <Card.Header>About Me</Card.Header>
                <Card.Body>
                    <Card.Title>Know About Me</Card.Title>
                    <Card.Img className="w-25 me-2" variant="bottom" src={image} />
                    <Card.Text>
                    My name is Tawhid Dwin Swadhin. I am studying is Daffodil International University in 3rd year. I want to be a full stack developer. To reach my goal I am working very hard.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;