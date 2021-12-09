import { configureStore } from '@reduxjs/toolkit';
import business from '../features/business/businessSlice';

export default configureStore({
    reducer: {
        business
    }
});