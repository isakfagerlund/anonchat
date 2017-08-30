import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style/App.css';

class App extends Component {

  constructor() {
    super();
    this.joinRoom = this.joinRoom.bind(this);

  }

  joinRoom(){
    const joinInput = document.getElementById('joinbox')
    this.props.history.push(joinInput.value)
  }

  render() {
    const time = Date.now();
    const room = "/room" + time;
    return (
      <div className="App">
        <h1>Anon Chat</h1>
        <Link to={room} id="createRoom">Create random room</Link>
        <div>
          <input id="joinbox" type="text" placeholder="Room name here"></input>
          <button className="btn" onClick={this.joinRoom}>Join</button>
        </div>
      </div>
    );
  }
}

export default App;
