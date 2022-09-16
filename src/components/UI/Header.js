import { useContext, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import CartLink from "../Cart/CartLink";
import Button from "./Button";

function Header(props) {
  const useHeaderContext = useContext(HeaderContext);
  const [inputVal, setInputVal] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    useHeaderContext.onSearch(inputVal);
    useHeaderContext.onChangeView("search");
    setInputVal("");
    console.log(useHeaderContext.mainContainerRef.current.cont);
    useHeaderContext.mainContainerRef.current.cont.scrollIntoView();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        <h1
          className="m-0 fs-3 cursor-pointer"
          onClick={() => useHeaderContext.onChangeView("items")}
        >
          Order meals
        </h1>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <CartLink className="ml-auto cursor-pointer" />
          &nbsp;
          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Button className="btn btn-outline-success" type="submit">
              Search
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
