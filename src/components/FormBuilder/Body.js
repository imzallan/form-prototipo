import { useState } from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';

export const FormBuilderBody = ({ formFields, setFormFields }) => {

  const handleRemoveField = (index) => () => {
    setFormFields(formFields.filter((field, i) => i !== index));
  };

  const [labelFieldEdit, setLabelFieldEdit] = useState(false);

  const labelFieldEditHandleChange = (index) => (e) => {
    setLabelFieldEdit({
      id: index,
    });
  }

  const handleEditField = (currentFieldIndex) => {
    const fieldSelectedIndex = formFields.findIndex((field, index) => index === currentFieldIndex);
    formFields[fieldSelectedIndex].label = document.getElementById("formLabel").value;
  }

  return (
    <>
      {formFields.length > 0 ? formFields.map((field, index) => (
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
          <Button className="ml-3" variant="danger" onClick={handleRemoveField(index)}>
            Remove
          </Button>
        </Form.Group>
      )) : null}
    </>
  );
}