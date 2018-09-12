import React, { Component } from 'react';
import {User} from './User';
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false,
            loaded: false,
            error: null
        }
    }
    /*API METHOD OVER PROMISE */
    getUsers = count => new Promise((resolve, reject) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => (request.status === 200) ?
            resolve(JSON.parse(request.response).results) :
            reject(Error(request.statusText))
        request.send()
    });
    componentWillMount() {
        this.setState({ loading: true })
        /*API METHOD OVER PROMISE */
        /*this.getUsers(10)
            .then(users => {
                this.setState({ users, loading: false })
            },
                error => {
                    this.setState({ error, loading: false })
                }
            )*/
            /*API METHOD OVER FETCH */
            fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(obj => obj.results)
            .then(users => this.setState({
                loaded: true,
                loading: false,
                users
                }))    
    }
    componentWillUpdate() {
       console.log('updating lifecycle')
    }
    render() {
        const { users, loading, error } = this.state
        return (
            <div className="user-list">
                {(loading) ?
                    <span>Loading Users</span> :
                    (users.length) ?
                    users.map((user, i) =>
                            <User key={i} {...user} />
                        ) :
                        <span>0 users loaded...</span>
                }
                {(error) ? <p>Error Loading Users: error</p> : ""}
            </div>
        );
    }
}

UserList.propTypes = {
    loading: PropTypes.string
}


export default UserList;