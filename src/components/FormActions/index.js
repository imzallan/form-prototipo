import {
  Button,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { Card } from "react-bootstrap";

import { ButtonAddForm } from "./Buttons/AddForm";

export const FormActions = ({
  forms,
  activePage,
  handlePageChange,
  handleAddForm,
  handleRemoveForm,
  setForms,
}) => {
  return (
    <Card.Footer>
      <div className="d-flex justify-content-between align-items-center">
        <ButtonAddForm forms={forms} setForms={setForms} />
        {/* <Button onClick={handleAddForm}>Add Form</Button> */}
        <Pagination>
          {forms.map((form, index) => (<PaginationItem key={form.id} active={index + 1 === activePage}><PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink></PaginationItem>))}
        </Pagination>
        {forms.length > 1 && (<Button onClick={() => handleRemoveForm(activePage - 1)}>Remove Form</Button>)}
      </div>
    </Card.Footer>
  );
}