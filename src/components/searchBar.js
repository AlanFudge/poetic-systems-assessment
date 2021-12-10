import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ initialLocation, initialTerm, initialSortBy }) {
    const navigate = useNavigate();
    const [term, setTerm] = useState(initialTerm ? initialTerm : '');
    const [location, setLocation] = useState(initialLocation ? initialLocation : '');
    const [sortBy, setSortBy] = useState(initialSortBy ? initialSortBy : 'distance');

    const handleChange = (e) => {
        e.preventDefault();
        const elementName = e.target.getAttribute('name');
        switch (elementName) {
            case 'term':
                setTerm(e.target.value);
                break;
            case 'location':
                setLocation(e.target.value);
                break;
            case 'sortBy':
                setSortBy(e.target.value);
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location === '') window.alert('A zip code or location must be provided');
        let queryString = `?location=${location}&sortBy=${sortBy}`;
        if (term) queryString += `&term=${term}`;
        
        navigate(`./search${queryString}`);
    }

    return (
        <form className='search-container' onSubmit={handleSubmit}>
            <input name='term' type='text' placeholder='Search Term...' value={term} onChange={handleChange} />
            <input name='location' type='text' placeholder='Location' value={location} onChange={handleChange} required />
            <select name='sortBy' value={sortBy} onChange={handleChange}>
                <option value='distance'>Distance</option>
                <option value='best_match'>Best Match</option>
                <option value='rating'>Rating</option>
            </select>
            <button type='submit'>Search</button>
        </form>
    )
}