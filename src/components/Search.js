import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const searchCountry = () => {
    let inputText = '';
    const userInput = document.querySelector('#input-country');
    const filterCountry = userInput.value.toUpperCase();
    const countryDetails = document.querySelector('.country-name');
    [...countryDetails].forEach((country) => {
      const temp = country;
      inputText = temp.textContent || temp.innerText;
      if (inputText.toUpperCase().indexOf(filterCountry) > -1) {
        temp.style.display = '';
      } else {
        temp.style.display = 'none';
      }
    });
  };

  return (
    <>
      <div className="country-name" />
      <div className="search-input-icon">
        <FaSearch className="search-icon" />
        <input
          className="search"
          type="text"
          id="input-country"
          placeholder="Search country..."
          onKeyDown={searchCountry}
        />
      </div>
    </>

  );
};

export default Search;
