import { useMemo, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { BsPerson } from "react-icons/bs";

const CITIES = ["Hà nội", "Đà nẵng", "Hồ chí minh", "Huế", "Nha trang"];

export default function DemoForm() {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    from: "Hà nội",
    to: "Hà nội",
    tripGo: false,
    tripReturn: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const nameValid = useMemo(() => {
    if (!form.fullName) return null;
    const s = form.fullName.trim();
    return s.length >= 5 && s === s.toUpperCase();
  }, [form.fullName]);

  const addressValid = useMemo(() => {
    if (!form.address) return null;
    return form.address.trim().length >= 5;
  }, [form.address]);

  const canSubmit = useMemo(() => {
    return nameValid === true && addressValid === true && (form.tripGo || form.tripReturn);
  }, [nameValid, addressValid, form.tripGo, form.tripReturn]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card className="shadow-lg border-0 rounded-4">
      <Card.Body className="p-4 p-md-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold m-0">Form đặt vé máy bay</h2>
        </div>

        {submitted && canSubmit && (
          <Alert variant="success" className="rounded-3">
            <b>Đặt vé thành công!</b>
          </Alert>
        )}
        {submitted && !canSubmit && (
          <Alert variant="danger" className="rounded-3">
            Họ tên IN HOA ≥ 5 ký tự, Địa chỉ ≥ 5 ký tự, chọn ít nhất 1 chiều.
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Họ tên</Form.Label>
            <InputGroup size="lg">
              <InputGroup.Text className="bg-light">
                <BsPerson />
              </InputGroup.Text>
              <Form.Control
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Họ tên"
                isValid={nameValid === true}
                isInvalid={nameValid === false}
              />
              <InputGroup.Text className="bg-light">vnd</InputGroup.Text>
            </InputGroup>
            <Form.Text className="text-secondary">Phải nhập 5 ký tự, in hoa...</Form.Text>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Địa chỉ</Form.Label>
            <Form.Control
              size="lg"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Địa chỉ"
              isValid={addressValid === true}
              isInvalid={addressValid === false}
            />
            <Form.Text className="text-secondary">Phải nhập 5 ký tự...</Form.Text>
          </Form.Group>

          <Row className="g-3 mb-4">
            <Col md={6}>
              <Form.Label className="fw-semibold">Đi từ</Form.Label>
              <Form.Select size="lg" name="from" value={form.from} onChange={handleChange}>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label className="fw-semibold">Đến</Form.Label>
              <Form.Select size="lg" name="to" value={form.to} onChange={handleChange}>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Chọn chiều đi (Khứ hồi)</Form.Label>
            <div className="d-flex gap-4">
              <Form.Check
                label="Đi"
                name="tripGo"
                type="checkbox"
                checked={form.tripGo}
                onChange={handleChange}
              />
              <Form.Check
                label="Về"
                name="tripReturn"
                type="checkbox"
                checked={form.tripReturn}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Button type="submit" size="lg" className="w-100 py-3 rounded-3">
            Đặt vé
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
