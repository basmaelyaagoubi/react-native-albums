// import libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Card, CardSection, Button } from './components/common/Index';
import LoginForm from './components/LoginForm';
import AlbumList from './components/common/AlbumList';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyBvSIaU4EutsZ_bki1PUXs-KH4TraB0EIw',
                authDomain: 'albums-xbxvxe.firebaseapp.com',
                databaseURL: 'https://albums-xbxvxe.firebaseio.com',
                projectId: 'albums-xbxvxe',
                storageBucket: 'albums-xbxvxe.appspot.com',
                messagingSenderId: '859893754264'
            });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <View > 
              <Card>
              <CardSection>
                  <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                  </Button>
                </CardSection>
                <CardSection>
                  <AlbumList />
                </CardSection>
              </Card>
            </View>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }  
  
    render() {
      return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
      );
    }
}  
// make the component available to other parts of the app
export default App;
