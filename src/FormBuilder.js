import React, { useState } from 'react';
import { Form, Dropdown, DropdownButton, Button, Container, Row, Col, FormControl } from 'react-bootstrap';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [labelFieldEdit, setLabelFieldEdit] = useState(false);

  const labelFieldEditHandleChange = (index) => (e) => {
    setLabelFieldEdit({
      id: index,
    });
  }

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

  const handleEditField = (currentFieldIndex) => {
    const fieldSelectedIndex = formFields.findIndex((field, index) => index === currentFieldIndex);
    formFields[fieldSelectedIndex].label = document.getElementById("formLabel").value;
  }

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
                {
                  labelFieldEdit?.id === index ? (
                    <Form.Group as={Col} className="mb-3" controlId="formLabel">
                      <Form.Label column>
                        Edit the title field
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" defaultValue={field.label} />
                      </Col>
                      <Button className="ml-3" variant="danger" onClick={labelFieldEditHandleChange(false)}>
                        Cancel
                      </Button>
                      <Button className="ml-3" variant="success" onClick={() => {
                        handleEditField(index);
                        return setLabelFieldEdit(false)
                      }}>
                        Add new title
                      </Button>
                    </Form.Group>
                  ) : (
                    <>
                      <Form.Label>{field.label}</Form.Label>
                      <Button className="ml-3" variant="primary" onClick={labelFieldEditHandleChange(index)}>
                        Edit
                      </Button>
                    </>
                  )
                }
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