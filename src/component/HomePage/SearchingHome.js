import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SearchingHome = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Form className="bg-primary text-white p-4 rounded shadow">
                        <Row>
                            <Col md={4} className="mb-3 mb-md-0">
                                <Form.Group>
                                    <Form.Label>Search Event</Form.Label>
                                    <Form.Control type="text" placeholder="Enter event name" />
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-3 mb-md-0">
                                <Form.Group>
                                    <Form.Label>Place</Form.Label>
                                    <Form.Control type="text" placeholder="Enter location" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchingHome;

