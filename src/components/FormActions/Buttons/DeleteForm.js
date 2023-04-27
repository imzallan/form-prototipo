import { Button } from "reactstrap";

export const ButtonDeleteForm = ({
  forms,
  setForms,
  activePage,
  setActivePage
}) => {

  const handleRemoveForm = async (activePage) => {
    const currentForms = [...forms];
    currentForms.splice(activePage - 1, 1);
    await setForms(currentForms);
  };

  const handleRemovePage = async (activePage) => {
    if (activePage === 1) {
      return setActivePage(1);
    }

    await setActivePage((currentActivePage) => currentActivePage = currentActivePage - 1);
  }

  return (
    <>
      {
        forms.length > 1 ? (
          <Button
            onClick={async () => {
              await handleRemoveForm(activePage);
              await handleRemovePage(activePage);
            }}
          >
            Remove Form
          </Button>
        ) : null
      }
    </>
  )

}