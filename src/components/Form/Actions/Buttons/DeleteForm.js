import { Button } from "reactstrap";

import { useFormContext } from "../../../../providers/hooks/useFormContext";

export const ButtonDeleteForm = () => {
  const {
    handleDeleteForm,
    forms,
  } = useFormContext();

  return (
    <Button
      disabled={forms[0].fields.length === 0}
      color={forms[0].fields.length === 0 ? "secondary" : "danger"}
      onClick={() => handleDeleteForm()}
    >
      Remove Form
    </Button>
  )
}