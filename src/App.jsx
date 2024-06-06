import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import PlacesTable from "./components/PlacesTable";
import Pagination from "./components/Pagination";
import { fetchPlaces } from "./utils/api";
import "./App.css";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    if (query.trim() === "") {
      setPlaces([]);
      return;
    }

    setLoading(true);

    const fetchData = async () => {
      const result = await fetchPlaces(query, itemsPerPage);
      setPlaces(result ? result.data : []);
      setLoading(false);
    };

    fetchData();
  }, [query, itemsPerPage, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handleItemsPerPageChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 1), 10);
    setItemsPerPage(value);
  };

  return (
    <div className="app">
      <div className="search-container">
        <SearchBox onSearch={handleSearch} />
      </div>
      <PlacesTable places={places} loading={loading} />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(places.length / itemsPerPage)}
        onPageChange={setPage}
      />
      <div className="items-per-page">
        <label>
          Items per page:
          <input
            type="number"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            min="1"
            max="10"
          />
        </label>
      </div>
    </div>
  );
};

export default App;
