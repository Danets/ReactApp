import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item" onClick={this.props.click}>{this.props.name}</li>
            </ul>
        );
    }
}

export default Person;