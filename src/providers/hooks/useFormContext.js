import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useFormContext = () => {
  const context = useContext(FormContext);

  const {
    forms,
    handleAddForms,
    handleDeleteForm,
    handleAddFields,
    handleDeleteField,
    handleEditLabelField,
    activePage,
    setActivePage,
  } = context;

  return {
    forms,
    handleAddForms,
    handleDeleteForm,
    handleAddFields,
    handleDeleteField,
    handleEditLabelField,
    activePage,
    setActivePage,
  };
}