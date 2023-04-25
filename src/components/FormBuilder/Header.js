import { Dropdown, DropdownButton } from "react-bootstrap";

const formFieldsTypes = {
  'Text Field': {
    type: 'text',
    label: 'Text Field',
  },
  'Number Field': {
    type: 'number',
    label: 'Number Field',
  },
  'File Upload Field': {
    type: 'file',
    label: 'File Upload Field',
  },
}

export const FormBuilderHeader = ({ formFields, setFormFields }) => {
  const handleAddField = (fieldType) => () => {
    setFormFields(prevFormFields => [...prevFormFields, formFieldsTypes[fieldType]]);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Add Field"
      className="mb-3"
    >
      {
        Object.keys(formFieldsTypes).map((fieldType, index) => (
          <Dropdown.Item key={index} onClick={handleAddField(fieldType)}>{fieldType}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
}