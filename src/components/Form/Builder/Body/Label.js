import { Form, Col, Button, } from 'react-bootstrap';

export const FormBuilderBodyLabel = ({ field, index, labelFieldEdit, setLabelFieldEdit, handleEditField }) => {

  const labelFieldEditHandleChange = (index) => (e) => {
    setLabelFieldEdit({
      id: index,
    });
  }

  return (
    <>
      {
        labelFieldEdit?.id === index ? (
          <Form.Group as={Col} className="mb-3" controlId="formLabel">
            <Form.Label column>
              Edit the title field
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" defaultValue={field.label} />
            </Col>
            <Button className="ml-3" variant="danger" onClick={labelFieldEditHandleChange(false)}>
              Cancel
            </Button>
            <Button className="ml-3" variant="success" onClick={() => {
              handleEditField(index);
              return setLabelFieldEdit(false)
            }}>
              Add new title
            </Button>
          </Form.Group>
        ) : (
          <>
            <Form.Label>{field.label}</Form.Label>
            <Button className="ml-3" variant="primary" onClick={labelFieldEditHandleChange(index)}>
              Edit
            </Button>
          </>
        )
      }
    </>
  );
}