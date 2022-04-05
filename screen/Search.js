import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchContent from '../screen/screenComponents/SearchContent';

export default class Search extends Component {
  // state = {
  //   image: null,
  // };
  // getData = data => {
  //   this.setState(this.state.image);
  // };

  // windowWidth = Dimensions.get('window').width;
  // windoeHeight = Dimensions.get('window').height;

  render() {
    return (
      <View style={styles.searchBox}>
        <View style={styles.searchBoxContainer}>
          <Ionicons
            name="search"
            style={{
              fontSize: 18,
              opacity: 0.7,
              position: 'absolute',
              zIndex: 1,
              left: 25,
            }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#909090"
            style={styles.input}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchContent />
        </ScrollView>
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
  searchBox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  searchBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },
  input: {
    width: '94%',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
});
