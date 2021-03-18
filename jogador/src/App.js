import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase';

import './global.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

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
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
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
