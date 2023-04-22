import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const Button = () => {
        return (<Link to='/search'><button className='start'>Get Started</button></Link>)
    };

    console.log(searchInput);
    return (
        <div>
            <br></br>
            <h1 className="expnew">Explore New places</h1>
            <Button />
        </div>
    )
};

export default SearchBar;