import { Button } from "reactstrap";
import { useFormContext } from "../../../../providers/hooks/useFormContext";

export const ButtonAddForm = () => {
  const {
    handleAddForms,
    forms,
    activePage,
  } = useFormContext();

  const handleButtonDisabled = () => {
    if (forms[activePage - 1]?.fields?.length === 0) {
      return true;
    }

    if (forms[activePage]?.fields?.length === 0) {
      return true;
    }

    return false;
  }

  return (
    <Button
      color={handleButtonDisabled() ? 'secondary' : 'success'}
      disabled={handleButtonDisabled()}
      onClick={() => handleAddForms()}
    >
      Add Form
    </Button>
  );
}