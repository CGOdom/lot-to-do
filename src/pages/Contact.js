import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark');
      document.body.classList.remove('bg-light');
    } else {
      document.body.classList.remove('bg-dark');
      document.body.classList.add('bg-light');
    }
  }, [darkMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('https://formspree.io/f/mkgwnwwb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        comments: formData.comments
      })
    });

    if (response.ok) {
      setStatus('Thank you for your message!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        comments: ''
      });
    } else {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <Container fluid className={`pt-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className={`p-4 shadow-sm ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <Card.Body>
              <h2 className="mb-4 text-center">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName" className="mb-3">
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name..."
                    required
                    className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}
                  />
                </Form.Group>

                <Form.Group controlId="formLastName" className="mb-3">
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name..."
                    required
                    className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email..."
                    required
                    className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}
                  />
                </Form.Group>

                <Form.Group controlId="formComments" className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Comments..."
                    className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
              {status && <p className="mt-3 text-center">{status}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
