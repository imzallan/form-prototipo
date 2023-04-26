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
  const [formCount, setFormCount] = useState(1);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const handleAddForm = () => {
    setFormCount(formCount + 1);
    setForms([...forms, { id: formCount + 1, form: <FormBuilder key={formCount + 1} /> }]);
  };

  const handleRemoveForm = formIndex => {
    const newForms = [...forms];
    newForms.splice(formIndex, 1);
    setForms(newForms);

    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const renderForm = formIndex => {
    return forms[formIndex].form;
  };

  return (
    <Card>
      <Card.Header>APSV Formulários</Card.Header>
      <CardBody>{renderForm(activePage - 1)}</CardBody>
      <FormActions
        forms={forms}
        activePage={activePage}
        handlePageChange={handlePageChange}
        handleAddForm={handleAddForm}
        handleRemoveForm={handleRemoveForm}
        setForms={setForms}
      />
    </Card>
  );
};

export default CardForm;