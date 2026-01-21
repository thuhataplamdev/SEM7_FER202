import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PizzaCard({ pizza, onView, onBuy }) {
  return (
    <Card className="h-100 shadow border-0 position-relative">
      {pizza.tag && (
        <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-2 px-3 py-2">
          {pizza.tag.toUpperCase()}
        </Badge>
      )}
      <div style={{ height: 220, overflow: "hidden" }}>
        <Card.Img src={pizza.image} alt={pizza.name} className="w-100 h-100" style={{ objectFit: "cover" }}/>
      </div>
      <Card.Body className="text-center">
        <Card.Title className="fw-bold">{pizza.name}</Card.Title>
        <div className="mb-3">
          {pizza.promotion ? (
            <>
              <span className="text-muted text-decoration-line-through me-2">
                ${pizza.price}
              </span>
              <span className="fw-bold text-danger">${pizza.promotion}</span>
            </>
          ) : (
            <span className="fw-bold">${pizza.price}</span>
          )}
        </div>
        <div className="d-flex gap-2 justify-content-center">
          {/* <Button variant="outline-danger" className="px-3" onClick={() => onView?.(pizza)}>View Details</Button> */}
          <Button as={Link} to={`/pizza/${pizza.id}`} variant="outline-danger" className="px-3">
            View Details
          </Button>
          <Button variant="secondary" className="px-4" onClick={() => onBuy?.(pizza)}>Buy </Button>
        </div>
      </Card.Body>
    </Card>
  );
}