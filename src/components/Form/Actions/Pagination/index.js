import {
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

export const FormPagination = ({
  forms,
  activePage,
  setActivePage
}) => {

  const handlePageChange = (newActivePage) => () => {
    setActivePage(newActivePage)
  }

  return (
    <Pagination>
      {forms.map((form, index) => (
        <PaginationItem
          key={form.id}
          active={index + 1 === activePage}
        >
          <PaginationLink
            onClick={handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
}