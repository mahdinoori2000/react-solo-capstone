import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Country.css';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { fetchCountry } from '../Redux/slices/CountrySlice';

function Country() {
  const { loading, country, error } = useSelector((state) => state.country);
  const [singleCountry, setSingleCountry] = useState([]);
  const { countryName } = useParams();
  const back = useNavigate();
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
    <div className="details__container">
      {singleCountry && (
        <>
          <div className="details-single-country">
            <button aria-label="Button with Icon" type="button" onClick={() => back(-1)} className="back-btn">&lt;&nbsp;Back</button>
            <h1 className="details__title">{singleCountry.name?.common}</h1>
            <div>
              <FaMicrophone style={{ fill: '#fff', fontSize: '18px', marginRight: '10px' }} />
              <AiFillSetting style={{ fill: '#fff', fontSize: '18px' }} />
            </div>
          </div>
          <div key={singleCountry.ccn3} className="single__container">
            <img src={singleCountry.flags?.png} alt={singleCountry.name?.common} />
            <ul className="country-list">
              <li>
                <span>official Name:</span>
                {' '}
                <span>{singleCountry.name?.official}</span>
              </li>
              <li>
                <span>Region:</span>
                {' '}
                <span>{singleCountry.region}</span>
              </li>
              <li>
                <span>Subregion:</span>
                {' '}
                <span>{singleCountry.subregion}</span>
              </li>
              <li>
                <span>Area:</span>
                {' '}
                <span>
                  {singleCountry.area}
                  {' '}
                  sq km
                </span>
              </li>
              <li>
                <span>Capital: </span>
                {' '}
                <span>{singleCountry.capital}</span>
              </li>
              <li>
                <span>Time Zone:</span>
                {' '}
                <span>{singleCountry.timezones && singleCountry.timezones.length > 0 ? singleCountry.timezones[0] : 'No time zone available'}</span>
              </li>
              <li>
                <span>Language:</span>
                {' '}
                <span>{singleCountry.languages && Object.values(singleCountry.languages).join(', ')}</span>
              </li>
              <li>
                <span>Start of Week day:</span>
                {' '}
                <span>{singleCountry.startOfWeek}</span>
              </li>
            </ul>
          </div>

        </>
      )}
    </div>
  );
}

export default Country;
