import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../Redux/slices/CountriesSlice';

function Countries() {
  const countryData = useSelector((store) => store.countries);
  const { loading, countries, error } = countryData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <h1>This is gonna be header</h1>
      <div
        className="countries"
        style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      >
        {countries.map((country) => (
          <Link key={country.name.common} to={`name/${country.name.common}`}>
            <div>
              <img src={country.flags.png} alt={country.flags.alt} />
              <p>{country.cca2}</p>
              <p className="country-name">{country.name.common}</p>
              <p className="country-population">
                {(country.population / 1000000).toFixed(1)}
                {' '}
                M
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Countries;
