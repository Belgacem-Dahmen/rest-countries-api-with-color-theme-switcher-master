import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

function Country({ country }) {
    
    return (
        <div className='country'>
            <img className='country__img' src={country.flags.svg} alt="country" />
            <Link to={{ pathname: `country/${country.name}`, state: {...country } }}>
                <div className="country__infos">
                    <p className='country__infos-name'>{country.name}</p>
                    <p className='country__infos-populaion'><span>Population: </span>{country.population}</p>
                    <p className='country__infos-region'><span>Region: </span>{country.region}</p>
                    <p className='country__infos-capital'><span>Capital: </span>{country.capital}</p>
                </div>
            </Link>
        </div>
    );
}

export default Country;
