import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ButtonToolbar, Button } from 'react-bootstrap'

import { increase, decrease } from '../actions'

@connect(
    (store) => ({ counter: store.counter }), 
    (dispatch) => (bindActionCreators({increase, decrease}, dispatch)), 
)
export default class App extends Component {
    render() {
        const { counter } = this.props

        // counter from the connect(select) and dispatch by default from connect
        return (
            <div>
                <h1>{counter}</h1>
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={ () => this.props.increase() }>Increase</Button>
                    <Button bsStyle="danger" onClick={ () => this.props.decrease() }>Decrease</Button>
                </ButtonToolbar>
            </div>
        )
    }
}