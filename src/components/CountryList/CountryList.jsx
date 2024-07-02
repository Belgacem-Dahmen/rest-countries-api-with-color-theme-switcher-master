import React from 'react'
import "./CountryList.css"
import countries from '../../../data.json'
import Country from '../Country/Country'

function CountryList() {

    return (
        <div className='CountryList'>
            <div className='CountryList__header'>
                <div className='CountryList__header-search '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="CountryList__header-search__svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input className='CountryList__header-search__input' type="text" placeholder='Search for a country..' />
                </div>
                <div className='CountryList__header-select'>
                    <select name="region" id="region">
                        <option className='CountryList__region-option' value="">Filter by region</option>
                        <option className='CountryList__region-option' value="Africa">Africa</option>
                        <option className='CountryList__region-option' value="America">America</option>
                        <option className='CountryList__region-option' value="Asia">Asia</option>
                        <option className='CountryList__region-option' value="Europe">Europe</option>
                        <option className='CountryList__region-option' value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div className="CountryList__items">
                {countries.map(country => (
                    <Country country={country} key={country.id} />
                ))}
            </div>
        </div>
    )
}

export default CountryList
