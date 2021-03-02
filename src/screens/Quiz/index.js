import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { wWidth } from '../../configs/dimensions';



import { BoxShadow } from 'react-native-shadow';
const shadowOptAprendizado = {
    width: 0.84*wWidth,
    height: 65,
    color: "#000",
    border: 4,
    radius: 12,
    opacity: 0.3,
    x: 0,
    y: 3,
    style: {marginBottom: 16}
}

import {contentArrayQuestion, contentArrayAlternatives, showAlternative} from '../../components/ChangeQuizTexts.js';



export function ButtonAlternativa({ props, isTrue, alternative }) {
    return (
        <BoxShadow setting={shadowOptAprendizado}>
            <View style={styles.buttonAlternative}>
                <TouchableOpacity
                    style={styles.buttonAlternative}
                    onPress={() => props.navigate('WinQuiz')}
                >
                    <View style={styles.buttonAlternativeContainer}>
                        <Text style={styles.buttonAlternativeText}>{alternative} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </BoxShadow>
    );
}

export function ButtonAgir({ props }) {
    return (
        <TouchableOpacity
            style={styles.buttonAgir}
            onPress={() => props.navigate('WinQuiz')}
        >
            <View style={styles.buttonAgirContainer}>
                <Text style={styles.buttonAgirText}>Continuar</Text>
            </View>
        </TouchableOpacity>
    );
}

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function Quiz({ navigation }) {

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#F4DDDD' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, marginTop: 26, marginBottom: 5 }}>Questão 1 / 5</Text>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 17, fontFamily: 'Poppins-Regular', marginBottom: 15 }}>
                            {contentArrayQuestion[1]}

                        </Text>
                    </View>
                </View>

                <View style={styles.containerAlternatives}>
                    <ButtonAlternativa props={navigation} alternative={contentArrayAlternatives[0][0].alternative} isTrue ={contentArrayAlternatives[0][0].answer}/>
                    <ButtonAlternativa props={navigation} alternative={contentArrayAlternatives[0][1].alternative}  isTrue ={contentArrayAlternatives[0][1].answer}/>
                    <ButtonAlternativa props={navigation} alternative={contentArrayAlternatives[0][2].alternative}  isTrue ={contentArrayAlternatives[0][2].answer}/>
                    <ButtonAlternativa props={navigation} alternative={contentArrayAlternatives[0][3].alternative}  isTrue ={contentArrayAlternatives[0][3].answer}/>
                </View>

            </View>

            <ButtonAgir props={navigation} />

        </View>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F4FFFE',
        justifyContent:'space-between'
    },
    container: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "space-between",
        width: 0.84 * wWidth,
        //backgroundColor: '#F68686'
    },
    robertinhoImage: {
        resizeMode: "contain",
        width: '100%',
        height: '100%',
        marginTop: 10
    },

    containerAlternatives: {
        justifyContent: 'space-between',
        //backgroundColor: '#F8F868'
    },

    buttonAlternative: {
        width: '100%',
        height: 65,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#AADAE5",     /**AADAE5 */
        borderRadius: 12,
        justifyContent: "center"
    },
    buttonAlternativeContainer: {
        paddingHorizontal: '6%',
    },
    buttonAlternativeText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },

    //Botão Continuar
    containerAlternatives: {
        flex: 1,
        justifyContent: "flex-end"
        //backgroundColor: '#F8F868'
    },
    buttonAgir: {
        width: '100%',
        height: 65,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#CDCDCD",     /**22CDCD */
        justifyContent: "center"
    },
    buttonAgirContainer: {
        paddingHorizontal: '7%',
    },
    buttonAgirText: {
        fontSize: 24,
        marginTop: 5,
        fontFamily: 'Poppins-Bold',
        color: 'white',
        textAlign: "center"
    }
})