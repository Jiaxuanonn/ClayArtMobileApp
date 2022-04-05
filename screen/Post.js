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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {request, PERMISSIONS} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Fire from '../Fire';
import {Timestamp, collection, addDoc} from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
import {storage, db, auth} from '../config';

export default class Post extends Component {
  state = {
    title: '',
    caption: '',
    image: null,
    createdAt: Timestamp.now().toDate(),
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

  // handlePost = () => {
  //   Fire.shared
  //     .addPost({
  //       title: this.state.title.trim(),
  //       caption: this.state.caption.trim(),
  //       localUri: this.state.image,
  //     })
  //     .then(ref => {
  //       this.setState({title: '', caption: '', image: null});
  //       this.props.navigation.goBack();
  //     })
  //     .catch(error => {
  //       Alert.alert('Error:', error.message);
  //       console.log('Errorhere', error);
  //     });
  // };
  pickImage = async () => {
    let result = await ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      console.log(image);
      console.log('Image uploaded');
      const imageUri = Platform.OS === 'android' ? image.path : image.sourceURL;
      this.setState({image: imageUri});
    });

    // if (!result.cancelled) {
    //   this.setState({image: result.uri});
    //   console.log(result);
    //   console.log('Image uploaded');
    // }
  };

  goBackHome = () => {
    this.props.navigation.navigate('Home');
  };

  get uid() {
    return (getAuth.currentUser || {}).uid;
  }

  handlePost = () => {
    if (!this.state.title || !this.state.caption || !this.state.image) {
      Alert.alert('Please fill all the fields');
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${this.state.image.name}`,
    );

    const uploadImage = uploadBytesResumable(storageRef, this.state.image);

    uploadImage.on(
      'state_changed',
      snapshot => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
      },
      err => {
        console.log(err);
      },
      () => {
        this.setState({
          title: '',
          description: '',
          image: '',
        });

        getDownloadURL(uploadImage.snapshot.ref).then(url => {
          const articleRef = collection(db, 'Posts');
          addDoc(articleRef, {
            title: this.state.title,
            caption: this.state.caption,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            userId: this.uid,
            likes: [],
            comments: [],
          })
            .then(() => {
              Alert.alert('Post added successfully');
            })
            .catch(err => {
              Alert.alert('Error adding article');
            });
        });
      },
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBackHome}>
            <Ionicons name="arrow-back-outline" size={24} color="orange" />
          </TouchableOpacity>
          <View>
            <Text style={{fontWeight: '500'}}>New Post</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handlePost}>
            <Text style={{fontWeight: '500', color: 'white'}}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../image/stevejobs.jpg')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.inputTitle}>Title</Text>
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={1}
          style={styles.textInput}
          placeholder="Enter the title"
          onChangeText={title => this.setState({title})}
          value={this.state.title}
        />
        <Text style={styles.inputTitle}>Caption</Text>
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          style={styles.captionInput}
          placeholder="Enter the caption"
          onChangeText={caption => this.setState({caption})}
          value={this.state.caption}
        />

        <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
          <Ionicons name="md-camera" size={35} color="orange" />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Image
            source={{
              uri: this.state.image,
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View>
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
