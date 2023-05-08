import { Dropdown, DropdownButton } from "react-bootstrap";

import { FormFieldsType } from "../../../../models/Form/Builder/Field";

import { useFormContext } from "../../../../providers/hooks/useFormContext";

export const FormBuilderHeader = () => {
  const { handleAddFields } = useFormContext();

  const handleAddField = (fieldType) => () => {
    const newField = FormFieldsType[fieldType];
    return handleAddFields(newField);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Add Field"
      className="mb-3"
    >
      {
        Object.keys(FormFieldsType).map((fieldType, index) => (
          <Dropdown.Item
            key={index}
            onClick={handleAddField(fieldType)}
          >
            {fieldType}
          </Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
}