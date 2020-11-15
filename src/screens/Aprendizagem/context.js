import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { wWidth } from '../../configs/dimensions';

export function ButtonAgir({ props }) {
    return (
            <TouchableOpacity
                style={styles.buttonAgir}
                onPress={() => props.navigate('Quiz')}
            >
                <View style={styles.buttonAgirContainer}>
                    <Text style={styles.buttonAgirText}>Continuar</Text>
                </View>
            </TouchableOpacity>
    );
}

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function QuizContext({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.containerRobertinho}>
                    <Image
                        style={styles.robertinhoImage}
                        source={require('../../../assets/images/Robertinho/robertinhoThink1.png')} />
                </View>
                <View style={{ justifyContent: "center" }} /**AJEITAR PERGUNTA QUE NÃO ESTÁ CENTRALIZADA */>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginBottom: 15 }}>
                        Texto texto do CONTEXTO
                        </Text>
                </View>
            </View>

            <View style={styles.containerAlternatives}>
                <ButtonAgir props={navigation} />
            </View>

        </View>
    );
}

export default QuizContext;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F4FFFE'
    },
    container: {
        alignSelf: "center",
        width: 0.84 * wWidth,
        // backgroundColor: '#F68686'
    },
    containerRobertinho: {
        // backgroundColor: '#8686F6',
        height: 200,
        marginVertical: 25
    },
    robertinhoImage: {
        resizeMode: "contain",
        width: '100%',
        height: '100%',
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