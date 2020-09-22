import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Subcategoria from './src/screens/SubCategoria';
import PassoAPasso from './src/screens/PassoaPasso'

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

const Stack = createStackNavigator();

export default class App extends Component{
  render() {
    return(
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="PassoAPasso">
          <Stack.Screen
            name="Home" 
            component={Home}            
          />
          <Stack.Screen
            name="Subcategoria" 
            component={Subcategoria}
          />
          <Stack.Screen 
            name="PassoAPasso" 
            component = {PassoAPasso}
            options={{
              title: 'Parada Cardiorrespiratória',
              headerTitleAlign:"center",
              headerStyle: {
                backgroundColor: '#22CDCD'
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 22,
              }
            }}
          />
        </Stack.Navigator>
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