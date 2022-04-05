import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// temporary data until we pull from Firebase
const posts = [
  {
    id: '1',
    name: 'Joe McKay',
    title: 'Animal Clay Art',
    timestamp: 1569109273726,
    avatar: require('../image/stevejobs.jpg'),
    image: require('../image/flowershop.jpg'),
  },
  {
    id: '2',
    name: 'Karyn Kim',
    title: 'Animal Clay Art',
    timestamp: 1569109273726,
    avatar: require('../image/stevejobs.jpg'),
    image: require('../image/flowershop.jpg'),
  },
  {
    id: '3',
    name: 'Emerson Parsons',
    title: 'Animal Clay Art',
    timestamp: 1569109273726,
    avatar: require('../image/stevejobs.jpg'),
    image: require('../image/flowershop.jpg'),
  },
  {
    id: '4',
    name: 'Kathie Malone',
    title: 'Animal Clay Art',
    timestamp: 1569109273726,
    avatar: require('../image/stevejobs.jpg'),
    image: require('../image/flowershop.jpg'),
  },
];

export default class Home extends Component {
  renderPost = post => {
    return (
      <TouchableOpacity style={styles.feedItem} onPress={this.postDetails}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.name}>@{post.name}</Text>
            </View>

            <Ionicons name="ellipsis-horizontal" size={24} color="#73788B" />
          </View>
          <Text style={styles.post}>{post.text}</Text>
          <Image
            source={post.image}
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    );
  };

  post = () => {
    this.props.navigation.navigate('Post');
  };

  postDetails = () => {
    this.props.navigation.navigate('PostDetails');
  };

  messages = () => {
    this.props.navigation.navigate('Messages');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.post}>
            <Ionicons
              name="add-circle"
              size={35}
              color="orange"
              style={{marginLeft: 280}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.messages}>
            <Ionicons
              name="chatbox"
              size={35}
              color="orange"
              style={{marginLeft: 15}}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.home}
          data={posts}
          renderItem={({item}) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVericalScrollIndicator={false}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECF4',
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
    paddingRight: 20,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#454D65',
  },
  name: {
    fontSize: 11,
    color: '#C4C6CE',
    marginTop: 4,
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
});
