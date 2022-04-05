/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native';
var {height, width} = Dimensions.get('window');
import {Dropdown } from 'react-native-dropdown-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

var images = [
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
    require('../../image/flowershop.jpg'),
];



export default class Profile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activeIndex: 0,
      };
    }
  
    segmentClicked(index) {
      this.setState({
        activeIndex: index,
      });
    }
  
    renderSection() {
      if (this.state.activeIndex === 0) {
        return (
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.renderSectionOne()}
          </View>
        );
      } else if (this.state.activeIndex === 1) {
        return (
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.renderSectionTwo()}
          </View>
        );
      } else if (this.state.activeIndex === 2) {
        return (
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.renderSectionThree()}
          </View>
        );
      }
    }
    renderSectionOne() {
      return images.map((image, index) => {
        return (
          <View
            key={index}
            style={[
              {width: width / 3},
              {height: width / 3},
              {marginBottom: 2},
              index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
            ]}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
              }}
              source={image}></Image>
          </View>
        );
      });
    }
  
    renderSectionTwo() {
      return images.map((image, index) => {
        return (
          <View style={styles.productContainer} >
            <View 
              key={index}
              style={[
              {width: width / 2.2},
              {height: width / 2.2},
              {paddingTop: 15},
            ]}>
              <Image
                style={{
                  flex: 1,
                alignSelf: 'center',
                width: '80%',
                height: undefined,
                }}
                source={image}></Image>
              <Text style={styles.productText}>Product Name</Text>
            </View>
          </View>
        );
      });
    }

    renderSectionThree() {
      return images.map((image, index) => {
        return (
          <View style={styles.peopleContainer} >
            <View 
              key={index}
              style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={image}></Image>
                <Text style={styles.userText}>Username</Text>
            </View>
          </View>
        );
      });
    }
    close = () => {
      this.props.navigation.navigate('PostDetails');
    };
  
    render() {
      return (
        <View style={styles.container}>
        {/* <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.segmentClicked(0)}
              transparent
              active={this.state.activeIndex == 0}>
              <Ionicons
              name="search-circle"
              size={70}
              color="orange"
              style={{marginLeft: 70}}
            />
            </TouchableOpacity>
          </View> */}
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.segmentClicked(0)}
            transparent
            active={this.state.activeIndex === 0}>
            <Text style={styles.text}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.segmentClicked(1)}
            transparent
            active={this.state.activeIndex === 1}>
            <Text style={styles.text}>Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.segmentClicked(2)}
            transparent
            active={this.state.activeIndex === 2}>
            <Text style={styles.text}>People</Text>
          </TouchableOpacity>
        </View>

        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            {this.renderSection()}
          </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    profile: {
      marginTop: 64,
      alignItems: 'center',
    },
    avatarContainer: {
      shadowColor: '#151734',
      shadowRadius: 30,
      shadowOpacity: 0.4,
      marginLeft: 45,
      marginBottom: 20,
      marginTop:10,
    },
    avatar: {
      width: 136,
      height: 136,
      borderRadius: 68,
    },
    name: {
      marginTop: 24,
      fontSize: 16,
      fontWeight: '600',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      // marginLeft: 90,
      // marginRight: 70,
    },
    text: {
      borderWidth: 1,
      padding: 15,
      color: 'white',
      borderColor: 'orange',
      backgroundColor: 'orange',
      fontWeight: 'bold',
      fontSize: 15,
      textTransform: 'uppercase',
      borderRadius: 20,
    },
    productContainer: {
      // backgroundColor: 'orange',
      borderWidth:1,
      borderRadius: 10,
      marginLeft: 11,
      marginBottom: 15,
    },
    productText: {
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: 'bold',
      fontSize: 15,
      textTransform: 'uppercase',
      borderRadius: 20,
      textAlign: 'center',
    },
    userText: {
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: 'bold',
      fontSize: 15,
      textTransform: 'uppercase',
      borderRadius: 20,
      textAlign: 'center',
    }
  });
  