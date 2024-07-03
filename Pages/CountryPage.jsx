import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryPage = () => {
  const location = useLocation();

  // Check if location.state exists and extract country from it
  const country = location.state ? location.state.country : null;
  console.log(location);

  if (!country) {
    return <div>Loading...</div>; // Handle loading state or error gracefully
  }

  return (
    <div>
      <h2>Country Page</h2>
      <p>Name: {country.name}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      {/* Display other country details as needed */}
    </div>
  );
};

export default CountryPage;