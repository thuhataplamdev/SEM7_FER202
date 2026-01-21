import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Badge, Button } from "react-bootstrap";
import { foods } from "../data/food";

export default function PizzaDetails() {
  const { id } = useParams();
  const pizza = foods.find((x) => String(x.id) === String(id));

  if (!pizza) {
    return (
      <section className="bg-dark py-5">
        <Container className="text-center">
          <h2 className="text-white fw-bold">Pizza not found</h2>
          <Button as={Link} to="/" variant="secondary" className="mt-3">
            Back to Home
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-dark py-5">
      <Container>
        <Button as={Link} to="/" variant="secondary" className="mb-3"> Back </Button>

        <div className="bg-white rounded shadow p-3">
          <div style={{ height: 320, overflow: "hidden" }} className="rounded mb-3">
            <img src={pizza.image} alt={pizza.name} className="w-100 h-100" style={{ objectFit: "cover" }}/>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-0">{pizza.name}</h3>
            {pizza.tag && (
              <Badge bg="warning" text="dark" className="px-3 py-2">
                {pizza.tag.toUpperCase()}
              </Badge>
            )}
          </div>

          <div className="mt-3">
            <div className="fw-bold">Price</div>
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

          {pizza.description && (
            <p className="text-muted mt-3 mb-0">{pizza.description}</p>
          )}

          <Button className="mt-3" variant="dark" onClick={() => alert("Successfull")}> Add to Cart </Button>
        </div>
      </Container>
    </section>
  );
}
