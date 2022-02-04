import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/home/home';

const DetailsDisplay = () => {
  const detailsList = useSelector((state) => state.covidReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  let Country;
  let slug;
  let newConfirmed;
  let totalConfirmed;
  let newDeaths;
  let totalDeaths;
  let newRecovered;
  let totalRecovered;
  let date;

  const fetchInfo = detailsList.map((countries) => {
    if (countries.CountryCode === window.location.pathname.slice(1)) {
      Country = countries.Country;
      date = countries.Date;
      slug = countries.Slug;
      newConfirmed = countries.NewConfirmed;
      totalConfirmed = countries.TotalConfirmed;
      newDeaths = countries.NewDeaths;
      totalDeaths = countries.TotalDeaths;
      newRecovered = countries.NewConfirmed;
      totalRecovered = countries.TotalRecovered;
      totalConfirmed = countries.TotalConfirmed;
    }
    return 'Data not found';
  });

  return (
    { fetchInfo },
      <div className="main-c">
        <div className="details-country" />
        <div className="name">
          <h2>{Country}</h2>
        </div>
        <div>
          <span className="updated-data">
            <span className="title">Statistics</span>
          </span>
          <div className="data">
            <span>Updated at:</span>
            <span>{date}</span>
          </div>
          <div className="data">
            <span>Confirmed New Cases:</span>
            <span>{newConfirmed}</span>
          </div>
          <div>
            <span className="title">Latest Data</span>
            <div className="data">
              <span>Total Confirmed:</span>
              <span>{totalConfirmed}</span>
            </div>
            <div className="data">
              <span>New Deaths:</span>
              <span>{newDeaths}</span>
            </div>
            <div className="data">
              <span>Slug:</span>
              <span>{slug}</span>
            </div>
          </div>
          <div>
            <span className="title">Recovered</span>
            <div className="data">
              <span>New Recovered:</span>
              <span>{newRecovered}</span>
            </div>
            <div className="data">
              <span>Total Recovered:</span>
              <span>{totalRecovered}</span>
            </div>
            <div className="data">
              <span>Total Deaths:</span>
              <span>{totalDeaths}</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DetailsDisplay;
