import app from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyAaZvJgInMztZ8hCqsAGbkbVvvYhuXEnD8",
  authDomain: "reactapp-54bce.firebaseapp.com",
  databaseURL: "https://reactapp-54bce-default-rtdb.firebaseio.com",
  projectId: "reactapp-54bce",
  storageBucket: "reactapp-54bce.appspot.com",
  messagingSenderId: "737228880602",
  appId: "1:737228880602:web:0bcae21008e4578ecb03e3",
  measurementId: "G-8MV4EQFGV6",
};
// Initialize Firebase

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.app = app.database();

    this.getCarregando = this.getCarregando.bind(this);
    
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  async register(nome, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: nome
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve)
    })
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email;
  }

  getCarregando() {
    window.location.reload();
  }

  // getCurrentSpecifc() {
  //   return app.auth().currentUser && app.auth().currentUser.email;
  // }

  logout() {
    return app.auth().signOut();
  }
  
}

export default new Firebase();
