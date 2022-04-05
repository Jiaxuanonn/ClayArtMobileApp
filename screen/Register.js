import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import auth from '@react-native-firebase/auth';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../config';

export default class Register extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
  };

  handleRegister = () => {
    const {email, password} = this.state;
    // auth.createUserWithEmailAndPassword(email, password).then(() => {
    //   console.log('Register sucessfully');
    //   Alert.alert('', 'Register Sucessfully', [
    //     {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
    //   ]);
    // });

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Register sucessfully');
        Alert.alert('', 'Register Sucessfully', [
          {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
        ]);
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginHorizontal: 150, fontSize: 20}}>Welcome</Text>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Username</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={username => this.setState({username})}
              value={this.state.username}></TextInput>
          </View>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value={this.state.email}></TextInput>
          </View>

          <View>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}
              value={this.state.password}></TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: 20,
                marginTop: 10,
              }}>
              Register as member
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 32}}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color: 'black', fontSize: 13}}>
              Already have an account?{' '}
              <Text style={{fontWeight: '300', color: 'orange'}}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: 'orange',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginTop: 40,
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: 'orange',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: 'orange',
    marginBottom: 30,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'orange',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    jusifyContent: 'center',
  },
});
