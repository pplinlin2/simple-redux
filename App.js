import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import reducer from './reducers';
import App from './components/app';
import Root from './components/root';
import Home from './components/home';

let middleware = applyMiddleware(promise(), logger())
let store = createStore(reducer, middleware);

ReactDOM.render (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" components={Root}>
                <IndexRoute components={Home}/>
                <Route path="/home" components={Home}/>
                <Route path="/counter" components={App}/>
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);