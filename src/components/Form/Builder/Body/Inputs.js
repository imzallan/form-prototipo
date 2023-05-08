import { Button } from "react-bootstrap";

import { FormInputsType } from "../../../../models/Form/Builder/Input";

import { useFormContext } from "../../../../providers/hooks/useFormContext";

export const FormBuilderBodyInputs = ({ field, index }) => {
  const { handleDeleteField } = useFormContext();

  return (
    <>
      {FormInputsType[field.type].html}
      <Button
        className="ml-3"
        variant="danger"
        onClick={() => handleDeleteField(index)}
      >
        Remove
      </Button>
    </>
  );
}