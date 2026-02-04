import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <ContactForm />
      </Container>
    </section>
  );
}
