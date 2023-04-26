import { Button } from "reactstrap";
import FormBuilder from "../../FormBuilder";

export const ButtonAddForm = ({ forms, setForms }) => {
  const handleAddForm = () => {
    setForms((currentForms) => {
      const id = currentForms.length > 0 ? currentForms.length + 1 : 1;
      return [
        ...currentForms,
        {
          id,
          form: <FormBuilder key={id} />
        }
      ]
    });
  };

  return (
    <Button onClick={handleAddForm}>Add Form</Button>
  );
}