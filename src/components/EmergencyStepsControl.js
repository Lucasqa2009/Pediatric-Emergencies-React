import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { subVariable } from '../screens/SubCategoria/changeSubs'
import { wWidth } from '../configs/dimensions'

import textJSON from '../Texts/index.json';



export var contentArray = [];
export var photoArray = [];

//sessão PRC
var contentArrayPhotoAdulto = [require('../../assets/Prc2/01.png'), require('../../assets/Prc2/02.png'), require('../../assets/Prc2/192.png'),
    null, require('../../assets/Prc3/05.png'),
require('../../assets/Prc3/07.png'), null, require('../../assets/Prc2/07.png'), require('../../assets/Prc2/09.png'),
require('../../assets/Prc2/10.png'), null, null, null];
var contentArrayPhotoPrcLac = [require('../../assets/Prc1/01.png'), require('../../assets/Prc1/02.png'),
require('../../assets/Prc1/03.png'), require('../../assets/Prc1/04.png'), require('../../assets/Prc1/05.png'),
require('../../assets/Prc1/06.png'), require('../../assets/Prc1/07.png'), require('../../assets/Prc1/08.png'), require('../../assets/Prc1/09.png'),
require('../../assets/Prc1/10.png'), null, null, null];
var contentArrayPhotoPrcCrianca = [require('../../assets/Prc2/01.png'), require('../../assets/Prc2/02.png'), require('../../assets/Prc2/192.png'),
    null, require('../../assets/Prc2/05.png'), require('../../assets/Prc2/06.png'), require('../../assets/Prc2/08.png'),
require('../../assets/Prc2/07.png'), require('../../assets/Prc2/09.png'),
require('../../assets/Prc2/10.png'), null, null, null];

//sessão Quedas 
var contentArrayPhotoFratura = [null, null, null, require('../../assets/queda/fratura/192.png'), require('../../assets/queda/fratura/nao.png'), require('../../assets/queda/fratura/enfaixar.png')];
var contentArrayPhotoCotovelo = [null, require('../../assets/queda/cotovelo/tipoia.png'), null, require('../../assets/queda/cotovelo/compressa.png'), require('../../assets/queda/cotovelo/192.png')];
var contentArrayPhotoLuxClavicula = [null, require('../../assets/queda/clavicula/tipoia.png'), require('../../assets/queda/clavicula/192.png')];
var contentArrayPhotoTraumaQuadril = [null, null, require('../../assets/queda/quadril/192.png'), require('../../assets/queda/quadril/quadril.png')];
var contentArrayPhotoTraumaCranio = [null, null, require('../../assets/queda/clavicula/192.png'), null, null];

//sessão Queimadura
var contentArrayPhotoPrimeiroGrau = [require('../../assets/queimadura/primeiro.png'), require('../../assets/queimadura/lavar.png'), null, require('../../assets/queimadura/enfaixar.png'), null];
var contentArrayPhotoSegundoGrau = [require('../../assets/queimadura/segundo.png'), null, require('../../assets/queimadura/lavar.png'), null, require('../../assets/queimadura/enfaixar.png'), null];
var contentArrayPhotoTerceiroGrau = [require('../../assets/queimadura/terceiro.png'), null, require('../../assets/queimadura/lavar.png'), null, require('../../assets/queimadura/enfaixar.png'), null];

//sessão Engasgo
var contentArrayPhotoEngasLac = [];
var contentArrayPhotoEngasInconsistente = [null, require('../../assets/Prc1/03.png'), require('../../assets/Prc1/06.png'), require('../../assets/Engasgo/engasgoMaiorInconsciente.png'), require('../../assets/queda/fratura/nao.png')];
var contentArrayPhotoEngasCrianca = [null, null, require('../../assets/Engasgo/engasgoMaior1.png'), null, null, null];
var contentArrayPhotoEngasInconsistenciaCrianca = [null, require('../../assets/Prc1/03.png'), require('../../assets/Prc1/06.png'), require('../../assets/Engasgo/engasgoMaiorInconsciente.png'), require('../../assets/queda/fratura/nao.png')];

//sessão afogamento 
var contentArrayPhotoAfogamento = [require('../../assets/afogamento/afogamento01.png'),
require('../../assets/afogamento/192.png'),
require('../../assets/afogamento/afogamento03.png'), null, null, null,
require('../../assets/afogamento/afogamento07.png'),
require('../../assets/afogamento/afogamento08.png'),
require('../../assets/afogamento/afogamento09.png'), null, null, null];

//sessã choque
var contentArrayPhotoChoque = [require('../../assets/choque/choque01.png'),
require('../../assets/choque/choque02.png'), require('../../assets/choque/192.png'),
require('../../assets/choque/choque04.png'), null, null];

export function ChangeStepPCR(textIndex) {
    return (
        contentArray[textIndex]
    );
}

export function ChangeTextArray() {
    return (
        //PRC
        subVariable === "pcrLac" ? (contentArray = textJSON.pcrLac, photoArray = contentArrayPhotoPrcLac)
            : subVariable === "pcrCrianca" ? (contentArray = textJSON.pcrCrianca, photoArray = contentArrayPhotoPrcCrianca)
                : subVariable === "pcrAdulto" ? (contentArray = textJSON.pcrAdulto, photoArray = contentArrayPhotoAdulto)
                    //Queda
                    : subVariable === "traumaCranio" ? (contentArray = textJSON.quedaTCE, photoArray = contentArrayPhotoTraumaCranio)
                        : subVariable === "fratura" ? (contentArray = textJSON.quedaFratura, photoArray = contentArrayPhotoFratura)
                            : subVariable === "luxCotovelo" ? (contentArray = textJSON.quedaCotovelo, photoArray = contentArrayPhotoCotovelo)
                                : subVariable === "luxClavicula" ? (contentArray = textJSON.quedaClavicula, photoArray = contentArrayPhotoLuxClavicula)
                                    : subVariable === "traumaQuadril" ? (contentArray = textJSON.quedaQuadril, photoArray = contentArrayPhotoTraumaQuadril)
                                        //Queimadura
                                        : subVariable === "primeiroGrau" ? (contentArray = textJSON.queimadura1grau, photoArray = contentArrayPhotoPrimeiroGrau)
                                            : subVariable === "segundoGrau" ? (contentArray = textJSON.queimadura2grau, photoArray = contentArrayPhotoSegundoGrau)
                                                : subVariable === "terceiroGrau" ? (contentArray = textJSON.queimadura3grau, photoArray = contentArrayPhotoTerceiroGrau)
                                                    //Engasgo
                                                    : subVariable === "engasLac" ? (contentArray = textJSON.engasgoLac, photoArray = contentArrayPhotoEngasLac)
                                                        : subVariable === "engasInconsistente" ? (contentArray = textJSON.engasgoLacInconsciente, photoArray = contentArrayPhotoEngasInconsistente)
                                                            : subVariable === "engasCrianca" ? (contentArray = textJSON.engasgoCrianca, photoArray = contentArrayPhotoEngasCrianca)
                                                                : subVariable === "engasInconsistenciaCrianca" ? (contentArray = textJSON.engasgoCriancaInconsciente, photoArray = contentArrayPhotoEngasInconsistenciaCrianca)
                                                                    //Choque
                                                                    : subVariable === "choques" ? (contentArray = textJSON.choque, photoArray = contentArrayPhotoChoque)
                                                                        //Afogamento 
                                                                        : (contentArray = textJSON.afogamento, photoArray = contentArrayPhotoAfogamento)
    );
}

export function ImageStep({ indexStep }) {
    if (photoArray[indexStep] != null) {
        return (
            <View style={styles.containerImage}>
                <Image
                    style={styles.image}
                    source={photoArray[indexStep]}
                />
            </View>
        );
    } else {
        return (null);
    }
}





const containerWidth = (84 / 100) * wWidth;

// CSS
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F4FFFE'
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