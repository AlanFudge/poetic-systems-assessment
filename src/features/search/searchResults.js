import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchResults } from "./searchSlice";
import SearchBar from './../../components/searchBar';
import SearchItem from "../../components/searchItem";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
    const query = useQuery();
    const location = query.get('location');
    const term = query.get('term');
    const sortBy = query.get('sortBy');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchResults({ location, term, sortBy }));
    }, [dispatch]);

    return (
        <>
            <SearchBar { ...{ location, term, sortBy }} />
            <h1>Search Results</h1>
            <p>this is the search results component that at the top will render a SearchBar</p>
            <p>Below is the list of query params</p>
            <ul>
                <li>location: {location}</li>
                <li>term: {term}</li>
                <li>sortBy: {sortBy}</li>
            </ul>
            <p>This component will render a list of searchItems</p>
            <SearchItem />
        </>
    )
}