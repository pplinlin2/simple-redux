import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { fetchuser } from '../actions';

@connect((store) => ({users: store.users}))
export default class App extends Component {
    render() {
        const { users, dispatch } = this.props;

        if (!users.fetched) {
            return <Button onClick={() => dispatch(fetchuser())}>Load users</Button>
        }

        const mappedUsers = users.users.map(user => <li key={user.id}>{user.name}</li>)
        return (
            <div>
                <Button onClick={() => dispatch(fetchuser())}>Load users</Button>
                <ul>{mappedUsers}</ul>
            </div>
        )
    };
}