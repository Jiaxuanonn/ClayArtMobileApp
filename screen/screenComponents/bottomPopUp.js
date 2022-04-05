import React, {Component} from 'react';
import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class bottomPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {};

  render() {
    return (
      <Modal
        animationTypes={'fade'}
        transparent={true}
        visible={true}
        onRequestClose={this.close}></Modal>
    );
  }
}
