import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountry } from '../Redux/slices/CountrySlice';

function Country() {
  const { loading, country, error } = useSelector((state) => state.country);
  const { name } = useParams();
  console.log(country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry(name));
    console.log(name);
  }, [dispatch, name]);

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
      <h1>Country Details</h1>
      {country && (
        <div key={country.ccn3}>
          <h2>Hello</h2>
        </div>
      )}
    </div>
  );
}

export default Country;
