import {
  CardBody,
} from "reactstrap";

const RenderForm = ({ formIndex, forms }) => {
  return forms[formIndex]?.form;
};

export const FormCardBody = ({ forms, activePage }) => {
  return (
    <CardBody>
      <RenderForm forms={forms} formIndex={activePage - 1} />
    </CardBody>
  );
}