import React from "react";

const SearchBar = ({onChange, onSubmit}) => {
    return (
        <div className="input-form" style={{ marginTop: "1vh", textAlign: "center" }}>
          <div style={{ paddingRight: "1px" }}>
            <label style={{ paddingRight: "10px" }}>Enter a city: </label>
            <input
              placeholder="Try Los Angeles"
              onChange={onChange}
              id="zip"
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  onSubmit(event)
                }
              }}
            />
          </div>
          <br></br>
          <button
            className="btn btn-primary"
            onClick={(e) => onSubmit(e)}
          >
            Search by city
          </button>
        </div>
      );
    };

export default SearchBar;