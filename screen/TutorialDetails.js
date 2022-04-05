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
const tutorials = [
  {
    id: '1',
    title: 'Animal Clay Art',
    content: 'This animal is cute, I love it!',
    image: require('../image/flowershop.jpg'),
  },
];
export default class TutorialDetails extends Component {
  state = {
    like: null,
  };

  likePost = () => {
    this.setState(this.state.like);
  };

  renderPost = post => {
    return (
      <View>
        <Text style={styles.title}>{post.title}</Text>

        <Image
          source={post.image}
          style={styles.postImage}
          resizeMode="cover"
        />
        <Text style={styles.content}>{post.content}</Text>
      </View>
    );
  };

  close = () => {
    this.props.navigation.navigate('Tutorial');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.close}>
            <Ionicons
              name="close-circle"
              size={35}
              color="orange"
              style={{marginLeft: 330}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.home}
          data={tutorials}
          renderItem={({item}) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVericalScrollIndicator={false}></FlatList>
        <TouchableOpacity onPress={this.likePost}>
          <Ionicons
            name="heart"
            size={35}
            color={this.state.like ? 'red' : 'orange'}
            style={{marginLeft: 330, marginBottom: 20}}
          />
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
    marginHorizontal: 75,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 18,
    marginRight: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: '#454D65',
    textAlign: 'center',
    marginTop: 15,
  },
  name: {
    fontSize: 15,
    color: '#C4C6CE',
    marginTop: 6,
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
  content: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    color: '#454D65',
  },
  input: {
    borderBottomColor: 'black',
    height: 40,
    fontSize: 15,
    color: 'black',
  },
  commentContainer: {
    marginHorizontal: 8,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    height: 50,
    alignItems: 'center',
    jusifyContent: 'center',
  },
  comment: {
    fontSize: 13,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    color: '#454D65',
  },
  commenter: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    // marginBottom: 5,
    marginHorizontal: 10,
    color: '#454D65',
  },
});
