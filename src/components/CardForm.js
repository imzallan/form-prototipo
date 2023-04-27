import React, { useState } from "react";
import {
  CardBody,
} from "reactstrap";
import { Card } from "react-bootstrap";
import FormBuilder from "./FormBuilder";

import { FormActions } from "./FormActions";

const CardForm = () => {
  const [forms, setForms] = useState([
    { id: 1, form: <FormBuilder key={1} /> }
  ]);
  const [activePage, setActivePage] = useState(1);

  const renderForm = (formIndex) => {
    return forms[formIndex]?.form;
  };

  return (
    <Card>
      <Card.Header>APSV Formulários</Card.Header>
      <CardBody>{renderForm(activePage - 1)}</CardBody>
      <FormActions
        forms={forms}
        setForms={setForms}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </Card>
  );
};

export default CardForm;