import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AppHome from '../components/appHome';
import BusinessDetails from '../features/business/businessDetails';
import SearchResults from '../features/search/searchResults';
import ReviewForm from './../components/reviewForm';

import '../sass/main.scss';

export default function App() {
    return (
        <Router basename='/'>
            <Routes>
                <Route path='/' element={<AppHome />} />
                <Route path='/search' element={<SearchResults />} />
                <Route path='/business/:businessId' element={<BusinessDetails />} />
                <Route path='/business/:businessId/review' element={<ReviewForm />} />
            </Routes>
        </Router>
    );
}