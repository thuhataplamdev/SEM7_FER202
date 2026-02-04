import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { newLists } from "../data/newLists";
import NewsCard from "../components/NewsCard";

export default function News() {
  return (
    <section id="news" className="py-5 bg-light">
      <Container>
        {/* Title */}
        <h2 className="text-danger fw-bold mb-4">
          News Category
        </h2>

        {/* News List */}
        <Row className="g-4">
          {newLists.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={3}>
              <NewsCard news={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
