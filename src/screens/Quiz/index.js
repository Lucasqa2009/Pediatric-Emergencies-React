import React from 'react';
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

export function ButtonAlternativa({ props, alternative }) {
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
                            Enquanto um dos alunos ligava para o SAMU, outro verificou que a criança não estava respirando e decidiu começar as manobras de reanimação, chamando o professor para ajudar. Como eles devem realizar a reanimação?

                        </Text>
                    </View>
                </View>

                <View style={styles.containerAlternatives}>
                    <ButtonAlternativa props={navigation} alternative="Retirar acessórios, perto do ferimento, e roupa, próxima da queimadura, mas que não está aderida à pele. " />
                    <ButtonAlternativa props={navigation} alternative="Passar pomada na queimadura" />
                    <ButtonAlternativa props={navigation} alternative="Levar a criança para o médico" />
                    <ButtonAlternativa props={navigation} alternative="Manter o local da lesão em repouso" />
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
        backgroundColor: "#22CDCD",     /**AADAE5 */
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