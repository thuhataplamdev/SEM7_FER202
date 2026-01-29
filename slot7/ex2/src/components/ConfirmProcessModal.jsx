import { Button, Modal } from "react-bootstrap";

export default function ConfirmProcessModal({ show, onClose, onConfirm }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="success" onClick={onConfirm}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
