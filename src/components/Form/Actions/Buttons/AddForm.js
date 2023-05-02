import { Button } from "reactstrap";
import { FormBuilder } from "../../../Form/Builder";

export const ButtonAddForm = ({
  forms,
  setForms
}) => {
  const lastId = forms.length > 0 ? forms[forms.length - 1].id : 0;
  const handleAddForm = () => {
    setForms((currentForms) => {
      const id = currentForms.length > 0 ? lastId + 1 : 1;
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