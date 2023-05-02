import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormBuilderBodyLabel } from './Label';
import { FormBuilderBodyInputs } from './Inputs';

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
            key={index}
            field={field}
            index={index}
            labelFieldEdit={labelFieldEdit}
            setLabelFieldEdit={setLabelFieldEdit}
            handleEditField={handleEditField}
          />
          <FormBuilderBodyInputs
            key={index}
            field={field}
            index={index}
            handleRemoveField={handleRemoveField}
          />
        </Form.Group>
      )) : null}
    </>
  );
}