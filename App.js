/**Essa  é a tela App.js, é a principal do sistema
 *  e até o momento só serve para alocar as telas.*/

/**Obrigatório para navegação  com o  React Navigation*/
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';

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
import Infos from './src/screens/Infos';
import Sobre from './src/screens/Sobre';
import Politics from './src/screens/Politics';

import { ShowTitlePaP } from './src/components/index'
import { subVariable } from './src/screens/SubCategoria/changeSubs'

/**Variável que possui propriedades para criar a navegação */
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#22CDCD',
        inactiveBackgroundColor: '#337B7B',
        tabStyle: { borderRadius: 14 },
        style: { backgroundColor: "#337B7B", height: 60 }
      }}
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = focused ? require("./assets/images/aprenderIcon.png") : require('./assets/images/aprenderIconInact.png')
          } else if (route.name === 'Aprendizagem') {
            iconPath = focused ? require("./assets/images/testeIcon.png") : require('./assets/images/testeIconInact.png')
          } else if (route.name === 'Settings') {
            iconPath = focused ? require("./assets/images/configIcon.png") : require("./assets/images/configIconInact.png")
          }
          return (
            <Image
              source={iconPath}
              style={
                focused
                  ? { resizeMode: "contain", height: '150%', marginTop: -3 }
                  : { resizeMode: "contain", height: '75%' }}
            />
          );
        }
      })}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.tabLabelActive : styles.tabLabelInactive}>Aprender</Text>
          )
        }}
      />
      <Tab.Screen
        name="Aprendizagem"
        component={AprenderScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.tabLabelActive : styles.tabLabelInactive}>Testes</Text>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.tabLabelActive : styles.tabLabelInactive}>Configurações</Text>
          )
        }}
      />
    </Tab.Navigator>
  );
}

/**A classe(que renderiza) "default" ou a função(que somente retorna) "default" é o export padrão de cada arquivo (só pode ter um)*/
export default class App extends Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <StatusBar backgroundColor="#22CDCD" barStyle="light-content" />
        {/**Aqui abaixo ficam guardadas todas as telas de Stack, toda vez que for para trocar, é chamada pelo "name" em algum evento (botão, por ex.) */}
        <Stack.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#22CDCD',
              height: 55
            },
            headerTitleStyle: {
              fontFamily: 'Ubuntu-Bold',
              fontSize: 20,
              color: "white"
            },
            cardStyle: {
              backgroundColor:"#F4FFFE"
            },
            animationEnabled: false
          }}
        >
          <Stack.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{
              headerTitle: (props) => (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 55 }}>
                  <Image style={{ resizeMode: "contain", width: '80%', height: '80%' }} source={require('./assets/images/LOGO.png')} />
                </View>
              )
            }}
          />
          <Stack.Screen
            name="PassoAPasso"
            component={PassoAPasso}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => (
                <View style={styles.headerTitleContainerCSS}>
                  <ShowTitlePaP />
                </View>
              ),
              headerTitleContainerStyle: {
                width: '75%',
                height: '100%',
              }
            }}
          />
          <Stack.Screen
            name="Subcategoria"
            component={Subcategoria}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => (
                <View style={styles.headerTitleContainerCSS}>
                  <Text
                    style={styles.headerTitleCSS}
                  >
                    {
                      subVariable === 'pcr' ? "Parada Cardiorrespiratória"
                        : subVariable === 'queimaduras' ? "Queimadura"
                          : subVariable === 'engasgo' ? "Engasgo e Sufocamento"
                            : subVariable === 'quedas' ? "Queda"
                              : subVariable === 'choques' ? "Choque Elétrico"
                                : subVariable === 'afogamento' ? "Afogamento"
                                  : ""
                    }
                  </Text>
                </View>
              ),
              headerTitleContainerStyle: {
                width: '80%',
                height: '100%',
              },
              cardStyle: { backgroundColor: 'transparent' },
              cardOverlayEnabled: true
            }}
            mode="modal"
          />
          <Stack.Screen name="QuizContext" component={QuizContext} options={{ headerTitleAlign: "center", title: "Contexto" }} />
          <Stack.Screen name="Quiz" component={Quiz} options={{ headerTitleAlign: "center" }} />
          <Stack.Screen name="WinQuiz" component={WinQuiz} options={{ headerTitleAlign: "center", title: "Resultado", headerLeft: null}} />
          <Stack.Screen
            name="Infos"
            component={Infos}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => (
                <View style={styles.headerTitleContainerCSS}>
                  <Text style={styles.headerTitleCSS}> INFORMAÇÕES</Text>
                </View>
              ),
            }}
          />
          <Stack.Screen name="Politics" component={Politics} options={{ headerTitleAlign: "center" }} />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => (
                <View style={styles.headerTitleContainerCSS}>
                  <Text style={styles.headerTitleCSS}> SOBRE</Text>
                </View>
              ),
            }}
          />
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
  },
  tabLabelActive: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    marginBottom: 2,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 7,
    textShadowColor: 'black'
  },
  tabLabelInactive: {
    color: '#ECECEC',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },

  headerTitleContainerCSS: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleCSS: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
})