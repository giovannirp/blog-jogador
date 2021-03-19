import React, { Component } from 'react';
import "./header.css";
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header id="main-header">
        <div className="header-content">
          <Link to="/">
            Blog do Jogador
        </Link>
          {!firebase.getCurrent() ? (
          <div>
            <Link to="/login">
              Entrar
            </Link>
          </div>
           ) 
           :
            (
              <div></div>
            )
          }
        </div>
      </header>
    );
  }
}

export default Header;