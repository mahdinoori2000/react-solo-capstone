import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
    <div>
      <button type="button" onClick={() => back(-1)}>Back</button>
      <h1>singleCountry Details</h1>
      {singleCountry && (
        <div key={singleCountry.ccn3}>
          <img src={singleCountry.flags?.png} alt={singleCountry.name?.common} />
          <h1>{singleCountry.name?.official}</h1>
          <ul>
            <li>
              Region:
              {' '}
              {singleCountry.region}

            </li>
            <li>
              Subregion:
              {' '}
              {singleCountry.subregion}
            </li>
            <li>
              Area:
              {' '}
              {singleCountry.area}
              {' '}
              sq km
            </li>
            <li>
              Capital:
              {' '}
              {singleCountry.capital}
            </li>
            <li>
              Time Zone:
              {' '}
              {singleCountry.timezones && singleCountry.timezones.length > 0 ? singleCountry.timezones[0] : 'No time zone available'}
            </li>
            <li>
              Language:
              {' '}
              {singleCountry.languages && Object.values(singleCountry.languages).join(', ')}
            </li>

            <li>
              Start of Week day:
              {' '}
              {singleCountry.startOfWeek}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Country;
