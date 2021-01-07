import React, { useState, Fragment } from "react";
import Gallery from "components/Gallery";
import Navbar from "components/Navbar";
import Spinner from "components/Spinner";
import axios from "axios";
import "components/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function search() {
    setIsError(false);
    setIsLoading(true);
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    try {
      const result = await axios.get(`${BASE_URL}${query}`);
      setItems(result.data.items);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  return (
    <Fragment>
      <Navbar />
      <br />
      <div className="container text-center">
        <form
          onSubmit={(event) => {
            search();
            // event.preventDefault();
            setQuery("");
          }}
        >
          <div className="col-md">
            <div className="input-group mb-3">
              <input
                type="text"
                value={query}
                className="form-control"
                placeholder="Search for a book title or Author"
                aria-label="Search for a book title or Author"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="input-group-text" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <Spinner /> : <Gallery items={items} />}
        <br />
        <br />
        <br />
        This app is build using React, Font Awesome, &amp; Bootstrap 5
        <br />
      </div>
    </Fragment>
  );
};

export default App;
