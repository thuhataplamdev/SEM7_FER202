import { Modal, Button, Badge } from "react-bootstrap";

export default function PizzaDetailModal({ show, onClose, p }) {
  if (!p) return null;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{p.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div style={{ height: 260, overflow: "hidden" }} className="rounded mb-3">
          <img
            src={p.image}
            alt={p.name}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">Price</div>
            {p.promotion ? (
              <>
                <span className="text-muted text-decoration-line-through me-2">
                  ${p.price}
                </span>
                <span className="fw-bold text-danger">
                  ${p.promotion}
                </span>
              </>
            ) : (
              <span className="fw-bold">${p.price}</span>
            )}
          </div>

          {p.tag && (
            <Badge bg="warning" text="dark" className="px-3 py-2">
              {p.tag.toUpperCase()}
            </Badge>
          )}
        </div>

        {p.description && (
          <p className="mt-3 text-muted mb-0">{p.description}</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="dark" onClick={() => alert(`Successfull`)}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}
