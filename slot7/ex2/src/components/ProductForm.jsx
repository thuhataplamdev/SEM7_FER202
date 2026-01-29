import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [savedData, setSavedData] = useState(null);

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const e = { name: "", price: "", category: "" };

    const nameTrim = form.name.trim();
    if (!nameTrim) e.name = "Vui lòng nhập tên sản phẩm.";

    if (form.price === "" || form.price === null) e.price = "Vui lòng nhập giá tiền.";
    else {
      const p = Number(form.price);
      if (Number.isNaN(p)) e.price = "Giá không hợp lệ.";
      else if (p < 0) e.price = "Giá phải >= 0.";
    }

    if (!form.category) e.category = "Vui lòng chọn mục lục.";

    setErrors(e);
    return !e.name && !e.price && !e.category;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const data = {
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category,
    };

    setSavedData(data);
    setShowModal(true);

    setForm({ name: "", price: "", category: "" });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
        <Form.Group as={Row} className="mb-3" controlId="productName">
          <Form.Label column sm={3}>
            Tên sản phẩm:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="VD: Áo thun"
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="price">
          <Form.Label column sm={3}>
            Giá:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              min={0}
              step="1"
              value={form.price}
              onChange={(e) => setField("price", e.target.value)}
              placeholder="VD: 199000"
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="category">
          <Form.Label column sm={3}>
            Danh mục:
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              value={form.category}
              onChange={(e) => setField("category", e.target.value)}
              isInvalid={!!errors.category}
            >
              <option value="">-- Chọn danh mục --</option>
              <option value="Thời trang">Thời trang</option>
              <option value="Điện tử">Điện tử</option>
              <option value="Gia dụng">Gia dụng</option>
              <option value="Khác">Khác</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <div className="text-end">
          <Button type="submit" variant="outline-danger">Lưu</Button>
        </div>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đã lưu sản phẩm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {savedData && (
            <div className="d-grid gap-2">
              <div>
                <strong>Tên sản phẩm:</strong> {savedData.name}
              </div>
              <div>
                <strong>Giá:</strong> {savedData.price} VND
              </div>
              <div>
                <strong>Category:</strong> {savedData.category}
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}