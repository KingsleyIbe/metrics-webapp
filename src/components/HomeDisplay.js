import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { getData } from '../redux/home/home';

const HomeDisplay = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const covidLists = useSelector((state) => state.covidReducer);

  useEffect(() => {
    if (!covidLists.length) {
      dispatch(getData());
    }
  }, []);
  const filteredData = covidLists.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  const covidCases = filteredData.map((country) => (
    <div className="country-container" id="country-name" key={Math.random()}>
      <div className="country-c">
        <Link className="country-d" to={`/${country.CountryCode}`}>
          {country.Country}
        </Link>
      </div>
      <div className="latest-cases">
        Total Confirmed Cases:&nbsp;
        {country.TotalConfirmed}
      </div>
    </div>
  ));

  return (
    <>
      <div className="countries-con">
        <div className="country-name" />
        <div className="search-input-icon">
          <FaSearch className="search-icon" />
          <input
            className="search"
            type="text"
            id="input-country"
            placeholder="Search country..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {covidCases}
      </div>
    </>

  );
};

export default HomeDisplay;
