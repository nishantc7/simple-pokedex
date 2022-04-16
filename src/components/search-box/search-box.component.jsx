import React from 'react';
import './search-box.styles.css'


export const SearchBox = ({ placeholder,handleChange }) => (
    <div class="active-cyan-4 mb-4 mx-auto w-50">
  <input className="form-control search  " type="text"  aria-label="Search"
    placeholder={placeholder}
    onChange={handleChange} />
    </div>
)