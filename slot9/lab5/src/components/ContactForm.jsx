import { useReducer } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import SubmitModal from "./SubmitModal";

import { ToastContainer, toast } from "react-toastify";

const initialState = {
  form: {
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    zipCode: "",
    agree: false,
  },
  validated: false,
  showModal: false,
  savedData: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };

    case "SUBMIT_SUCCESS":
      return {
        ...state,
        validated: true,
        showModal: true,
        savedData: action.payload,
      };

    case "SUBMIT_FAIL":
      return { ...state, validated: true };

    case "CLOSE_MODAL":
      return { ...state, showModal: false };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { form, validated, showModal, savedData } = state;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;

    if (formEl.checkValidity() === false || !form.agree) {
      event.stopPropagation();
      dispatch({ type: "SUBMIT_FAIL" });
      return;
    }

    toast.success("Submit successfully!");

    dispatch({ type: "SUBMIT_SUCCESS", payload: form });
  };

  return (
    <>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={2000} />

      {/* FORM */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First name */}
          <Form.Group as={Col} md="4">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a first name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Last name */}
          <Form.Group as={Col} md="4">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a last name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Username */}
          <Form.Group as={Col} md="4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="userName"
              value={form.userName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* City, State, Zip */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              type="text"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Check
          required
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          label="Agree to terms and conditions"
          isInvalid={validated && !form.agree}
          feedback="You must agree before submitting."
          feedbackType="invalid"
          className="mb-3"
        />

        <Button type="submit">Submit form</Button>
      </Form>
      <SubmitModal
        show={showModal}
        data={savedData}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        onReset={() => dispatch({ type: "RESET" })}
      />
    </>
  );
}
