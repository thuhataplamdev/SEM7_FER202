import React from "react";
import { Card } from "react-bootstrap";

export default function NewsCard({ news }) {
  return (
    <Card className="shadow-sm h-100">
      {/* Image */}
      <div style={{ height: 200, overflow: "hidden" }}>
        <Card.Img
          src={news.images}
          alt={news.title}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <Card.Body>
        <Card.Title style={{ fontSize: 16 }} className="fw-bold">
          {news.title}
        </Card.Title>

        <Card.Text className="text-muted" style={{ fontSize: 14 }}>
          {news.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
