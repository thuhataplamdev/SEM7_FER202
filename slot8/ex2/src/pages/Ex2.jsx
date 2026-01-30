import { toast } from "react-toastify";
import ConfirmProcessModal from "../components/ConfirmProcessModal";

export default function Ex2() {
  const handleConfirm = () => {
    toast.success("Duyệt đơn hàng thành công!");
  };

  return (
    <div className="container">
      <h4 className="mb-3">Exercise 2</h4>

      <ConfirmProcessModal onConfirm={handleConfirm} />
    </div>
  );
}
