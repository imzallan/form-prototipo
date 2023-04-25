import { Button } from "react-bootstrap";

import { FormInputsType } from "../../../models/FormBuilder/Input";

export const FormBuilderBodyInputs = ({ field, index, handleRemoveField }) => {
  return (
    <>
      {FormInputsType[field.type].html}
      <Button className="ml-3" variant="danger" onClick={handleRemoveField(index)}>
        Remove
      </Button>
    </>
  );
}