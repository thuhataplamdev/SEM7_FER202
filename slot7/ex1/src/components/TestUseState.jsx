import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const TestUseState = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [displayText, setDisplayText] = useState("");

  const validate = () => {
    if (!username.trim()) {
      alert("Vui lòng nhập tên!");
      return false;
    }
    if (!age.trim() || isNaN(age) || age <= 0) {
      alert("Vui lòng nhập tuổi!");
      return false;
    }
    return true;
  };

  const handleChange = () => {
    if (!validate()) return;
    setDisplayText(`Hello, my name is ${username}, ${age} years old.`);
  };

  const isFormValid =
    username.trim() !== "" && age.trim() !== "" && !isNaN(age) && age > 0;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="p-4 border rounded shadow">
            <h2 className="mb-4">User Information</h2>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column md={3}>
                Username:
              </Form.Label>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column md={3}>
                Age:
              </Form.Label>
              <Col md={9}>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                />
              </Col>
            </Form.Group>

            <Button
              variant="primary"
              className="w-50"
              onClick={handleChange}
              disabled={!isFormValid}
            >
              Change
            </Button>
            {displayText && 
            (
            <Alert variant="info" className="mt-4 text-center">
              <p className="mb-0">{displayText}</p>
            </Alert>)}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TestUseState;