import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../Redux/slices/CountriesSlice';
import Header from './HeaderSection';

function Countries() {
  const countryData = useSelector((store) => store.countries);
  const { loading, countries, error } = countryData;
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
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
      <Header />
      <input type="text" className="search-bar" onChange={(e) => setSearch(e.target.value)} />
      <div
        className="countries"
        style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      >
        {countries.filter((country) => (search.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(search))).map((country) => (
          <Link key={country.name.common} to={`name/${country.name.common}`}>
            <div>
              <img src={country.flags.png} alt={country.flags.alt} />
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
