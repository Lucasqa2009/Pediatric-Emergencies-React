import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { wWidth } from '../configs/dimensions';
import { ChangeSubVariable } from '../screens/SubCategoria/changeSubs';

import {ChangeStepPCR} from '../components/EmergencyStepsControl'

/**Botão quadrado (usado no Emergencias e Subcategoria) */
export function ButtonEmergency({ props, screen, name, textLabelSize = 18, styleExtra = null, buttonSubVar = null }) {

    let emergencyIcon;

    switch (buttonSubVar) {
        case 'pcr':
            emergencyIcon = require('../../assets/images/EmergencyIcons/pcrIcon.png')
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
        case 'engasgo':
            emergencyIcon = require('../../assets/images/EmergencyIcons/engasgoIcon.png')
            break;

        default:
            break;
    }

    return (
        <TouchableOpacity                           /* Isso é um Botão que, quando tocado, perde opacidade */
            style={[styles.buttonBox, styleExtra]}
            onPress={() => {
                ChangeSubVariable(buttonSubVar);
                props.navigate(screen);
            }}    /**Quando pressionado, chama a screen passada como parâmetro. Pode ser traduzida como => navigation.navigate('Subcategoria') */
        >
            <View style={{ flex: 3, paddingTop: 20}}>
                <Image
                    style={styles.buttonEmergencyIcon}
                    source={emergencyIcon}
                />
            </View>
            <View style={{flex:2, justifyContent:"flex-end"}}><Text style={[styles.buttonBoxText, { fontSize: textLabelSize }]}>{name}</Text></View>
        </TouchableOpacity>
    );
}

//Botão inutilizado por enquanto
export function ButtonPaPEmergency({ props, screen, name, textLabelSize = 18, styleExtra = null }) {
    return (
        <TouchableOpacity                           /* Isso é um Botão que, quando tocado, perde opacidade */
            style={[styles.buttonBox, styleExtra]}
            onPress={() => {
                props.navigate(screen);
            }}    /**Quando pressionado, chama a screen passada como parâmetro. Pode ser traduzida como => navigation.navigate('Subcategoria') */
        >
            <Text style={[styles.buttonBoxText, { fontSize: textLabelSize }]}>{name}</Text>
        </TouchableOpacity>
    );
}

function ButtonAprendizagem({ props, screen, name, textLabelSize = 18 }) {
    return (
        <TouchableOpacity
            style={styles.buttonAp}
            onPress={() => props.navigate('Subcategoria')}
        >
            <Text>Olá</Text>
        </TouchableOpacity>
    );
}

/**Botão de Informações Importantes, que recebe como props(propriedade) o navigation, para navegar nas telas */
export function ButtonInfoComp({ props }) {
    return (
        <View style={{marginVertical:40}}>
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
        </View>
    );
}

export function TitleInformative({name}) {
    return (
        <View style={styles.infoTitleContainer}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.infoText}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonInfo: {
        width: 190,
        height: 50,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#FF6464",     /**AADAE5 */
        borderRadius: 27,
        elevation: 8,
    },
    buttonInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    buttonInfoText: {
        textAlign: 'right',
        lineHeight: 20,
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
        borderRadius: 8,
        marginBottom: 20,
        elevation: 10,
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
        fontSize: 20
    },
})