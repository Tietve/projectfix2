import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Jointhebrand = () => {
    return (
        <Container className="my-5 text-center">
            <h2 className="mb-4">Join these brands</h2>
            <p className="mb-5">We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
            <Row className="justify-content-center align-items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <Col key={index} xs={6} md={3} className="mb-4">
                        <img
                            src={`https://via.placeholder.com/150x50?text=Brand+${index}`}
                            alt={`Brand ${index}`}
                            className="img-fluid"
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Jointhebrand;

