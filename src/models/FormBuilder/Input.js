import { FormControl } from 'react-bootstrap';

export const FormInputsType = {
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