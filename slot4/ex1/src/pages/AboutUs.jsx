import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutUs() {
    return (
        <section id="about" className="bg-dark py-5"> 
            <Container>
                <h2 className="text-white fw-bold mb-4 text-center">About Us</h2>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <img
                            src="/images/avt.jpg"
                            alt="About Us"
                            className="img-fluid rounded shadow"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </Col>
                    <Col md={6}>
                        <p className="text-white-50">
                            Welcome to Pizza House, your ultimate destination for delicious and authentic pizzas!
                            At Pizza House, we pride ourselves on using only the freshest ingredients and traditional recipes to create mouth-watering pizzas that will satisfy your cravings.
                        </p>
                        <p className="text-white-50">
                            Our mission is to provide a memorable dining experience for our customers, whether you're dining in, taking out, or getting delivery. We believe that great food brings people together, and we strive to create a warm and inviting atmosphere for all pizza lovers.
                        </p>
                        <p className="text-white-50">
                            Thank you for choosing Pizza House. We look forward to serving you and sharing our love for pizza with you!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}