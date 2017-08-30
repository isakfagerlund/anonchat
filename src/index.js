import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Chat from './Chat'
import App from './App'

class Root extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={App}/>
          <Route path="/:id" component={Chat}/>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
