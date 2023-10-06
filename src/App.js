import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Resume} />
                <Route exact path="/contact" component={Contact} />

            </Switch>
        </Router>
    );
};

export default App;
