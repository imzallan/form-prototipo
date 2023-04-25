import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, FormControl } from 'react-bootstrap';
import { FormBuilderHeader } from './FormBuilder/Header';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const handleRemoveField = (index) => {
    setFormFields(formFields.filter((field, i) => i !== index));
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <FormBuilderHeader formFields={formFields} setFormFields={setFormFields} />
            {formFields.map((field, index) => (
              <Form.Group key={index} className="my-3">
                <Form.Label>{field.label}</Form.Label>
                {field.type === 'text' && <FormControl type="text" placeholder="Enter text" />}
                {field.type === 'number' && <FormControl type="number" placeholder="Enter number" />}
                {field.type === 'file' && <FormControl type="file" />}
                <Button className="ml-3" variant="danger" onClick={() => handleRemoveField(index)}>
                  Remove
                </Button>
              </Form.Group>
            ))}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormBuilder;