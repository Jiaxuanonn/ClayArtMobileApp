import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {firebase} from '../config';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {
    const {email, password} = this.state;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Login sucessfully');
        Alert.alert('', 'Login Sucessfully', [
          {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
        ]);
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  Register = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginHorizontal: 150, fontSize: 20}}>Welcome</Text>

        <View style={styles.form}>
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

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: 20,
                marginTop: 10,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 32}}
            onPress={this.Register}>
            <Text style={{color: 'black', fontSize: 13}}>
              New to Clay Art App?{' '}
              <Text style={{fontWeight: '300', color: 'orange'}}>
                Register as member
              </Text>
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
