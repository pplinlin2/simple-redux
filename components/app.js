import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../actions';

export default class App extends Component {
    render() {
        const { counter, dispatch } = this.props;
        console.log(this.props);

        // counter from the connect(select) and dispatch by default from connect
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={ () => dispatch(increase())}>Increase</button>
                <button onClick={ () => dispatch(decrease())}>Decrease</button>
            </div>
        );
    }
}

const select = (state) => {
    return {
        counter: state
    }
}

export default connect(select)(App);