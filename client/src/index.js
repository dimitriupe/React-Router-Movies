import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { Router } from 'express';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
