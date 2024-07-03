import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./CountryPage.css"
const CountryPage = () => {
  const location = useLocation();
  const country = location.state ? location.state : null;


  if (!country) {
    return <div>Loading...</div>; // Handle loading state or error gracefully
  }

  return (
    <div className='country-page'>
      <Link to='/'>
        <button className='country-page__btn'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="country-page__btn-icon">
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg> back</button>
      </Link>
      <div className='country-page__infos'>
        <img className='country-page__infos-flag' src={country.flag} alt="" />
        <div className='country-page__infos-stats'>
          <p>Name: {country.name}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>

        </div>

      </div>

    </div>
  );
};

export default CountryPage;