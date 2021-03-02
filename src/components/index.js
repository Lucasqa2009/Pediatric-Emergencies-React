import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { wWidth } from '../configs/dimensions';
import { ChangeSubVariable } from '../screens/SubCategoria/changeSubs';

import { BoxShadow } from 'react-native-shadow';
const shadowOpt = {
    width: 190,
    height: 50,
    color: "#000",
    border: 4,
    radius: 25,
    opacity: 0.3,
    x: 0,
    y: 3,
}
const shadowOptEmergency = {
    width: 0.39 * wWidth,
    height: 0.39 * wWidth,
    color: "#000",
    border: 4,
    radius: 12,
    opacity: 0.3,
    x: 0,
    y: 3,
    style: { marginBottom: 20 }
}
const shadowOptAprendizado = {
    width: 0.85 * wWidth,
    height: 55,
    color: "#000",
    border: 4,
    radius: 12,
    opacity: 0.3,
    x: 0,
    y: 3,
    style: { marginBottom: 18 }
}

export var titleHeader = "";
export function ChangeTitleHeader(param) {
    titleHeader = param
}

export function ShowTitlePaP() {
    return (<Text style={styles.headerTitleCSS}>{titleHeader}</Text>);
}

/**Botão quadrado (usado no Emergencias e Subcategoria) */
export function ButtonEmergency({ props, screen, name, textLabelSize = 18, styleExtra = null, buttonSubVar = null, titleHeader = "" }) {

    let emergencyIcon;

    switch (buttonSubVar) {
        case 'pcr':
            emergencyIcon = require('../../assets/images/EmergencyIcons/pcrIcon.png')
            break;
        case 'engasgo':
            emergencyIcon = require('../../assets/images/EmergencyIcons/engasgoIcon.png')
            break;
        case 'queimaduras':
            emergencyIcon = require('../../assets/images/EmergencyIcons/queimadurasIcon.png')
            break;
        case 'quedas':
            emergencyIcon = require('../../assets/images/EmergencyIcons/quedaIcon.png')
            break;
        case 'afogamento':
            emergencyIcon = require('../../assets/images/EmergencyIcons/afogamentoIcon.png')
            break;
        case 'choques':
            emergencyIcon = require('../../assets/images/EmergencyIcons/choqueIcon.png')
            break;

        default:
            break;
    }

    return (
        <View style={styleExtra}>
            <BoxShadow setting={shadowOptEmergency}>
                <TouchableOpacity                           /* Isso é um Botão que, quando tocado, perde opacidade */
                    style={styles.buttonBox}
                    onPress={() => {
                        ChangeSubVariable(buttonSubVar);
                        ChangeTitleHeader(titleHeader);
                        props.navigate(screen);
                    }}    /**Quando pressionado, chama a screen passada como parâmetro. Pode ser traduzida como => navigation.navigate('Subcategoria') */
                >
                    <View style={{ flex: 3, paddingTop: 20 }}>
                        <Image
                            style={styles.buttonEmergencyIcon}
                            source={emergencyIcon}
                        />
                    </View>
                    <View style={{ flex: 2, justifyContent: "flex-end" }}><Text style={[styles.buttonBoxText, { fontSize: textLabelSize }]}>{name}</Text></View>
                </TouchableOpacity>
            </BoxShadow>
        </View>
    );
}

/**Botão quadrado (usado no Subcategoria) */
export function ButtonSubCategory({ props, screen, name, textLabelSize = 18, buttonSubVar = null, titleHeader = "" }) {

    let emergencyIcon;

    switch (buttonSubVar) {
        case 'pcrLac':
            emergencyIcon = require('../../assets/images/EmergencyIcons/pcrIcon.png')
            break;
        case 'pcrCrianca':
            emergencyIcon = require('../../assets/images/EmergencyIcons/pcrIcon.png')
            break;
        case 'pcrAdulto':
            emergencyIcon = require('../../assets/images/EmergencyIcons/pcrIcon.png')
            break;
        case 'engasLac':
            emergencyIcon = require('../../assets/images/EmergencyIcons/engasgoIcon.png')
            break;
        case 'engasCrianca':
            emergencyIcon = require('../../assets/images/EmergencyIcons/engasgoIcon.png')
            break;
        case 'engasInconsistente':
            emergencyIcon = require('../../assets/images/EmergencyIcons/engasgoIcon.png')
            break;
        case 'engasInconsistenciaCrianca':
            emergencyIcon = require('../../assets/images/EmergencyIcons/engasgoIcon.png')
            break;
        case 'primeiroGrau':
            emergencyIcon = require('../../assets/images/EmergencyIcons/queimadurasIcon.png')
            break;
        case 'segundoGrau':
            emergencyIcon = require('../../assets/images/EmergencyIcons/queimadurasIcon.png')
            break;
        case 'terceiroGrau':
            emergencyIcon = require('../../assets/images/EmergencyIcons/queimadurasIcon.png')
            break;
        case 'traumaCranio':
            emergencyIcon = require('../../assets/images/EmergencyIcons/quedaIcon.png')
            break;
        case 'fratura':
            emergencyIcon = require('../../assets/images/EmergencyIcons/quedaIcon.png')
            break;
        case 'luxCotovelo':
            emergencyIcon = require('../../assets/images/EmergencyIcons/quedaIcon.png')
            break;
        case 'luxClavicula':
            emergencyIcon = require('../../assets/images/EmergencyIcons/quedaIcon.png')
            break;
        case 'traumaQuadril':
            emergencyIcon = require('../../assets/images/EmergencyIcons/quedaIcon.png')
            break;

        default:
            break;
    }

    return (
        <BoxShadow setting={shadowOptAprendizado}>
            <TouchableOpacity                           /* Isso é um Botão que, quando tocado, perde opacidade */
                style={styles.buttonAp}
                onPress={() => {
                    ChangeSubVariable(buttonSubVar);
                    ChangeTitleHeader(titleHeader);
                    props.navigate(screen);
                }}    /**Quando pressionado, chama a screen passada como parâmetro. Pode ser traduzida como => navigation.navigate('Subcategoria') */
            >
                <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 10 }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={styles.buttonQuizIcon}
                            source={emergencyIcon}
                        />
                    </View>
                    <View style={{ flex: 7, justifyContent: "center", marginTop: 0 }}>
                        <Text style={[styles.buttonBoxTextTeste, { fontSize: textLabelSize }]}>{name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </BoxShadow>
    );
}

/**Botão de Informações Importantes, que recebe como props(propriedade) o navigation, para navegar nas telas */
export function ButtonInfoComp({ props }) {
    return (
        <View style={{ marginVertical: 40 }}>
            <BoxShadow setting={shadowOpt}>
                <TouchableOpacity
                    style={styles.buttonInfo}
                    onPress={() => props.navigate('Infos')}
                >
                    <View style={styles.buttonInfoContainer}>
                        <Image
                            style={styles.buttonInfoImage}
                            source={require('../../assets/images/i.png')}
                        />
                        <Text style={styles.buttonInfoText}>Informações{'\n'}Importantes</Text>
                    </View>
                </TouchableOpacity>
            </BoxShadow>
        </View>
    );
}

export function TitleInformative({ name }) {
    return (
        <Text style={styles.infoText}>{name}</Text>
    );
}

const styles = StyleSheet.create({
    headerTitleCSS: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    buttonInfo: {
        width: 190,
        height: 50,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#FF6464",     /**AADAE5 */
        borderRadius: 27,
    },
    buttonInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    buttonInfoText: {
        height: '100%',
        textAlign: 'right',
        lineHeight: 19,
        paddingTop: 9,
        fontSize: 19,
        fontFamily: 'Poppins-Regular',
        color: 'white'
    },
    buttonInfoImage: {
        resizeMode: "contain",
        alignSelf: "center",
        width: '15%',
        height: '55%'
    },

    /**BOTÃO DAS EMERGENCIAS */
    buttonBox: {
        width: 0.39 * wWidth,
        height: 0.39 * wWidth,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#AADAE5",     /**AADAE5 */
        borderRadius: 12,
        justifyContent: "flex-end"      /*MAKES TEXT AT THE BOTTOM' BOX*/
    },
    buttonEmergencyIcon: {
        resizeMode: "contain",
        alignSelf: 'center',
        width: '75%',
        height: '100%'
    },
    buttonBoxText: {
        fontFamily: 'Poppins-Regular',
        lineHeight: 20,
        paddingBottom: 4,
        textAlign: "center"
    },

    /**BOTÃO DOS TESTES */
    buttonAp: {
        width: 0.85 * wWidth,
        height: 55,
        backgroundColor: '#AADAE5',
        borderRadius: 12,
    },
    buttonQuizIcon: {
        resizeMode: "contain",
        width: '60%',
        height: '100%',
        alignSelf: 'center',

    },
    buttonBoxTextTeste: {
        fontFamily: 'Poppins-Regular',
        lineHeight: 23,
        fontSize: 18,
    },

    /**Caixa de Titulo do Sobre/Infos */
    infoTitleContainer: {
        backgroundColor: '#AADAE5',
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginBottom: 10
    },
    infoText: {
        paddingTop: 4,
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        marginBottom: 10
    },
})