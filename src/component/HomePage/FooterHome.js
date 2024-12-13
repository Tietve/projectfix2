import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FooterHome = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container fluid>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5>Eventick</h5>
                        <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                        <div>
                            <Button variant="outline-light" className="me-2 mb-2">Facebook</Button>
                            <Button variant="outline-light" className="me-2 mb-2">Twitter</Button>
                            <Button variant="outline-light" className="mb-2">LinkedIn</Button>
                        </div>
                    </Col>
                    <Col md={2} className="mb-4 mb-md-0">
                        <h5>Plan Events</h5>
                        <ul className="list-unstyled">
                            <li><a href="/HomePage" className="text-light">Create and Set Up</a></li>
                            <li><a href="/HomePage" className="text-light">Sell Tickets</a></li>
                            <li><a href="/HomePage" className="text-light">Online RSVP</a></li>
                            <li><a href="/HomePage
                            ff-" className="text-light">Online Events</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-4 mb-md-0">
                        <h5>Eventick</h5>
                        <ul className="list-unstyled">
                            <li><a href="/HomePage" className="text-light">About Us</a></li>
                            <li><a href="/HomePage" className="text-light">Press</a></li>
                            <li><a href="/HomePage" className="text-light">Contact Us</a></li>
                            <li><a href="/HomePage" className="text-light">Help Center</a></li>
                            <li><a href="/HomePage" className="text-light">How it Works</a></li>
                            <li><a href="/HomePage" className="text-light">Privacy</a></li>
                            <li><a href="/HomePage" className="text-light">Terms</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Stay in the loop</h5>
                        <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe Now
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <hr className="my-4" />
                <div className="text-center">
                    <small>Copyright © 2023 Eventick. All rights reserved.</small>
                </div>
            </Container>
        </footer>
    )
}

export default FooterHome;

