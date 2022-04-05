import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import Fire from '../Fire';
import Ionicons from 'react-native-vector-icons/Ionicons';
var {height, width} = Dimensions.get('window');

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
        <View style={styles.productContainer} key={index}>
          <View
            style={[
              {width: width / 2},
              {height: width / 2},
              {marginVertical: 20},
              {paddingHorizontal: 10},
            ]}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
              }}
              source={image}></Image>
            <Text style={styles.productText}>Product Name</Text>
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
        <View style={{marginTop: 55, alignItems: 'center'}}>
          <TouchableOpacity onPress={this.close}>
            <Ionicons
              name="close-circle"
              size={35}
              color="orange"
              style={{marginLeft: 300}}
            />
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
            {/* <Image
              source={
                this.state.user.avatar
                  ? {uri: this.state.user.avatar}
                  : require('../image/stevejobs.jpg')
              }
              style={styles.avatar}
            /> */}
            <Image
              source={require('../image/stevejobs.jpg')}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Steve Jobs</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.segmentClicked(0)}
            transparent
            active={this.state.activeIndex == 0}>
            <Text style={styles.text}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.segmentClicked(1)}
            transparent
            active={this.state.activeIndex == 1}>
            <Text style={styles.text}>Product</Text>
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
    margin: 32,
    marginLeft: 90,
    marginRight: 70,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statAmount: {
    color: '#4F566D',
    fontSize: 18,
    fontWeight: '300',
  },
  statTitle: {
    color: '#C3C5CD',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
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
    backgroundColor: 'orange',
  },
  productText: {
    borderWidth: 1,
    padding: 15,
    color: 'white',
    borderColor: 'orange',
    backgroundColor: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    borderRadius: 20,
    textAlign: 'center',
  },
});
