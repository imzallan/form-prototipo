import { Card } from "react-bootstrap";

import { ButtonAddForm, ButtonDeleteForm } from "./Buttons";
import { FormPagination } from "./Pagination";

export const FormActions = () => {
  return (
    <Card.Footer>
      <div className="d-flex justify-content-between align-items-center">
        <ButtonDeleteForm />
        <FormPagination />
        <ButtonAddForm />
      </div>
    </Card.Footer>
  );
}