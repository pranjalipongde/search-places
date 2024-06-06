import React from "react";
import "../styles/PlacesTable.css";

const PlacesTable = ({ places, loading }) => {
  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (places.length === 0) {
    return <div className="no-result">No result found</div>;
  }

  return (
    <div className="places-table-container">
      <table className="places-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => (
            <tr key={place.id}>
              <td>{index + 1}</td>
              <td>{place.name}</td>
              <td className="country-cell">
                <img
                  src={`https://flagsapi.com/${place.countryCode}/flat/24.png`}
                  alt={place.country}
                  className="country-flag"
                />
                {place.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacesTable;
