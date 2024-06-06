import "./App.css";
import Pagination from "./components/Pagination";
import PlacesTable from "./components/PlacesTable";
import SearchBox from "./components/SearchBox";
import "./styles/SearchBox.css";
import "./styles/Pagination.css";
import "./styles/PlacesTable.css";

function App() {
  return (
    <div className="app">
      <div className="search-container">
        <SearchBox />
      </div>

      <PlacesTable />
      <Pagination />
    </div>
  );
}

export default App;
