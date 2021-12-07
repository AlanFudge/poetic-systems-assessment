import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hello from '../components/Hello';

import '../sass/main.scss';

export default function App() {
    return (
        <Router basename='/'>
            <Routes>
                <Route path='/' element={<Hello />} />
            </Routes>
        </Router>
    );
}