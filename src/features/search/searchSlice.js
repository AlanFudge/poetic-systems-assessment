import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk('search/getSearchResults', async ({ location, term, sortBy }) => {
    if (location === null) location = '76208'
    if (sortBy === null) sortBy = 'distance';
    let queryURL = `https://assorted-cultured-hearing.glitch.me/search?sortBy=${sortBy}`;
    if (location) queryURL += `&location=${encodeURIComponent(location)}`;
    if (term) queryURL += `&term=${encodeURIComponent(term)}`;

    return fetch(queryURL).then(res => res.json());
}
);

const initialState = {
    searchResults: {},
    status: null
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [getSearchResults.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getSearchResults.fulfilled]: (state, action) => {
            state.searchResults = { ...action.payload };
            state.status = 'success';
        },
        [getSearchResults.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

export const selectSearchResults = (state) => state.search;
export default searchSlice.reducer;