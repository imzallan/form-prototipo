import React, { useState } from 'react';
import { Form, Container, Row, Col, } from 'react-bootstrap';
import { FormBuilderHeader } from './Header';
import { FormBuilderBody } from './Body';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <FormBuilderHeader formFields={formFields} setFormFields={setFormFields} />
            <FormBuilderBody formFields={formFields} setFormFields={setFormFields} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormBuilder;