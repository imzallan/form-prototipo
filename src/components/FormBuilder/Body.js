import { Form, FormControl, Button } from 'react-bootstrap';

export const FormBuilderBody = ({ formFields, setFormFields }) => {

  const handleRemoveField = (index) => () => {
    setFormFields(formFields.filter((field, i) => i !== index));
  };

  return (
    <>
      {formFields.length > 0 ? formFields.map((field, index) => (
        <Form.Group key={index} className="my-3">
          <Form.Label>{field.label}</Form.Label>
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