import React, { useMemo, useState } from "react";
import { foods } from "../data/food";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import PizzaDetailModal from "../components/PizzaDetailModal";
import PizzaCard from "../components/PizzaCard";

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

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const openDetails = (pizza) => {
    setSelected(pizza);
    setShow(true);
  };

  const closeDetails = () => {
    setShow(false);
    setSelected(null);
  };

  const buyPizza = (pizza) => {
    alert(`Added ${pizza.name} to cart!`);
  };

  return (
    <section id="menu" className="bg-dark py-5">
      <Container>
        <h2 className="text-white fw-bold text-center mb-4">Our Menu</h2>

        <Row>
          {pageFoods.map((f) => (
            <Col key={f.id} xs={12} sm={6} lg={3} className="mb-4">
              <PizzaCard pizza={f} onView={openDetails} onBuy={buyPizza} />
            </Col>
          ))}
        </Row>

        {totalPages > 1 && (
          <div className="d-flex justify-content-end mt-3">
            <Pagination
              className="mb-0"
              style={{ background: "transparent", border: "none", boxShadow: "none" }}
            >
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

        <PizzaDetailModal show={show} onClose={closeDetails} p={selected} />
      </Container>
    </section>
  );
}
