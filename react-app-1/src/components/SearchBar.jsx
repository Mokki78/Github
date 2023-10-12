import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";


const SEARCH_URI = 'https://api.noroff.dev/api/v1/online-shop/';


export const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`${SEARCH_URI}?q=${query}1&per_page=50`)
      .then((resp) => resp.json())
      .then(({ items }) => {
        setOptions(items);
        setIsLoading(false);
      });
  };


  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="login"
      minLength={3}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a product..."
      renderMenuItemChildren={(option) => (
        <>
          <img
            alt={option.login}
            src={option.avatar_url}
            style={{
              height: '24px',
              marginRight: '10px',
              width: '24px',
            }}
          />
          <span>{option.login}</span>
        </>
      )}
    />
  );
};

export default Search;