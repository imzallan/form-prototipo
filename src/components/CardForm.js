import React, { useState } from "react";
import {
  CardBody,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { Card } from "react-bootstrap";
import FormBuilder from "./FormBuilder";

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
      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <Button onClick={handleAddForm}>Add Form</Button>
          <Pagination>
            {forms.map((form, index) => (<PaginationItem key={form.id} active={index + 1 === activePage}><PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink></PaginationItem>))}
          </Pagination>
          {forms.length > 1 && (<Button onClick={() => handleRemoveForm(activePage - 1)}>Remove Form</Button>)}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CardForm;