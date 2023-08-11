import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountry } from '../Redux/slices/CountrySlice';

function Country() {
  const { loading, country, error } = useSelector((state) => state.country);
  const [singleCountry, setSingleCountry] = useState([]);
  const { countryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(countryName));
  }, [dispatch, countryName]);

  useEffect(() => {
    if (!loading && country) {
      setSingleCountry(country[0]);
    }
  }, [country, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  return (
    <div>
      <h1>singleCountry Details</h1>
      {singleCountry && (
        <div key={singleCountry.ccn3}>
          <img src={singleCountry.flags?.png} alt={singleCountry.name?.common} />
          <h1>{singleCountry.name?.common}</h1>
          <p>
            Capital:
            {' '}
            {singleCountry.capital}
          </p>
          <p>
            Region:
            {' '}
            {country.region}
          </p>
        </div>
      )}
    </div>
  );
}

export default Country;
