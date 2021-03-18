import React, { Component } from "react";
import firebase from '../../firebase';
import "./home.css";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    firebase.app.ref('posts').once('value', (snapshot) => {
      let state = this.state;
      state.posts = [];

      snapshot.forEach((childItem) => {
        state.posts.push({
          key: childItem.key,
          titulo: childItem.val().titulo,
          image: childItem.val().image,
          descricao: childItem.val().descricao,
          autor: childItem.val().autor
        });
      });
      this.setState(state);

    })
  }

  render() {
    return (
      <section id="post">
        {this.state.posts.map((post) => {
          return (
            <article key={post.key}>
              <img src={post.image} alt={post.titulo} />
              <footer>
                <div className="title">
                  <strong>{post.titulo}</strong>
                </div>
                <p>{post.descricao}</p>
                <strong className='autor'>Autor: </strong><span>{post.autor}</span>
              </footer>
            </article>
          )
        })}
      </section>
    );
  }
}

export default Home;
