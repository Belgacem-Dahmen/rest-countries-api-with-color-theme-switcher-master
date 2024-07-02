import React from 'react'
import "./Country.css"

function Country({ country }) {
    return (
        <div className='country'>
            <img className='country__img' src={country.flags.svg} alt="country" />
            <div className="country__infos">
            <p>{country.name}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.capital}</p>
            </div>
        </div>
    )
}

export default Country
