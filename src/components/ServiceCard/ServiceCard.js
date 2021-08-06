import React, { useContext } from 'react';
import './ServiceCard.css';
import { Button, Card, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ServiceCard = ({ service }) => {
    const { title, image, description, price } = service;
    const { loggedUser, setSingleService } = useContext(UserContext);
    
    let isAdmin = loggedUser.email === 'test@test.com';
    console.log(isAdmin);


    return (
        <Col lg={4} md={6} className="mb-5 text-center service-detail h-100">
            {/* <Fade bottom duration={2500} distance="40px"> */}
            <Card
                className="border-0 py-4 h-100"
                style={{ maxWidth: '25rem' }}>
                <Card.Img variant="top" height="150" width="250" src={image} style={{ objectFit: "contain" }} />
                <Card.Body className="pt-0">
                    <Card.Title as="h4" className="my-4">{title.slice(0, 15)}...</Card.Title>
                    <Card.Text className="text-muted">{description.slice(0, 100)}...</Card.Text>

                    <div className="d-block">
                        <p>BDT {price}tk</p>
                        <br />
                        <div className="buttonGroup">
                            <Button
                                style={{ borderRadius: '999px' }}
                                className="submitBtn"
                                as={Link}
                                to={`/singleService/${service._id}`}
                                onClick={() => setSingleService(service)}
                            >
                                view more
                            </Button>
                            <Button
                                style={{ borderRadius: '999px' }}
                                className="submitBtn"
                                as={Link}
                            to={isAdmin ? "/dashboard" : "/bookingService"}
                            onClick={() => setSingleService(service)}
                            >
                                buy now
                            </Button>
                        </div>

                    </div>
                </Card.Body>
            </Card>
            {/* </Fade> */}
        </Col>
    );
};

export default ServiceCard;