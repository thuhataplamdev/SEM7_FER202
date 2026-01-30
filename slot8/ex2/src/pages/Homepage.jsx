import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Homepage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Thông tin cá nhân</Card.Title>
              <div className="mt-3">
                <p><strong>Họ và tên:</strong> Trịnh Thị Thu Hà</p>
                <p><strong>MSSV:</strong> DE190636</p>
                <p><strong>Link GitHub:</strong> <a href="https://github.com/LM-Prjoject/SEM7_FER202" target="_blank" rel="noopener noreferrer">https://github.com/LM-Prjoject/SEM7_FER202</a></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
