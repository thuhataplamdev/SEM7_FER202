import React from "react";
import { foods } from "../data/food";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";

export default function PizzaList() {
  return (
    <section id="about" className="bg-dark py-5">
      <Container>
        <h2 className="text-white fw-bold mb-4">Our Menu</h2>

        <Row>
          {foods.slice(0, 4).map((food) => (
            <Col key={food.id} xs={12} sm={6} md={3} className="mb-4">
              <Card className="h-100 shadow position-relative border-0">
                {food.tag && (
                  <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-2">
                    {food.tag.toUpperCase()}
                  </Badge>
                )}

                <div style={{ height: "220px", overflow: "hidden" }}>
                <Card.Img src={food.image} alt={food.name}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}/>
                </div>
                
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{food.name}</Card.Title>

                  <div className="mb-3">
                    {food.promotion ? (
                      <>
                        <span className="text-muted text-decoration-line-through me-2">
                          ${food.price}
                        </span>
                        <span className="fw-bold text-danger">${food.promotion}</span>
                      </>
                    ) : (
                      <span className="fw-bold">${food.price}</span>
                    )}
                  </div>

                  <Button variant="secondary" className="w-100">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}