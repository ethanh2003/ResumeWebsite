import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './Resume.js';
import Contact from './Contact.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Resume />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;





