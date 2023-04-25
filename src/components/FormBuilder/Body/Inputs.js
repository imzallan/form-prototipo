import { FormControl, Button } from "react-bootstrap";

const formInputsTypes = {
  'text': {
    html: <FormControl type="text" placeholder="Enter text" />,
  },
  'number': {
    html: <FormControl type="number" placeholder="Enter number" />,
  },
  'file': {
    html: <FormControl type="file" />,
  },
}

export const FormBuilderBodyInputs = ({ field, index, handleRemoveField }) => {
  return (
    <>
      {formInputsTypes[field.type].html}
      <Button className="ml-3" variant="danger" onClick={handleRemoveField(index)}>
        Remove
      </Button>
    </>
  );
}