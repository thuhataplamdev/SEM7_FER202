import React from "react";
import { foods } from "../data/food";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";

function PizzaCard() {
  return (
    <Container className="mt-4">
      <Row>
        {foods.map((food) => (
          <Col key={food.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 bg-dark text-white border-0 position-relative">
              {food.tag && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-0 m-2 px-3 py-2"
                >
                  {food.tag.toUpperCase()}
                </Badge>
              )}

              <Card.Img
                src={food.image}
                alt={food.name}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body className="text-center">
                <Card.Title className="fw-bold">
                  {food.name}
                </Card.Title>

                <div className="mb-3">
                  {food.promotion ? (
                    <>
                      <span className="text-muted text-decoration-line-through me-2">
                        ${food.price}
                      </span>
                      <span className="fw-bold text-warning">
                        ${food.promotion}
                      </span>
                    </>
                  ) : (
                    <span className="fw-bold">VND{food.price}</span>
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
  );
}

export default PizzaCard;
