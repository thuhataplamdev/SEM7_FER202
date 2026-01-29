import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import ConfirmProcessModal from "../components/ConfirmProcessModal";

export default function Ex2() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleConfirm = () => {
    toast.success("Duyệt đơn hàng thành công!");
    setIsShowModal(false);
  };

  return (
    <div className="container">
      <h4 className="mb-3">Exercise 2</h4>

      <Button variant="primary" onClick={() => setIsShowModal(true)}>
        Xử lý đơn hàng
      </Button>

      <ConfirmProcessModal
        show={isShowModal}
        onClose={() => setIsShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
