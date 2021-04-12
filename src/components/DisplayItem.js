import React from 'react';
import MapComp from './MapComp';

function DisplayCountry({ country }) {

  return (
    <React.Fragment>
      
        <div className="info">

          <div className="text-center">
            <img  className="flag" src={country.flag} width="200px" alt={country.name+"'s flag"}/>
            <h2>{country.name}</h2>
            <p>Region: {country.region}</p> 
            <p>Capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <p>Languages: {country.languages[0].name}</p>
            <p>Coin: {country.currencies[0].name}</p>
            <p>Border countreis: </p>
            <div className="borders text-center" >
              <br/>{country.borders.map((country) =>{
              return <p className="p-1">{country}</p>
            })}
          </div>
          
          </div>

          <div className="map">
            {country.latlng && <MapComp latlng={country.latlng} />}
          </div>
         
        </div>
    </React.Fragment>
  );
}

export default DisplayCountry;
