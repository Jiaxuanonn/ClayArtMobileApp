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

var images = [
  require('../image/orangeflower.jpg'),
  require('../image/flowershop.jpg'),
  require('../image/orangeflower.jpg'),
  require('../image/flowershop.jpg'),
  require('../image/orangeflower.jpg'),
  require('../image/flowershop.jpg'),
  require('../image/orangeflower.jpg'),
  require('../image/flowershop.jpg'),
  require('../image/orangeflower.jpg'),
];

export default class Tutorial extends Component {
  filterTutorial = () => {
    this.props.navigation.navigate('FilterTutorial');
  };

  viewTutorialDetails = () => {
    this.props.navigation.navigate('TutorialDetails');
  };
  renderSection() {
    return images.map(image => {
      return (
        <View style={styles.productContainer}>
          <TouchableOpacity
            style={[
              {width: width / 1.3},
              {height: width / 2},
              {marginVertical: 20},
              {paddingTop: 15},
              {borderWidth: 1},
              {borderTopRightRadius: 30},
              {borderTopLeftRadius: 30},
            ]}
            onPress={this.viewTutorialDetails}>
            <Text style={styles.tutorialTitle}>Tutorial Title</Text>
            <Image
              style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
              }}
              source={image}></Image>
          </TouchableOpacity>
        </View>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Learning Tutorial </Text>
          <TouchableOpacity onPress={this.filterTutorial}>
            <Ionicons
              name="funnel"
              size={30}
              color="orange"
              style={{marginLeft: 60}}
            />
          </TouchableOpacity>
        </View>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          {this.renderSection()}
        </ScrollView>
        <TouchableOpacity onPress={() => this.suggestTutorial}>
          <Text style={styles.text}>Drop your suggestion on Tutorial</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    marginLeft: 110,
    marginTop: 5,
    fontWeight: '500',
  },
  tutorialTitle: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  productContainer: {
    // marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
});
