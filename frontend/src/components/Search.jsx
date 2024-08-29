import React from 'react';
import '../styles/Search.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const Search = ({setData,Data}) => {
    
    console.log(Data);
    const handleSearch = (e) => {
        const searchValue = e.target.value;

        if(searchValue === ''){
            setData(Data);
            return;
        }

        const filteredData = Data.filter((item) => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });

        setData(filteredData);
    }

  return (
    // <div className="search-container">
    //     <input type="text" placeholder="Search" onChange={handleSearch} className="search-input" />
    // </div>
    <div class="search-container" onChange={handleSearch}>
    <input type="text" class="search-input" placeholder="Search" />
    <button class="search-button">
        <FaLongArrowAltRight />
        {/* <img src="search-icon.png" alt="Search" /> */}
    </button>
</div>
  );
}

export default Search;
