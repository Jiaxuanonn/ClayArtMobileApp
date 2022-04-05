import firebase from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
// import 'firebase/compat/firestore';
import {getStorage, ref, uploadBytes} from 'firebase/storage';

class Fire {
  //Upload photo
  uploadPhotoAsync = (uri, filename) => {
    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();

      let upload = getStorage.ref(filename).put(file);

      upload.on(
        'state_changed',
        snapshot => {},
        err => {
          rej(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        },
      );
    });
  };
  //AddPost
  addPost = async ({title, caption, localUri}) => {
    const remoteUri = await this.uploadPhotoAsync(
      localUri,
      `photos/${this.uid}/${Date.now()}`,
    );

    return new Promise((res, rej) => {
      this.firestore
        .collection('Posts')
        .add({
          title,
          caption,
          uid: this.uid,
          timestamp: this.timestamp,
          image: remoteUri,
        })
        .then(ref => {
          res(ref);
        })
        .catch(error => {
          rej(error);
          console.log('Error1', error);
        });
    });
  };

  //Message
  send = messages => {
    messages.forEach(item => {
      const messgae = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
    });
  };

  parse = message => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = callback => {
    this.messageDb.on('child_added', snapshot =>
      callback(this.parse(snapshot)),
    );
  };

  off() {
    this.messageDb.off();
  }

  get messageDb() {
    return firebase.database().ref('messages');
  }

  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (getAuth.currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();
export default Fire;

// export async function getPosts(postsRetreived) {
//   var postList = [];

//   var snapshot = await firebase
//     .firestore()
//     .collection('Posts')
//     .orderBy('createdAt')
//     .get();

//   snapshot.forEach(doc => {
//     const foodItem = doc.data();
//     foodItem.id = doc.id;
//     foodList.push(foodItem);
//   });

//   foodsRetreived(foodList);
// }
