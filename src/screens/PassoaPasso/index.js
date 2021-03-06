//import React from 'react';
import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { wWidth } from '../../configs/dimensions'
import { ChangeStepPCR, contentArray, ChangeTextArray, ImageStep } from '../../components/EmergencyStepsControl'

import { CommonActions } from '@react-navigation/native';
import { ChangeSubVariable } from '../SubCategoria/changeSubs'
import { titleHeader } from '../../components'

/** Variável que guarda o tamanho do body na tela (84% de largura) > ver em ../../configs/dimensions */
const containerWidth = (84 / 100) * wWidth;

import { BoxShadow } from 'react-native-shadow';
const shadowOpt = {
    width: 90,
    height: 75,
    color: "#000",
    border: 4,
    radius: 14,
    opacity: 0.3,
    x: 0,
    y: 3,
}


const PassoAPasso = ({ navigation }) => {
    /**Corrige bug de voltar do PaP e sumir titulo das subcategorias */
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        if (titleHeader === "Parada Cardiorrespiratória: Lactentes"
                            || titleHeader === "Parada Cardiorrespiratória: Crianças"
                            || titleHeader === "Parada Cardiorrespiratória: Adultos"
                        ) {
                            ChangeSubVariable("pcr")
                        } else if (titleHeader === "Traumatismo Cranioencefálico"
                            || titleHeader === "Luxação de Cotovelo"
                            || titleHeader === "Trauma de Clavícula"
                            || titleHeader === "Fratura"
                            || titleHeader === "Trauma de Quadril"
                        ) {
                            ChangeSubVariable("quedas")
                        } else if (titleHeader === "Queimadura de Primeiro Grau"
                            || titleHeader === "Queimadura de Segundo Grau"
                            || titleHeader === "Queimadura de Terceiro Grau"
                        ) {
                            ChangeSubVariable("queimaduras")
                        } else if (titleHeader === "Engasgo ou Sufocamento em Lactente"
                            || titleHeader === "Engasgo ou sufocamento em Lactente inconsciente"
                            || titleHeader === "Engasgo ou Sufocamento em Criança"
                            || titleHeader === "Engasgo ou Sufocamento em Criança inconsciente"
                        ) {
                            ChangeSubVariable("engasgo")
                        }
                        navigation.dispatch(CommonActions.goBack());
                    }
                    }
                >
                <View style={{ width: 25, height: 20, marginLeft:11}}>
                    <Image
                        style={{ resizeMode: "contain", width: '100%', height: '100%' }}
                        source={require('../../../assets/images/backImage.png')}
                    />
                </View>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    /** Carrega o array correto de texto à depender do botão apertado antes */
    const [index, setIndex] = useState(0);
    ChangeTextArray()

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                {/* <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={photoArray[index]}
                    />
                </View> */}
                <ImageStep indexStep={index} />

                <View style={{ flex: 1 }}>
                    {/** Texto */}
                    <Text style={styles.textPaP}>{ChangeStepPCR(index)}</Text>
                    {/**Botão Esquerdo */}
                    <View style={styles.buttonContainer}>
                        <BoxShadow setting={shadowOpt}>
                            <TouchableOpacity style={styles.buttonPaP} onPress={() => { index >= 1 ? setIndex(index - 1) : null }}>
                                <Image
                                    style={styles.arrowIcon}
                                    source={require('../../../assets/images/seta_esquerda.png')}
                                />
                            </TouchableOpacity>
                        </BoxShadow>

                        {/*Contador */}
                        <Text style={styles.countPages}>{index + 1}/{contentArray.length}</Text>
                        {/*Contador */}

                        {/**Botão Direito */}
                        <BoxShadow setting={shadowOpt}>
                            <TouchableOpacity style={styles.buttonPaP} onPress={() => { index < contentArray.length - 1 ? setIndex(index + 1) : null }}>
                                <Image
                                    style={styles.arrowIcon}
                                    source={require('../../../assets/images/seta_direita.png')}
                                />
                            </TouchableOpacity>
                        </BoxShadow>
                    </View>
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
    },
    container: {
        flex: 1,
        alignSelf: "center",
        width: containerWidth,
        backgroundColor: '#F4FFFE',
        paddingTop: 40                                                                                       /**COLOQUEI ESSE PADDING PODE OU NAO AFETAR RESPONSIVIDADE */
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
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    textPaP: {
        flex: 1,
        fontSize: 17,
        fontFamily: 'Poppins-Regular',
        backgroundColor: "#F4FFFE",
        height: '40%',
        paddingTop: 10
    },

    /**Botões */
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonPaP: {
        width: 90,
        height: 75,
        backgroundColor: '#22CDCD',
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    countPages: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 30,
        paddingTop: 4,
        color: '#4B4B4B'
    }

})