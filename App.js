import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {View, Image} from 'react-native';
import Loading from './screen/Loading';
import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import Profile from './screen/Profile';
import Search from './screen/Search';
import Tutorial from './screen/Tutorial';
import Post from './screen/Post';
import Chat from './screen/Chat';
import Messages from './screen/Messages';
import UserProfile from './screen/UserProfile';
import PostDetails from './screen/PostDetails';
import FilterTutorial from './screen/FilterTutorial';
import TutorialDetails from './screen/TutorialDetails';
import Sell from './screen/Sell';
import Store from './screen/Store';
import ProductDetails from './screen/ProductDetails';
import SearchContent from './screen/screenComponents/SearchContent';
import FavouriteProduct from './screen/FavouriteProduct';
import {db, auth} from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Image
              source={require('./image/home.png')}
              style={{
                width: 25,
                height: 25,
              }}
            /> */}
            <Icon name="home" size={26} color="white" />
          </View>
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Image
              source={require('./image/search.png')}
              style={{width: 25, height: 25}}
            /> */}
            <Ionicons name="search" size={26} color="white" />
          </View>
        ),
      },
    },
    Tutorial: {
      screen: Tutorial,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Image
              source={require('./image/paint.png')}
              style={{width: 25, height: 25}}
            /> */}
            <Icon name="palette" size={26} color="white" />
          </View>
        ),
      },
    },
    Store: {
      screen: Store,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Image
              source={require('./image/store.png')}
              style={{
                width: 25,
                height: 25,
              }}
            /> */}
            <Icon name="storefront" size={26} color="white" />
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {/* <Image
              source={require('./image/user.png')}
              style={{width: 25, height: 25}}
            /> */}
            <Ionicons name="person" size={26} color="white" />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: 'white',
    inactiveColor: 'red',
    barStyle: {backgroundColor: 'orange', width: 400, height: 55},
  },
);

const AuthStack = createStackNavigator({
  Login: Login,
  Register: Register,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      App: AppTabNavigator,
      Auth: AuthStack,
      Post: Post,
      Chat: Chat,
      UserProfile: UserProfile,
      PostDetails: PostDetails,
      SearchContent: SearchContent,
      FilterTutorial: FilterTutorial,
      TutorialDetails: TutorialDetails,
      ProductDetails: ProductDetails,
      Sell: Sell,
      FavouriteProduct: FavouriteProduct,
      Messages: Messages,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);
