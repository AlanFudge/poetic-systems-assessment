import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import AppHome from '../components/appHome';
import BusinessDetails from '../features/business/businessDetails';
import SearchResults from '../features/search/searchResults';
import ReviewForm from './../components/reviewForm';

import '../sass/main.scss';

export default function App() {
    return (
        <HashRouter basename='/poetic-systems-assessment'>
            <Routes>
                <Route path='/' element={<AppHome />} />
                <Route path='/search' element={<SearchResults />} />
                <Route path='/business/:businessId' element={<BusinessDetails />} />
                <Route path='/business/:businessId/review' element={<ReviewForm />} />
            </Routes>
        </HashRouter>
    );
}