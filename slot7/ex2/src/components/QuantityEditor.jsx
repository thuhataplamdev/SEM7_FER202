import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantityEditor({ initialValue = 0, onChange }) {
  const [qty, setQty] = useState(Math.max(0, initialValue));

  const updateQty = (next) => {
    const safe = Math.max(0, next);
    setQty(safe);
    onChange?.(safe);
  };

  const handleDecrease = () => updateQty(qty - 1);
  const handleIncrease = () => updateQty(qty + 1);

  const handleInputChange = (e) => {
    const raw = e.target.value;
    if (raw === "") return updateQty(0);

    const num = parseInt(raw, 10);
    if (Number.isNaN(num)) return updateQty(0);

    updateQty(num);
  };

  return (
    <div style={{ maxWidth: 150 }}>

      <InputGroup>
        <Button variant="secondary" onClick={handleDecrease}>
          <FaMinus/>
        </Button>

        <Form.Control
          type="number"
          min={0}
          value={qty}
          onChange={handleInputChange}
          aria-label="quantity"
        />

        <Button variant="secondary" onClick={handleIncrease}>
          <FaPlus/>
        </Button>
      </InputGroup>

      <div className="mt-2 text-muted">Số lượng hiện tại: {qty}</div>
    </div>
  );
}
