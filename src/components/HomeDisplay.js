import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../redux/home/home';

const HomeDisplay = () => {
  const dispatch = useDispatch();
  const covidLists = useSelector((state) => state.covidReducer);

  useEffect(() => {
    if (!covidLists.length) {
      dispatch(getData());
    }
  }, []);

  const covidCases = covidLists.map((cases) => (
    <div className="country-name" id="country-name" key={cases.code}>
      <div className="country-c">
        <Link className="country-d" to={`/${cases.code}`}>
          {cases.name}
        </Link>
      </div>
      <div className="latest-cases">
        Recovered:&nbsp;
        {cases.latest_data.recovered}
      </div>
    </div>
  ));

  return (
    <>
      <div className="country-name">Active Corona Cases </div>
      <input className="search" type="text" id="input-country" placeholder="Country name.." />
      <div className="countries-con">
        {covidCases}
      </div>
    </>

  );
};

export default HomeDisplay;
