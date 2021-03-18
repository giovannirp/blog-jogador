import React, { Component } from "react";
import firebase from '../../firebase';

class Home extends Component {
  state = {
    posts : []
  };

  componentDidMount() {
    firebase.app.ref('posts').once('value', (snapshot)=> {
      let state = this.state;
      state.posts = [];

      snapshot.forEach((childItem) => {
        state.posts.push({
          key: childItem.key,
          titulo: childItem.val().titulo,
          image: childItem.val().imagem,
          descricao: childItem.val().descricao,
          autor: childItem.val().autor
        });
      });
      this.setState(state);

    })
  }

  render() {
    console.log('consolando', this.state.post)
    return (
      <section>
        {this.state.posts.map((post) => {
          console.log('consolando', post.titulo)
          return (
            <article key={post.key}>
              <header>
                <div>
                  <strong>{post.titulo}</strong>
                  <spna>{post.autor}</spna>
                </div>
              </header>
              <img src={post.image} alt="Foto principal" />
              <footer>
                <p>{post.descricao}</p>
              </footer>
            </article>
          )
        })}
      </section>
    );
  }
}

export default Home;
