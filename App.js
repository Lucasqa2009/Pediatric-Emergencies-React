import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import AprenderScreen from './src/screens/Aprendizagem';
import Settings from './src/screens/Settings';
import Subcategoria from './src/screens/SubCategoria';
import PassoAPasso from './src/screens/PassoaPasso';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Aprendizagem" component={AprenderScreen}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
  );
}

export default class App extends Component{
  render() {
    return(
      <NavigationContainer style={styles.container}>
        <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen name="Home" component={HomeStackScreen}/>
          <HomeStack.Screen name="PassoAPasso" component={PassoAPasso}/>
          <HomeStack.Screen name="Subcategoria" component={Subcategoria}/>
        </HomeStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4FFFE"
  }
})