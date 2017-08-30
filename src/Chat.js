import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style/App.css';
import base from './base'
import Chatview from './Chatview'

class Chat extends Component {

  constructor() {
    super();
    this.addToChat = this.addToChat.bind(this);
    this.resetChat = this.resetChat.bind(this);

    this.state = {
      messages: []
    }
  }

  componentWillMount(){
    const url = this.props.match.params.id
    this.ref = base.syncState(url, {
      context: this,
      state: 'messages',
      asArray: true
    })

  }

  addToChat(){
    const input = document.getElementById('chatbox')
    var stateArray = this.state.messages.slice()
    stateArray.push(input.value)
    this.setState({ messages: stateArray })
    input.value = ""
  }

  resetChat(){
    const url = this.props.match.params.id
    base.remove(url, function(err){
      if(!err){
        console.log("Removed db")
      }
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <p>Anon Chat</p>
        <Chatview messages={this.state.messages}/>
        <input id="chatbox" type="text"></input>
        <button onClick={this.addToChat}>Send</button>
        <button onClick={this.resetChat}>Reset</button>
      </div>
    );
  }
}

export default Chat;
