import { Form, Container, Row, Col } from 'react-bootstrap';
import { FormBuilderHeader } from './Header';
import { FormBuilderBody } from './Body';

import { useFormContext } from '../../../providers/hooks/useFormContext';

export const FormBuilder = () => {
  const { forms, activePage } = useFormContext();

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <FormBuilderHeader />
            {
              forms[activePage - 1]?.fields?.length > 0 ?
                forms[activePage - 1]?.fields?.map((field, index) => (
                  <FormBuilderBody
                    key={index}
                    field={field}
                    index={index}
                  />
                )) : null
            }
          </Form>
        </Col>
      </Row>
    </Container>
  );
};