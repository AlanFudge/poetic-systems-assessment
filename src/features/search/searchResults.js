import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getSearchResults, selectSearchResults } from "./searchSlice";
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
    const search = useSelector(selectSearchResults);


    useEffect(() => {
        dispatch(getSearchResults({ location, term, sortBy }));
    }, [dispatch]);

    return (
        <>
            <div className="nav-back">
                <Link to='/'>
                    <p><span>{'<'}</span> Go Back To Home</p>
                </Link>
            </div>
            <div className="search-results">
                {
                    search.status === 'success'
                        ?
                        search.searchResults.businesses.map(result => <SearchItem key={result.id} {...result} />)
                        :
                        <p className="loading-animation">Loading...</p>
                }
            </div>
        </>
    )
}