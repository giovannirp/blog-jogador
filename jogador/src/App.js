import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase';

import Header from './components/Header';
import Home from './components/Home';
import './global.css';

class App extends Component {

  state = {
    firebaseInitialized: true
  }

  componentDidMount() {
    firebase.isInitialized().then(resultado => {
      this.setState({firebaseInitialized: resultado})
    })
  }

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
    :
    (
      <h1>Carregando...</h1>
    )
  }
}

export default App;
