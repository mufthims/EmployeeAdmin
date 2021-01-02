import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from "react-redux";
import store from './redux-store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);