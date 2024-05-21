import { React } from "react";

const Search = ({ setSearchQuery, searchQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value.trim();
    setSearchQuery(searchValue);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="🔍 Search..."
      />
    </div>
  );
};

export default Search;
