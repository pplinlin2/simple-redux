import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';

import { increase, decrease } from '../actions';

export default class App extends Component {
    render() {
        const { counter, dispatch } = this.props;
        console.log(this.props);

        // counter from the connect(select) and dispatch by default from connect
        return (
            <div>
                <h1>{counter}</h1>
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={ () => dispatch(increase())}>Increase</Button>
                    <Button bsStyle="danger" onClick={ () => dispatch(decrease())}>Decrease</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

const select = (state) => ({ counter: state })
export default connect(select)(App);