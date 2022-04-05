import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FilterTutorial extends Component {
  postDetails = () => {
    this.props.navigation.navigate('PostDetails');
  };
  goBack = () => {
    this.props.navigation.navigate('Tutorial');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Ionicons
              name="chevron-back"
              size={30}
              color="orange"
              style={{marginLeft: 30}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Filter Tutorial </Text>
        </View>
        <Text style={styles.category}>Age</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>1-6</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>7-12</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>13-18</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Above 19</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.breakLine} />
        <Text style={styles.category}>Experience on Clay Art</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Low</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>High</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.breakLine} />
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.text}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    // marginTop: 15,
    // marginLeft: 240,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    shadowOffset: {height: 5},
    shadowRadius: 50,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 90,
    marginTop: 5,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginLeft: 90,
    marginRight: 70,
  },
  button: {
    flexDirection: 'row',
    margin: 15,
    marginLeft: 150,
    marginRight: 70,
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
  category: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 15,
  },
  breakLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    shadowColor: '#454D65',
    marginTop: 10,
  },
});
