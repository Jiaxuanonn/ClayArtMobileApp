import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  PermissionsAndroid,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {request, PERMISSIONS} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Fire from '../Fire';

export default class Sell extends Component {
  state = {
    text: '',
    image: null,
  };

  componentDidMount() {
    this.getPhotoPermission();
  }

  getPhotoPermission = async () => {
    request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA,
    ).then(result => {
      console.log(result);
    });
  };

  handlePost = () => {
    Fire.shared
      .addPost({text: this.state.text.trim(), localUri: this.state.image})
      .then(ref => {
        this.setState({text: '', image: null});
        this.props.navigation.goBack();
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
  pickImage = async () => {
    let result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      this.setState({image: result.uri});
      console.log(result);
      console.log('Image uploaded');
    }
  };

  goBackStore = () => {
    this.props.navigation.navigate('Store');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBackStore}>
            <Ionicons name="arrow-back-outline" size={24} color="orange" />
          </TouchableOpacity>
          <View>
            <Text style={{fontWeight: '500'}}>New Product</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handlePost}>
            <Text style={{fontWeight: '500', color: 'white'}}>List</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.inputTitle}>Product Name</Text>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={2}
            style={styles.textInput}
            placeholder="Enter the product name"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={styles.inputTitle}>Price</Text>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={1}
            style={styles.captionInput}
            placeholder="Enter the product price"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={styles.inputTitle}>Quantity</Text>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={1}
            style={styles.captionInput}
            placeholder="Enter the product quantity"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={styles.inputTitle}>Product Description</Text>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={4}
            style={styles.captionInput}
            placeholder="Enter the product description"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />

          <Text style={styles.inputTitle}>Deal Method</Text>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={4}
            style={styles.captionInput}
            placeholder="Enter the method"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />

          <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
            <Ionicons name="md-camera" size={35} color="orange" />
          </TouchableOpacity>

          <View>
            <Image
              source={{
                uri: this.state.image,
              }}
              style={{width: '100%', height: '100%', marginTop: 20}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    borderBottonWidth: 3,
    borderBottomColor: 'orangered',
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginLeft: 330,
    height: 35,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 30,
    height: 20,
    width: 60,
    alignItems: 'center',
    jusifyContent: 'center',
  },
  inputContainer: {
    margin: 30,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 24,
    marginRight: 15,
  },
  photo: {
    alignItems: 'flex-end',
    marginHorizontal: 32,
  },
  inputTitle: {
    fontSize: 15,
    textTransform: 'uppercase',
    marginLeft: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 30,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
    padding: 10,
  },
  captionInput: {
    borderWidth: 1,
    borderRadius: 20,
    height: 100,
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
    padding: 10,
  },
});
