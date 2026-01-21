import React, { useMemo, useState } from "react";
import { foods } from "../data/food";
import { Card, Container, Row, Col, Button, Badge, Pagination } from "react-bootstrap";

export default function PizzaListt() {
  const pageSize = 8;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(foods.length / pageSize);

  const pageFoods = useMemo(
    () => foods.slice((page - 1) * pageSize, page * pageSize),
    [page]
  );

  const go = (p) => setPage(p);

  const pageStyle = (active) => ({
    color: active ? "#fff" : "#adb5bd",
    background: "transparent",
    border: "none",
    fontWeight: active ? 700 : 400,
    cursor: "pointer",
  });

  return (
    <section id="menu" className="bg-dark py-5">
      <Container>
        <h2 className="text-white fw-bold text-center mb-4">Our Menu</h2>

        <Row>
          {pageFoods.map((f) => (
            <Col key={f.id} xs={12} sm={6} lg={3} className="mb-4">
              <Card className="h-100 shadow border-0 position-relative">
                {f.tag && (
                  <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-2 px-3 py-2">
                    {f.tag.toUpperCase()}
                  </Badge>
                )}

                <div style={{ height: 220, overflow: "hidden" }}>
                  <Card.Img src={f.image} className="w-100 h-100" style={{ objectFit: "cover" }} />
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{f.name}</Card.Title>

                  <div className="mb-3">
                    {f.promotion ? (
                      <>
                        <span className="text-muted text-decoration-line-through me-2">
                          ${f.price}
                        </span>
                        <span className="fw-bold text-danger">${f.promotion}</span>
                      </>
                    ) : (
                      <span className="fw-bold">${f.price}</span>
                    )}
                  </div>

                  <Button variant="secondary" className="w-100">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {totalPages > 1 && (
          <div className="d-flex justify-content-end mt-3">
           <Pagination className="mb-0 bg-transparent border-0 shadow-none">
              <Pagination.Prev
                disabled={page === 1}
                onClick={() => go(page - 1)}
                style={pageStyle(false)}
              />

              {Array.from({ length: totalPages }, (_, i) => (
                <Pagination.Item
                  key={i}
                  active={false}
                  onClick={() => go(i + 1)}
                  style={pageStyle(page === i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next
                disabled={page === totalPages}
                onClick={() => go(page + 1)}
                style={pageStyle(false)}
              />
            </Pagination>
          </div>
        )}
      </Container>
    </section>
  );
}