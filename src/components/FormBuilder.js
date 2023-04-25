import React, { useState } from 'react';
import { Form, Dropdown, DropdownButton, Button, Container, Row, Col, FormControl } from 'react-bootstrap';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const handleAddField = (fieldType) => {
    switch (fieldType) {
      case 'Text Field':
        setFormFields([...formFields, { type: 'text', label: 'Text Field' }]);
        break;
      case 'Number Field':
        setFormFields([...formFields, { type: 'number', label: 'Number Field' }]);
        break;
      case 'File Upload Field':
        setFormFields([...formFields, { type: 'file', label: 'File Upload Field' }]);
        break;
      default:
        break;
    }
  };

  const handleRemoveField = (index) => {
    setFormFields(formFields.filter((field, i) => i !== index));
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <DropdownButton
              id="dropdown-basic-button"
              title="Add Field"
              className="mb-3"
            >
              <Dropdown.Item onClick={() => handleAddField('Text Field')}>Text Field</Dropdown.Item>
              <Dropdown.Item onClick={() => handleAddField('Number Field')}>Number Field</Dropdown.Item>
              <Dropdown.Item onClick={() => handleAddField('File Upload Field')}>File Upload Field</Dropdown.Item>
            </DropdownButton>
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