/**TELA INICIAL DO APP, com as emergências em pares
 * Você tinha comentado sobre o tanto de biblioteca que precisava importar...
 * Mas na vdd é a mesma coisa de vc aprender o que a linguagem tem de função
 * Quer dizer, se eu quero fazer um Button, preciso saber o nome...
 * No caso do React Native vc procura na internet qual o nome e ele te diz a biblioteca tbm pra importar
 * Essa necessidade de importação facilita pra leveza do app, imagino */

import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {wWidth} from '../../configs/dimensions'

/**Tamanho do botão em relação à tela do smartphone */
const buttonBoxWidth = (39/100)*wWidth;

/**Função pra replicar o botão */
function ButtonEmergency({ props, screen, name }){
    return(
        <TouchableOpacity                           /* Isso é um Botão que, quando tocado, perde opacidade */
            style={styles.buttonBox}
            onPress={() => props.navigate(screen)}    /**Quando pressionado, chama a screen passada como parâmetro. Pode ser traduzida como => navigation.navigate('Subcategoria') */
        >
            <Text style={styles.buttonBoxText}>{name}</Text> 
        </TouchableOpacity>
    );
}

/** Toda tela que faz parte da Stack e que leva pra uma outra tela (por meio de botão, p/ ex.), precisa receber o parametro navigation, que permite a propriedade ".navigate" */
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{height:'61%'}}        /**Limita o tamanho da ScrollView */> 
                <ScrollView
                    /**Uma ScrollView precisa de um estilo de conteúdo e um estilo pro container*/
                    contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <ButtonEmergency props={navigation} screen='Subcategoria' name={'Parada\nCardiorrespiratória'}/>
                    <ButtonEmergency props={navigation} screen='Subcategoria' name='Queimaduras'/>
                    <ButtonEmergency props={navigation} screen='Subcategoria' name='Quedas'/>
                    <ButtonEmergency props={navigation} screen='Subcategoria' name='Afogamento'/>
                    <ButtonEmergency props={navigation} screen='Subcategoria' name='Engasgo e Sufocamento'/>
                    <ButtonEmergency props={navigation} screen='Subcategoria' name='Choques Elétricos'/>
                </ScrollView>
            </View>
            
            <TouchableOpacity   /**Botão informações importantes, sem função ainda*/>
                <Text>Informações Importantes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#F47F7E"        /**F4FFFE */
    },

    /* para maior entendimento dos ScrollViews, google it: "contentContainerStyle stackoverflow" */
    containerCategory: {
        width: '90%',
        backgroundColor: "#58585E",     /**F4FFFE */
    },
    containerCategoryScroll: {
        paddingHorizontal:'3%',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    buttonBox: {
        width: buttonBoxWidth,
        height: buttonBoxWidth,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#8F8F8F",     /**AADAE5 */
        borderRadius: 8,
        marginBottom: 20,
        elevation:10,

        justifyContent: "flex-end"      /*MAKES TEXT AT THE BOTTOM' BOX*/
    },
    buttonBoxText: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        lineHeight:20,
        paddingBottom: 4,
        textAlign: "center"
    }
  })