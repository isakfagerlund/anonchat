import React, { Component } from 'react';

class Chatview extends Component {

  render() {
    return (
      <div className="App">
        {this.props.messages.map(function(mes, id) {
           return <p key={id}>{mes}</p>;
        })}
      </div>
    );
  }
}

export default Chatview;
