import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './Resume.js';


const App = () => {
    document.title = "Ethan Herring";
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Resume />} />

            </Routes>
        </Router>
    );
};

export default App;





