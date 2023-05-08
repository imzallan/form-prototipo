import { createContext, useState, useEffect } from "react";
import { handleSetInitialState, handleSetItem } from "../infra/LocalStorage";

export const FormContext = createContext();

const formsInitialState = [{ id: 1, fields: [] }];

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState(
    handleSetInitialState("forms", formsInitialState)
  );
  const [activePage, setActivePage] = useState(handleSetInitialState("activePage", 1));

  useEffect(() => {
    handleSetItem("forms", forms);
  }, [forms]);

  useEffect(() => {
    handleSetItem("activePage", activePage);
  }, [activePage]);

  const handleAddFields = (newField) => {
    return setForms((currentForms) => {
      return currentForms.map((form, id) => {
        if (id === activePage - 1 || (activePage - 1 === 0 && id === activePage)) {
          return {
            ...form,
            fields: [
              ...form.fields,
              newField,
            ]
          }
        }
        return form;
      });
    })
  }

  const handleDeleteField = (index) => {
    return setForms((currentForms) => {
      return currentForms.map((form, id) => {
        if (id === activePage - 1 || (activePage - 1 === 0 && id === activePage)) {
          const formWithRemovedField = {
            ...form,
            fields: form.fields.filter((_, id) => id !== index),
          }
          if (formWithRemovedField.fields.length === 0 && activePage > 1) {
            handleDeleteForm(activePage);
            handleRemovePage(activePage);
          }
          return formWithRemovedField;
        }
        return form;
      });
    });
  }

  const handleEditLabelField = (currentFieldIndex, newLabelContent) => {
    return setForms((currentForms) => {
      return currentForms.map((form, id) => {
        if (id === activePage - 1 || (activePage - 1 === 0 && id === activePage)) {
          return {
            ...form,
            fields: form.fields.map((field, index) => {
              if (index === currentFieldIndex) {
                return {
                  ...field,
                  label: newLabelContent,
                }
              }
              return field;
            })
          }
        }
        return form;
      });
    });
  }

  const handleAddForms = () => {
    const lastId = forms.length > 0 ? forms[forms.length - 1].id : 1;
    setForms(
      (currentForms) => {
        const id = lastId + 1;
        return [
          ...currentForms,
          {
            id,
            fields: [],
          }
        ]
      }
    );
    return setActivePage((currentActivePage) => currentActivePage = currentActivePage + 1);
  }

  const handleDeleteForm = () => {
    if (activePage === 1 && forms.length === 1) {
      return setForms(formsInitialState);
    }

    const currentForms = [...forms];
    currentForms.splice(activePage - 1, 1);
    handleRemovePage();
    return setForms(currentForms);
  };

  const handleRemovePage = () => {
    if (activePage === 1) {
      return setActivePage(1);
    }

    return setActivePage((currentActivePage) => currentActivePage = currentActivePage - 1);
  }

  return (
    <FormContext.Provider value={{
      forms,
      handleAddForms,
      handleDeleteForm,
      handleAddFields,
      handleDeleteField,
      handleEditLabelField,
      activePage,
      setActivePage,
    }}>
      {children}
    </FormContext.Provider>
  );
}