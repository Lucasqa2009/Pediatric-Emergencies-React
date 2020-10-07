//import React from 'react';
import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { wWidth } from '../../configs/dimensions'
import { ChangeStepPCR, contentArray,ChangeTextArray } from '../../components/EmergencyStepsControl'

/** Variável que guarda o tamanho do body na tela (84% de largura) > ver em ../../configs/dimensions */
const containerWidth = (84 / 100) * wWidth;

const textPaP1 = "Classificar a gravidade da vítima: Verifique se a criança está consciente, por meio de estímulos vigorosos e perguntando “Você está me ouvindo?”. Em seguida, coloque dois dedos da mão direita no queixo e a mão esquerda na testa, e estenda o pescoço, para abrir as vias aéreas. Cheque se há respiração e pulso."

function PassoAPasso() {
    const [index, setIndex] = useState(0);
    ChangeTextArray()
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tag}><Text style={styles.textTag}>LACTENTE</Text></View>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/Illustrations/PCR/PCR1.png')}
                    />
                </View>

                <Text style={styles.textPaP}>{ChangeStepPCR(index)}</Text> 

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPaP} onPress = {()=> {index >= 1 ? setIndex(index -1): null}}>
                        <Image
                            style={styles.arrowIcon}
                            source={require('../../../assets/images/seta_esquerda.png')}
                        />
                    </TouchableOpacity>
                    {/*Contador */}
                    <Text style={styles.countPages}>{index+1}/{contentArray.length}</Text>
                    {/*Contador */}
                    <TouchableOpacity style={styles.buttonPaP} onPress = {()=> {index < contentArray.length - 1 ? setIndex(index + 1):null}}> 
                        <Image
                            style={styles.arrowIcon}
                            source={require('../../../assets/images/seta_direita.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );
}
/**Essa é outra maneira de fazer o export (depois de declarar a função), é uma forma mais clean que do App.js */
export default PassoAPasso

/**CSS */
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F4FFFE'
    },
    container: {
        flex: 1,
        alignSelf: "center",
        width: containerWidth,
        backgroundColor: '#F4FFFE'
    },
    /**Conteúdo da página de PaP (Passo a Passo) */
    tag: {
        alignSelf: 'center',
        width: '50%',
        height: '8%',
        backgroundColor: '#AADAE5',
        marginBottom: 16,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
    },
    textTag: {
        textAlign: "center",
        fontFamily: "Poppins-Regular",
        fontSize: 22,
        color: '#4B4B4B'
    },
    containerImage: {
        /*backgroundColor: '#C4C4C4',*/
        height: (19 / 30) * containerWidth,
        borderRadius: 5,
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    textPaP: {
        fontSize: 17,
        fontFamily: 'Poppins-Regular',
        backgroundColor: "#F4FFFE",
        height: '40%',
        paddingTop: 10
    },

    /**Botões */
    buttonContainer: {                                                    /**Responsividade zoadíssima */
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#F4FFFE",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonPaP: {
        width: '27%',
        height: '75%',
        backgroundColor: '#22CDCD',
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    countPages: {                                                    /**Responsividade zoadíssima */
        backgroundColor: '#22CDCD',
        width: '30%',
        height: '50%',
        borderRadius: 8,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 30,
        paddingTop: 4,
        color: '#4B4B4B'
    }

})