import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function WinQuiz({ navigation }) {
    return (
        <View style={styles.container}>
            {/**Imagem */}
            <View style={styles.containerRobertinho}>
                <Image
                    style={styles.robertinhoImage}
                    source={require('../../../assets/images/Robertinho/robertinhoHappy.png')} />
            </View>
            {/**Texto Principal */}
            <View style={{ alignItems: "center" }}>
                <Text style={styles.textCongrats}>
                    Parabéns!
                </Text>
            </View>
            <View style={{}}>
                <Text style={{ textAlign: "center", fontFamily: 'Poppins-Regular', fontSize: 15 }}>
                    Você acertou corretamente todos os procedimentos! Continue praticando!
                </Text>
            </View>
            <View style={{ }}>
                <Text style={{ textAlign: "center", fontFamily: 'Poppins-Bold', fontSize: 22 }}>
                    Respostas corretas
                </Text>
            </View>
                <Text style={{ textAlign: "center", fontFamily: 'Poppins-Bold', fontSize: 30 }}>4/4</Text>
            <TouchableOpacity 
            style={{ alignSelf: "center", justifyContent: "center", width: 60, height: 60, borderRadius: 30, backgroundColor: "#AADAE5", elevation:10, marginTop:25 }}
            onPress={() => navigation.navigate('HomeStack')}
            >
                <Image style={{ alignSelf: "center", resizeMode: "contain", width: '70%', height: '70%', marginTop: -5 }} source={require('../../../assets/images/homeButton.png')} />
            </TouchableOpacity>



        </View>
    );
}

export default WinQuiz

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        width: '84%',
    },
    containerRobertinho: {
        width: '100%',
        height: '40%'
    },
    robertinhoImage: {
        resizeMode: "contain",
        width: '100%',
        height: '100%',
    },
    textCongrats: {
        width: '100%',
        color: "#22CDCD",
        fontSize: 36,
        fontFamily: 'Poppins-Bold',
        textAlign: "center",
        marginTop:-25,
        marginBottom:-10
    },
    scoreContainer: {
        width: 100,
        height: 45,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 22,
        backgroundColor: "#AADAE5",
        marginTop:10
    },

    containerAlternatives: {
        //backgroundColor: '#F8F868'
    },

    buttonAlternative: {
        width: '100%',
        height: 65,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#AADAE5",     /**AADAE5 */
        borderRadius: 40,
        marginVertical: 4,
        elevation: 8,
        justifyContent: "center"
    },
    buttonAlternativeContainer: {
        paddingHorizontal: '7%',
    },
    buttonAlternativeText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    }
})