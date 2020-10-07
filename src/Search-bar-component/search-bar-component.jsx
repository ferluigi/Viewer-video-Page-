import React from 'react';
import './search-styles.scss';

const SearchBar = () =>{

    function handleSearchBox(e){
        e.stopPropagation();
        e.preventDefault();

        OnBlur(e)
    } 

    function OnBlur (e){
        e.target.blur()
    }

    return (
        <div className="search-box">
      <label className="input-container closed " onBlur={OnBlur}>
        <div className="shadow"></div>
        <div className="center">
          <input type="text" className="input" placeholder="Search" />
        </div>
        <div className="sticks" OnClick={handleSearchBox}></div>
      </label>
      </div>
    );
}

export default SearchBar;