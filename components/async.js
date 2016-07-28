import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { fetchuser } from '../actions'

@connect(
    (store) => ({users: store.users}), 
    (dispatch) => (bindActionCreators({fetchuser}, dispatch)), 
)
export default class App extends Component {
    render() {
        const { users } = this.props

        if (!users.fetched) {
            return <Button onClick={ () => this.props.fetchuser() }>Load users</Button>
        }

        const mappedUsers = users.users.map(user => <li key={user.id}>{user.name}</li>)
        return (
            <div>
                <Button onClick={ () => this.props.fetchuser() }>Load users</Button>
                <ul>{mappedUsers}</ul>
            </div>
        )
    }
}