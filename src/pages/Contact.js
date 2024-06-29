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

  useEffect(() => {
    document.body.classList.add('bg-dark');
    return () => {
      document.body.classList.remove('bg-dark');
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <Container fluid className={`pt-3 ${darkMode ? 'bg-dark text-white' : ''}`}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className={`p-4 shadow-sm ${darkMode ? 'bg-dark text-white' : ''}`}>
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
                    className={darkMode ? 'bg-dark text-white' : ''}
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
                    className={darkMode ? 'bg-dark text-white' : ''}
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
                    className={darkMode ? 'bg-dark text-white' : ''}
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
                    className={darkMode ? 'bg-dark text-white' : ''}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
