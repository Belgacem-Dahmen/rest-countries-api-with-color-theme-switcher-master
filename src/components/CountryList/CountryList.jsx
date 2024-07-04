import React, { useState } from 'react'
import "./CountryList.css"
import countries from '../../../data.json'
import Country from '../Country/Country'

function CountryList() {
    const [region, setRegion] = useState('All')
    const [search, setSearch] = useState('');
    const handleRegionchange = (e) => {
        setRegion(e.target.value)
    }
    const handlechange = (e) => {
        setSearch(e.target.value);

    }

    const filteredCountries = countries.filter(country => {
        if (region === 'All') {
          return search ? country.name.toLowerCase().includes(search.toLowerCase()) : true;
        } else {
          return country.name.toLowerCase().includes(search.toLowerCase()) && country.region === region;
        }
      });
    

    return (
        <div className='CountryList'>
            <div className='CountryList__header'>
                <div className='CountryList__header-search '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="CountryList__header-search__svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input className='CountryList__header-search__input' type="text" placeholder='Search for a country..' onChange={handlechange} />
                </div>
                <div className='CountryList__header-select'>
                    <select name="region" id="region" onChange={handleRegionchange}>
                        <option className='CountryList__region-option' value="All">Filter by region</option>
                        <option className='CountryList__region-option' value="Africa">Africa</option>
                        <option className='CountryList__region-option' value="Americas">Americas</option>
                        <option className='CountryList__region-option' value="Asia">Asia</option>
                        <option className='CountryList__region-option' value="Europe">Europe</option>
                        <option className='CountryList__region-option' value="Oceania">Oceania</option>

                    </select>
                </div>
            </div>
            <div className="CountryList__items">
                {!filteredCountries.length == 0 ? filteredCountries.map((country, i) => (
                    <Country country={country} key={i} />
                )) : <p>aucun element ne corresspond a votre recherche </p>}
            </div>
        </div>
    )
}

export default CountryList
