import { useEffect, useState, useRef } from 'react';
import ImageTag from './ImageTag';

function CountryCodeDropdown({ onCountryCodeSelect }) {
  const currentCountry = {
    countryName: "United Arab Emirates",
    countryCode: "AE",
    callingCode: "+971",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
  };
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(currentCountry);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  const showDropdownHandler = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const selectCountry = (option) => {
    setSelectedCountry(option);
    onCountryCodeSelect(option ? option : currentCountry); // Pass calling code to parent
    setShowDropdown(false);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countries.filter(option =>
    option.countryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    fetch('/countries.json')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="input-block" ref={dropdownRef}>
      <label htmlFor="email">Country <span className='text-danger'>*</span></label>
      <div className="country-dropdown__selected" onClick={showDropdownHandler}>
        <span className="flag">
          <ImageTag src={selectedCountry.flag} width={"35px"} />
        </span>
        <span className="countryName">
          {selectedCountry.countryName}
          <strong> ({selectedCountry.callingCode})</strong>
        </span>
      </div>
      {showDropdown && (
        <div className="country-dropdown">
          <div className="search-dropdown">
            <i className="fa-solid fa-search"></i>
            <input type="text" placeholder='Enter Country Name' onChange={handleChange} />
          </div>
          <ul className="country-dropdown-list">
            {filteredCountries.map((option, index) => (
              <li
                className='country-dropdown-list__item'
                onClick={() => selectCountry(option)} // Use arrow function to pass option
                key={index}
              >
                <ImageTag src={option.flag} width={"30px"} />
                <span>{option.countryName} <strong>{option.countryCode}</strong></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CountryCodeDropdown;
