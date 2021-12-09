import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk('search/getSearchResults', async ({ location, term, sortBy }) => {
    if (location === null) location = '76208'
    if (sortBy === null) sortBy = 'distance';
    let queryURL = `https://assorted-cultured-hearing.glitch.me/search?sort_by=${sortBy}`;
    if (location) queryURL += `&location=${location}`;
    if (term) queryURL += `&location=${term}`;

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

export default searchSlice.reducer;