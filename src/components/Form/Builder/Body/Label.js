import { useState } from 'react';
import { Form, Col, Button, } from 'react-bootstrap';

import { useFormContext } from '../../../../providers/hooks/useFormContext';

export const FormBuilderBodyLabel = ({
  field,
  index,
}) => {
  const [openEditLabel, setOpenEditLabel] = useState(false);
  const { handleEditLabelField } = useFormContext();

  const handleChangeToOpenEditLabel = () => {
    return setOpenEditLabel(!openEditLabel);
  }

  return (
    <>
      {
        openEditLabel ? (
          <Form.Group as={Col} className="mb-3" controlId="formLabel">
            <Form.Label column>
              Edit the title field
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" defaultValue={field.label} />
            </Col>
            <Button className="ml-3" variant="danger" onClick={handleChangeToOpenEditLabel}>
              Cancel
            </Button>
            <Button className="ml-3" variant="success" onClick={() => {
              handleEditLabelField(index, document.getElementById("formLabel").value);
              return handleChangeToOpenEditLabel();
            }}>
              Add new title
            </Button>
          </Form.Group>
        ) : (
          <>
            <Form.Label>{field.label}</Form.Label>
            <Button className="ml-3" variant="primary" onClick={handleChangeToOpenEditLabel}>
              Edit
            </Button>
          </>
        )
      }
    </>
  );
}