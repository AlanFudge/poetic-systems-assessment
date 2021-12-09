import { configureStore } from '@reduxjs/toolkit';
import business from '../features/business/businessSlice';
import search from '../features/search/searchSlice';

export default configureStore({
    reducer: {
        business,
        search
    }
});