import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBusiness = createAsyncThunk('business/getBusiness', async (businessId) => {
    return fetch(`https://assorted-cultured-hearing.glitch.me/businesses/${businessId}`).then(res => res.json());
}
);

const initialState = {
    business: {},
    status: null
};

const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        resetBusiness(state, action) {
            return initialState;
        }
    },
    extraReducers: {
        [getBusiness.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getBusiness.fulfilled]: (state, action) => {
            state.business = { ...action.payload };
            state.status = 'success';
        },
        [getBusiness.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

export const selectBusiness = (state) => state.business;
export const { resetBusiness } = businessSlice.actions;
export default businessSlice.reducer;