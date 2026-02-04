import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function SubmitModal({ show, onClose, onReset, data }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submitted Data</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {data && (
          <>
            <p>
              <b>First name:</b> {data.firstName}
            </p>
            <p>
              <b>Last name:</b> {data.lastName}
            </p>
            <p>
              <b>Username:</b> @{data.userName}
            </p>
            <p>
              <b>City:</b> {data.city}
            </p>
            <p>
              <b>State:</b> {data.state}
            </p>
            <p>
              <b>Zip:</b> {data.zipCode}
            </p>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button variant="danger" onClick={onReset}>
          Reset Form
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
