import { Button } from "reactstrap";

import { useFormContext } from "../../../../providers/hooks/useFormContext";

export const ButtonDeleteForm = () => {
  const {
    handleDeleteForm,
    forms,
  } = useFormContext();

  const handleButttonDisabled = () => {
    if (forms[0]?.fields?.length === 0 && forms.length === 1) {
      return true;
    }

    return false;
  }

  return (
    <Button
      disabled={handleButttonDisabled()}
      color={handleButttonDisabled() ? "secondary" : "danger"}
      onClick={() => handleDeleteForm()}
    >
      Remove Form
    </Button>
  )
}