import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

const MakeEvent = ({ image3 }) => {
    return (
        <Container fluid className="bg-light py-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={image3} alt="Create Event" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2 className="mb-4">Make your own Event</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button href="#" variant="primary" size="lg">Create Events</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default MakeEvent;

