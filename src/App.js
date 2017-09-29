import React, { Component } from 'react';
import './style/App.css';

class App extends Component {

  constructor() {
    super();
    this.joinRoom = this.joinRoom.bind(this);

  }

  joinRoom(){
    const joinInput = document.getElementById('joinbox')
    const inputValue = joinInput.value.toLowerCase();
    this.props.history.push(inputValue)
  }

  render() {
    return (
      <div className="App-wrap">
        {/* <Link to={room} id="createRoom">Create random room</Link> */}
        <div className="picker">
          <div className="picker-input">
            <input id="joinbox" type="text" placeholder="Room name here"></input>
          </div>
          <div className="picker-btn">
            <button className="btn" onClick={this.joinRoom}>Join</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
