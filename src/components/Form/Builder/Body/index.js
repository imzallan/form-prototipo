import { Form } from 'react-bootstrap';
import { FormBuilderBodyLabel } from './Label';
import { FormBuilderBodyInputs } from './Inputs';

export const FormBuilderBody = ({
  field,
  index
}) => {
  return (
    <Form.Group className="my-3">
      <FormBuilderBodyLabel
        field={field}
        index={index}
      />
      <FormBuilderBodyInputs
        field={field}
        index={index}
      />
    </Form.Group>
  );
}