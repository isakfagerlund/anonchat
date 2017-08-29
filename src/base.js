// import Rebase from 're-base'
import Rebase from 're-base';
import firebase from 'firebase';

const fire = firebase.initializeApp({
  apiKey: "AIzaSyD4z_epCJjcNSecyV9vNJs8qmej_Us7Yz0",
  authDomain: "anon-chat-ce851.firebaseapp.com",
  databaseURL: "https://anon-chat-ce851.firebaseio.com",
});

const base = Rebase.createClass(fire.database());

export default base;
