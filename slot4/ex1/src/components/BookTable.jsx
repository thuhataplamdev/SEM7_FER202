import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function BookTable() {
  return (
    <section id="contact" className="bg-dark py-5 mt-1">
      <Container>
        <h2 className="text-white fw-bold text-center mb-4">Book Your Table</h2>

        <Form>
          <Row className="g-3">
            <Col md={4}>
              <Form.Control placeholder="Your Name *" />
            </Col>
            <Col md={4}>
              <Form.Control placeholder="Your Email *" />
            </Col>
            <Col md={4}>
              <Form.Select defaultValue="">
                <option value="" disabled>
                  Select a Service
                </option>
                <option>Dine-in</option>
                <option>Birthday Party</option>
                <option>Private Event</option>
              </Form.Select>
            </Col>

            <Col md={12}>
              <Form.Control as="textarea" rows={6} placeholder="Please write your comment" />
            </Col>

            <Col md={12} className="d-flex">
              <Button type="button" className="px-4 fw-bold" variant="warning">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
