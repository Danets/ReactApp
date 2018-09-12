import React, { Component } from 'react';

class Card extends Component {
    onSend() {

    }
  render() {
    return (
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.forma === true ? 'LIST OPENED' : 'LIST CLOSED' }</h5>
          <p className="card-text">It is card {Math.floor(Math.random() * 10)} number</p>
          <button onClick={this.props.click} className="btn">{this.props.forma === true ? 'CLOSE' : 'OPEN' }</button>
        </div>
        </div>
    );
  }
}

export default Card;