import React from 'react';
import { Image, Text, View } from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
var configs = {
    apiKey: "AIzaSyCJbqmIbNsDdoG9CGPatdlB12NKqSQ-K4o",
    authDomain: "sales-assitant-b807d.firebaseapp.com",
    databaseURL: "https://sales-assitant-b807d.firebaseio.com",
    projectId: "sales-assitant-b807d",
    storageBucket: "sales-assitant-b807d.appspot.com",
};
firebase.initializeApp(configs);




// Components and screens 
// - contents outside the scope of this tutorial
import Loading from './Loading';
import Gotoset from './Gotoset';
import Navigatemain from './Navigatemain';
import Todash from './Todash';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null 
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    // The application is initialising
    if (this.state.loading) return <Loading />;

    // The user exists, so they're logged in
    if (this.state.user) return <Todash />;

    // The user is null, so they're logged out
    return <Navigatemain />;
  }
}