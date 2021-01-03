/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Row, Col, Form, Button } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Underline from "components/Underline"

import "./Contact.scss";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const Contact = ({ className, frontmatter }) => {
  const [formFields, setFormFields] = useState({});
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");

  if (!frontmatter) {
    return null;
  }

  const isValid = field => {
    return field != null && field !== "" && field !== " ";
  };

  const handleChange = e => {
    e.persist();
    setFormFields(existingState => ({ ...existingState, [e.target.name]: e.target.value }));

    if (
      isValid(formFields.name) &&
      isValid(formFields.phone) &&
      isValid(formFields.email)
    ) {
      setValidated(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validated) {
      const form = e.target;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...formFields
        })
      })
        .then(() => setMessage("Thank you for submitting your details"))
        .catch(() => setMessage("Oups, it looks like something went wrong..."));
    } else {
      setMessage("Please fill in all information")
    }
  };

  const { anchorId, header, subheader, name, number, cta, email } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row className="align-items-center justify-content-center">
        <SectionHeader header={header} subheader={subheader} centered/>
        <Underline color="success" />
      </Row>
      <Row className="contact align-items-center justify-content-center">
        <Col md={8} className="text-center">
          <Form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <Form.Label srOnly>
              <input name="bot-field" onChange={handleChange} />
            </Form.Label>
            <Form.Group as={Col} controlId="name-input" className="border-bottom border-primary my-5">
              <Form.Label className="name-input" >{name}</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                onChange={handleChange}
                className="bg-transparent border-0"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="phone-input" className="border-bottom border-primary my-5">
              <Form.Label className="phone-input">{number}</Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                className="bg-transparent border-0"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="email-input" className="border-bottom border-primary my-5">
              <Form.Label className="email-input">{email}</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                onChange={handleChange}
                className="bg-transparent border-0"
              />
            </Form.Group>
            {message !== "" &&
              <Form.Text id="formMessage" className="mb-5 text-danger">
                {message}
              </Form.Text>
            }
            <Button type="submit" size="xl" variant="success" className="btn-rounded font-weight-bold">{cta}</Button>
          </Form>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
