import React, { Component } from 'react';
import './style/App.css';
import base from './base'
// import Message from './Message'

class App extends Component {

  constructor() {
    super();
    this.addToChat = this.addToChat.bind(this);
    this.resetChat = this.resetChat.bind(this);
    this.renderChat = this.renderChat.bind(this);

    this.state = {
      messages: {}
    }
  }

  componentWillMount(){
    this.ref = base.syncState("messages", {
      context: this,
      state: 'messages',
      asArray: true
    })

  }

  addToChat(){
    const input = document.getElementById('chatbox')
    const name = document.getElementById('namebox')
    // update our state
    const messages = {...this.state.messages};
    // add in our new message
    const timestamp = Date.now();
    messages[`message${timestamp}`] = {name:name.value,message:input.value};
    // set state
    this.setState({ messages });
    input.value = ""
  }

  resetChat(){
    this.setState({ messages: {name:"hej", test:"wow"} });
  }

  renderChat(key){
    const item = this.state.messages[key];
    return (
      <p key={key}>{item.name} – {item.message}</p>
    )
  }

  render() {
    return (
      <div className="App">
        <p>Anon Chat</p>
        <input id="namebox" type="text" placeholder="your name here"></input>
        {Object.keys(this.state.messages).map(this.renderChat)}
        <input id="chatbox" type="text"></input>
        <button onClick={this.addToChat}>Send</button>
        <button onClick={this.resetChat}>Reset</button>
      </div>
    );
  }
}

export default App;
