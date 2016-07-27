import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import reducer from './reducers';
import App from './components/app';
import Root from './components/root';
import Home from './components/home';

let store = createStore(reducer);

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