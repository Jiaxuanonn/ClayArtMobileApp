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
  TextInput,
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

export default class FavouriteProduct extends Component {
  viewProductDetails = () => {
    this.props.navigation.navigate('ProductDetails');
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
              {borderWidth: 1},
              {borderTopRightRadius: 30},
              {borderTopLeftRadius: 30},
            ]}
            onPress={this.viewProductDetails}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginBottom: 5,
              }}
              source={image}></Image>
            <Text style={styles.productName}>Product Name</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Favourite Product</Text>
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
    marginLeft: 120,
    marginTop: 5,
    fontWeight: '500',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
    paddingBottom: 5,
    textAlign: 'center',
  },
  productContainer: {
    marginHorizontal: 5,
    flexDirection: 'row',
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
  sell: {
    backgroundColor: 'orange',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 320,
    marginBottom: 80,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
    paddingTop: 18,
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
