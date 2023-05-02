import React, { useState } from "react";
import {
  Card
} from "react-bootstrap";

import { FormCardHeader } from "./Header";
import { FormCardBody } from "./Body";
import { FormBuilder } from "../Builder";

import { FormActions } from "../Actions";

export const FormCard = () => {
  const [forms, setForms] = useState([
    { id: 1, form: <FormBuilder key={1} /> }
  ]);
  const [activePage, setActivePage] = useState(1);

  return (
    <Card>
      <FormCardHeader />
      <FormCardBody
        forms={forms}
        activePage={activePage}
      />
      <FormActions
        forms={forms}
        setForms={setForms}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </Card>
  );
};