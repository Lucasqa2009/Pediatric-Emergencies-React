/**TELA INICIAL DO APP, com as emergências em pares
 * Você tinha comentado sobre o tanto de biblioteca que precisava importar...
 * Mas na vdd é a mesma coisa de vc aprender o que a linguagem tem de função
 * Quer dizer, se eu quero fazer um Button, preciso saber o nome...
 * No caso do React Native vc procura na internet qual o nome e ele te diz a biblioteca tbm pra importar
 * Essa necessidade de importação facilita pra leveza do app, imagino */


import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

/**Aqui é legal notar que  como os botões não são exportados como Default, preciso importá-los pelo próprio nome, entre chaves*/
import { ButtonInfoComp, ButtonTeste } from '../../components';
import { ButtonEmergency } from '../../components';


/** Toda tela que faz parte da Stack e que leva pra uma outra tela (por meio de botão, p/ ex.), precisa receber o parametro navigation, que permite a propriedade ".navigate" */
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1,marginTop: 40 }}        /**Limita o tamanho da ScrollView */>
                <ScrollView
                    /**Uma ScrollView precisa de um estilo de conteúdo e um estilo pro container*/
                    contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <ButtonEmergency
                        name={'Parada\nCardiorrespiratória'}
                        props={navigation}
                        screen='Subcategoria'
                        textLabelSize={14}
                        buttonSubVar='pcr'
                    />
                    <ButtonEmergency
                        name='Engasgo e Sufocamento'
                        props={navigation}
                        screen='Subcategoria'
                        buttonSubVar='engasgo'
                    />
                    <ButtonEmergency
                        name='Queimadura'
                        props={navigation}
                        screen='Subcategoria'
                        buttonSubVar='queimaduras'
                    />
                    <ButtonEmergency
                        name='Queda'
                        props={navigation}
                        screen='Subcategoria'
                        buttonSubVar='quedas'
                    />
                    <ButtonEmergency
                        name='Afogamento'
                        props={navigation}
                        screen='PassoAPasso'
                        buttonSubVar='afogamento'
                        titleHeader='Afogamento'
                    />
                    <ButtonEmergency
                        name='Choque Elétrico'
                        props={navigation}
                        screen='PassoAPasso'
                        buttonSubVar='choques'
                        titleHeader='Choque Elétrico'
                    />
                </ScrollView>
            </View>

                <ButtonInfoComp props={navigation} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F4FFFE"        /**F47F4E */
    },

    /* para maior entendimento dos ScrollViews, google it: "contentContainerStyle stackoverflow" */
    containerCategory: {
        width: '90%',
        backgroundColor: "#F4FFFE",     /**58585E */
    },
    containerCategoryScroll: {
        paddingHorizontal: '3%',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
})