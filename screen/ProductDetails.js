import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// temporary data until we pull from Firebase
const products = [
  {
    id: '1',
    name: 'Animal Clay Art',
    price: 'RM13',
    image: require('../image/flowershop.jpg'),
    description: '100% clay',
    seller: 'Joe McKay',
    avatar: require('../image/stevejobs.jpg'),
    dealMethod: 'Delivery',
  },
];
export default class ProductDetails extends Component {
  state = {
    like: null,
  };

  likePost = () => {
    this.setState(this.state.like);
  };

  renderPost = product => {
    return (
      <View>
        <Image
          source={product.image}
          style={styles.postImage}
          resizeMode="cover"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.subtitle}>Product description</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.subtitle}>Mailing & Delivery</Text>
        <Text style={styles.description}>- {product.dealMethod}</Text>
        <Text style={styles.subtitle}>About Seller</Text>
        <View style={styles.feedItem}>
          <TouchableOpacity onPress={this.user}>
            <Image source={product.avatar} style={styles.avatar} />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.name}>@{product.name}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  close = () => {
    this.props.navigation.navigate('Home');
  };

  user = () => {
    this.props.navigation.navigate('UserProfile');
  };

  goBack = () => {
    this.props.navigation.navigate('Store');
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
          <Text style={styles.headerText}>Buy Now</Text>
        </View>
        <FlatList
          style={styles.home}
          data={products}
          renderItem={({item}) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVericalScrollIndicator={false}></FlatList>

        <View style={styles.feedItem}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.quantity}>quantity</Text>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward"
                size={25}
                color={this.state.like ? 'red' : 'orange'}
                style={{marginLeft: 150}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.favouriteProduct}>
            <Ionicons
              name="heart"
              size={45}
              color={this.state.like ? 'red' : 'orange'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.chat}>
            <Text style={styles.text}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.buyProduct}>
            <Text style={styles.text}>Buy Now</Text>
          </TouchableOpacity>
        </View>
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
    marginLeft: 90,
    marginTop: 5,
    fontWeight: '500',
  },
  home: {
    marginVertical: 15,
    marginHorizontal: 30,
  },
  feedItem: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 18,
    marginRight: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#454D65',
    textAlign: 'center',
    marginTop: 15,
    textTransform: 'uppercase',
  },
  price: {
    fontSize: 20,
    fontWeight: '300',
    color: '#454D65',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 15,
    color: '#454D65',
    marginTop: 6,
    fontWeight: '400',
  },
  post: {
    marginTop: 5,
    fontSize: 14,
    color: '#838899',
  },
  postImage: {
    width: undefined,
    height: 180,
    borderRadius: 5,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 15,
    marginHorizontal: 10,
    color: '#454D65',
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 10,
    color: '#454D65',
    fontWeight: '400',
  },
  quantity: {
    fontSize: 18,
    fontWeight: '800',
    marginHorizontal: 44,
    color: '#454D65',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
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
    borderRadius: 50,
  },
});
