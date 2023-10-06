import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Resume} />
                <Route exact path="/contact" component={Contact} />

            </Routes>
        </Router>
    );
};

export default App;
