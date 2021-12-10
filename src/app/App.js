import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHome from '../components/appHome';
import BusinessDetails from '../features/business/businessDetails';
import SearchResults from '../features/search/searchResults';

import '../sass/main.scss';

export default function App() {
    return (
        <Router basename='/'>
            <Routes>
                <Route path='/' element={<AppHome />} />
                <Route path='/search' element={<SearchResults />} />
                <Route path='/business/:businessId' element={<BusinessDetails />} />
            </Routes>
        </Router>
    );
}