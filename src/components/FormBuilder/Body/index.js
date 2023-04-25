import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FormBuilderBodyLabel } from './Label';

export const FormBuilderBody = ({ formFields, setFormFields }) => {
  const [labelFieldEdit, setLabelFieldEdit] = useState(false);

  const handleRemoveField = (index) => () => {
    setFormFields(formFields.filter((_, i) => i !== index));
  };

  const handleEditField = (currentFieldIndex) => {
    const fieldSelectedIndex = formFields.findIndex((_, index) => index === currentFieldIndex);
    console.log('current field index', currentFieldIndex)
    setFormFields(formFields.map((field, index) => {
      if (index === fieldSelectedIndex) {
        return {
          ...field,
          label: document.getElementById("formLabel").value,
        }
      }
      return field;
    }));
  }

  return (
    <>
      {formFields.length > 0 ? formFields.map((field, index) => (
        <Form.Group key={index} className="my-3">
          <FormBuilderBodyLabel
            field={field}
            index={index}
            labelFieldEdit={labelFieldEdit}
            setLabelFieldEdit={setLabelFieldEdit}
            handleEditField={handleEditField}
          />
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