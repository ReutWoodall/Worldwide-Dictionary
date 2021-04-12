import React, { useEffect, useState } from 'react';
import Header from './Header';
import DisplayItem from './DisplayItem';
import { useHistory, useParams } from 'react-router-dom';
import { doApiGet, URL_API } from '../services/apiser';

function Country() {
  const [countryNameState, setName] = useState();
  const [country, setCountry] = useState();
  const history = useHistory();
  const { countryName: countryNameFromURL } = useParams();
  
  useEffect(() => {
    if (countryNameFromURL) {
      searchCountry(countryNameFromURL);
    }
    
  }, [countryNameFromURL])


  const searchCountry = async (name) =>{
    let data = await doApiGet(URL_API + (name || countryNameState));
    setCountry(data[0]);
  }

  const onClick = () => {
    if(countryNameState){
      history.push(`/country/${countryNameState}`)
    }

  }

  return (
   <div>
      <Header onClick={onClick} onChange={setName} />
      <div>
        {country ? <DisplayItem country={country}/> : null}
      </div>
    </div> 
  );
}

export default Country;