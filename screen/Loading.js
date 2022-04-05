import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from 'firebase/app';

export default class Loading extends Component {
  // componentDidMount() {
  //   auth().onAuthStateChanged(user => {
  //     this.props.navigation.navigate(user ? 'App' : 'Auth');
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    jusifyContent: 'center',
    alignItems: 'center',
  },
});
