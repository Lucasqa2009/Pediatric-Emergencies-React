/**Essa  é a tela App.js, é a principal do sistema
 *  e até o momento só serve para alocar as telas.*/

/**Obrigatório para navegação  com o  React Navigation*/
import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {  StyleSheet } from 'react-native';

/**Biblioteca de navegação. Container, Navegação em Stack e Navegação por abas inferiores */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**Importando as funções "export defaul" das respectivas telas */
import Home from './src/screens/Home';
import AprenderScreen from './src/screens/Aprendizagem';
import Settings from './src/screens/Settings';
import Subcategoria from './src/screens/SubCategoria';
import PassoAPasso from './src/screens/PassoaPasso';

/**Variável que possui propriedades para criar a navegação */
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Aprendizagem" component={AprenderScreen}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
  );
}

/**A classe(renderiza) "default" ou a função(somente retorna) "default" é o export padrão de cada arquivo (só pode ter um)*/
export default class App extends Component{
  render() { 
    return(
      <NavigationContainer style={styles.container}> 
        {/**Aqui abaixo ficam guardadas todas as telas de Stack, toda vez que for para trocar, é chamada pelo "name" em algum evento (botão, por ex.) */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeStackScreen}/> 
          <Stack.Screen name="PassoAPasso" component={PassoAPasso}/>
          <Stack.Screen name="Subcategoria" component={Subcategoria}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/** CSS */
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4FFFE"
  }
})