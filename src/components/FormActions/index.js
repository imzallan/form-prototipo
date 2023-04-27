import { Card } from "react-bootstrap";

import { ButtonAddForm, ButtonDeleteForm } from "./Buttons";
import { FormPagination } from "./Pagination";

export const FormActions = ({
  forms,
  setForms,
  activePage,
  setActivePage
}) => {

  return (
    <Card.Footer>
      <div className="d-flex justify-content-between align-items-center">
        <ButtonAddForm
          forms={forms}
          setForms={setForms}
        />
        <FormPagination
          forms={forms}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <ButtonDeleteForm
          forms={forms}
          setForms={setForms}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </Card.Footer>
  );
}