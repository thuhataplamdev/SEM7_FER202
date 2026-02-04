import { useReducer } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const initialState = {
  form: {
    name: "",
    price: "",
    category: "",
  },
  errors: {
    name: "",
    price: "",
    category: "",
  },
  showModal: false,
  savedData: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: "" },
      };

    case "SET_ERRORS":
      return { ...state, errors: action.errors };

    case "SUBMIT":
      return {
        ...state,
        savedData: action.data,
        showModal: true,
        form: { ...initialState.form },
        errors: { ...initialState.errors },
      };

    case "CLOSE_MODAL":
      return { ...state, showModal: false };

    case "RESET_FORM":
      return {
        ...state,
        form: { ...initialState.form },
        errors: { ...initialState.errors },
      };

    default:
      return state;
  }
}

export default function ProductForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setField = (field, value) => {
    dispatch({ type: "CHANGE_INPUT", field, value });
  };

  const validate = () => {
    const e = { name: "", price: "", category: "" };

    const nameTrim = state.form.name.trim();
    if (!nameTrim) e.name = "Vui lòng nhập tên sản phẩm.";

    if (state.form.price === "" || state.form.price === null) e.price = "Vui lòng nhập giá tiền.";
    else {
      const p = Number(state.form.price);
      if (Number.isNaN(p)) e.price = "Giá không hợp lệ.";
      else if (p < 0) e.price = "Giá phải >= 0.";
    }

    if (!state.form.category) e.category = "Vui lòng chọn mục lục.";

    dispatch({ type: "SET_ERRORS", errors: e });
    return !e.name && !e.price && !e.category;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const data = {
      name: state.form.name.trim(),
      price: Number(state.form.price),
      category: state.form.category,
    };

    dispatch({ type: "SUBMIT", data });
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
              value={state.form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="VD: Áo thun"
              isInvalid={!!state.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.name}
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
              value={state.form.price}
              onChange={(e) => setField("price", e.target.value)}
              placeholder="VD: 199000"
              isInvalid={!!state.errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.price}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="category">
          <Form.Label column sm={3}>
            Danh mục:
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              value={state.form.category}
              onChange={(e) => setField("category", e.target.value)}
              isInvalid={!!state.errors.category}
            >
              <option value="">-- Chọn danh mục --</option>
              <option value="Thời trang">Thời trang</option>
              <option value="Điện tử">Điện tử</option>
              <option value="Gia dụng">Gia dụng</option>
              <option value="Khác">Khác</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {state.errors.category}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <div className="text-end d-flex justify-content-end gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => dispatch({ type: "RESET_FORM" })}
          >
            Reset
          </Button>

          <Button type="submit" variant="outline-danger">
            Lưu
          </Button>
        </div>
      </Form>

      <Modal
        show={state.showModal}
        onHide={() => dispatch({ type: "CLOSE_MODAL" })}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Đã lưu sản phẩm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {state.savedData && (
            <div className="d-grid gap-2">
              <div>
                <strong>Tên sản phẩm:</strong> {state.savedData.name}
              </div>
              <div>
                <strong>Giá:</strong> {state.savedData.price} VND
              </div>
              <div>
                <strong>Category:</strong> {state.savedData.category}
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}