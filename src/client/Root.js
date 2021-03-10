import React, {memo} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../shared/App';

const Root = memo(() => {
    return (
        <Router>
            <App/>
        </Router>
    )
});

export default Root;