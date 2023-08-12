/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { fetchCountries } from '../Redux/slices/CountriesSlice';
import Header from './HeaderSection';
import './Countries.css';

function Countries() {
  const countryData = useSelector((store) => store.countries);
  const { loading, countries, error } = countryData;
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  if (loading) {
    return (
      <>
        <Header />
        <div className="loading">Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <p>
          Error:
          {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="search">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="Search Country Name" className="search-bar" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div
        className="countries"
        style={{
          cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%',
        }}
      >
        {countries.filter((country) => (search.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(search))).map((country) => (
          <Link key={country.name.common} to={`name/${country.name.common}`} className="Link">
            <div className="country">
              <img className="country-flag" src={country.flags.png} alt={country.flags.alt} />
              <div className="flex-end">
                <p className="country-name">{(`${country.name.common}`).slice(0, 18)}</p>
                <p className="country-population">
                  {(country.population / 1000000).toFixed(1)}
                  {' '}
                  M
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Countries;
