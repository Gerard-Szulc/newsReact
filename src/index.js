import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupFirebase from './setupFirebase';
import { UserProvider } from './contexts/Users';

setupFirebase()

ReactDOM.render(

    <UserProvider>
    <App />
    </UserProvider>

    
    , document.getElementById('root'));
registerServiceWorker();

