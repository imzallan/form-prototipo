import {
  Card
} from "react-bootstrap";

import { FormCardHeader } from "./Header";
import { FormCardBody } from "./Body";
import { FormActions } from "../Actions";

export const FormCard = () => {
  return (
    <Card>
      <FormCardHeader />
      <FormCardBody />
      <FormActions />
    </Card>
  );
};