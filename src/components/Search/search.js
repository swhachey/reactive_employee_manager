import React from 'react'

function SearchCity(props) {
    return (
        <form>
      <div className="form-group">
        <label htmlFor="search">How Many Results?:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="How many employees?"
          id="search"
        />
        
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
    )
}

export default SearchCity
