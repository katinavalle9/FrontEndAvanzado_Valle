import { MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import { useSearch } from "../../context/SearchContex";

const Search = () => {
  const { setSearchQuery } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe/reinicie la página
    // Actualiza directamente el contexto con el valor del input
    setSearchQuery(e.target.value);
  };

  return (
    <MDBContainer>
      <MDBInputGroup tag="form" className="d-flex w-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          type="Search"
          onChange={handleSearch}
        />
      </MDBInputGroup>
    </MDBContainer>
  );
};

export default Search;
