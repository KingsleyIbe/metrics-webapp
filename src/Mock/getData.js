import countries from './countryDummyData';

const fetchedData = () => countries().then((data) => data);

export default fetchedData;
