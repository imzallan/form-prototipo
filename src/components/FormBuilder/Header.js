import { Dropdown, DropdownButton } from "react-bootstrap";

import { FormFieldsType } from "../../models/FormBuilder/Field";

export const FormBuilderHeader = ({ formFields, setFormFields }) => {
  const handleAddField = (fieldType) => () => {
    setFormFields(prevFormFields => [...prevFormFields, FormFieldsType[fieldType]]);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Add Field"
      className="mb-3"
    >
      {
        Object.keys(FormFieldsType).map((fieldType, index) => (
          <Dropdown.Item key={index} onClick={handleAddField(fieldType)}>{fieldType}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
}