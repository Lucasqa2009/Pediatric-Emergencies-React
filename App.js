/**Essa  é a tela App.js, é a principal do sistema
 *  e até o momento só serve para alocar as telas.*/

/**Obrigatório para navegação  com o  React Navigation*/
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

/**Biblioteca de navegação. Container, Navegação em Stack e Navegação por abas inferiores */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**Importando as funções com "export default" das respectivas telas */
import Home from './src/screens/Home';
import AprenderScreen from './src/screens/Aprendizagem';
import Settings from './src/screens/Settings';
import Subcategoria from './src/screens/SubCategoria';
import PassoAPasso from './src/screens/PassoaPasso';
import QuizContext from './src/screens/Aprendizagem/context';
import Quiz from './src/screens/Quiz';
import WinQuiz from './src/screens/WinQuiz';
import Infos from './src/screens/Infos'
import Sobre from './src/screens/Sobre';
import Politics from './src/screens/Politics'

/**Variável que possui propriedades para criar a navegação */
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Aprendizagem" component={AprenderScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

/**A classe(que renderiza) "default" ou a função(que somente retorna) "default" é o export padrão de cada arquivo (só pode ter um)*/
export default class App extends Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        {/**Aqui abaixo ficam guardadas todas as telas de Stack, toda vez que for para trocar, é chamada pelo "name" em algum evento (botão, por ex.) */}
        <Stack.Navigator initialRouteName="HomeStack">
          <Stack.Screen name="HomeStack" component={HomeStackScreen} />
          <Stack.Screen name="PassoAPasso" component={PassoAPasso} />
          <Stack.Screen name="Subcategoria" component={Subcategoria} />
          <Stack.Screen name="QuizContext" component={QuizContext} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="WinQuiz" component={WinQuiz} />
          <Stack.Screen name="Infos" component={Infos} />
          <Stack.Screen name="Politics" component={Politics} />
          <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/** CSS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4FFFE"
  }
})