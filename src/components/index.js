import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { wWidth } from '../configs/dimensions';
import { ChangeSubVariable } from '../screens/SubCategoria/changeSubs';

import {ChangeStepPCR} from '../components/EmergencyStepsControl'

/**Botão quadrado (usado no Emergencias e Subcategoria) */
export function ButtonEmergency({ props, screen, name, textLabelSize = 18, styleExtra = null, buttonSubVar = null }) {
    return (
        <TouchableOpacity                           /* Isso é um Botão que, quando tocado, perde opacidade */
            style={[styles.buttonBox, styleExtra]}
            onPress={() => {
                ChangeSubVariable(buttonSubVar);
                props.navigate(screen);
            }}    /**Quando pressionado, chama a screen passada como parâmetro. Pode ser traduzida como => navigation.navigate('Subcategoria') */
        >
            <View style={{ flex: 1}}>
                <Image
                    style={styles.buttonEmergencyIcon}
                    source={require('../../assets/images/pcrIcon.png')}
                />
            </View>
            <Text style={[styles.buttonBoxText, { fontSize: textLabelSize }]}>{name}</Text>
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
        <TouchableOpacity
            style={styles.buttonInfo}
            onPress={() => props.navigate('Infos')}
        >
            <View style={styles.buttonInfoContainer}>
                <Image
                    style={styles.buttonInfoImage}
                    source={require('../../assets/images/infoIcon.png')}
                />
                <Text style={styles.buttonInfoText}>Informações{'\n'}Importantes</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonInfo: {
        width: 0.53 * wWidth,
        height: 0.125 * wWidth,                        /*NEED TEST RESPONSIVITY*/
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
        fontSize: 17,
        fontFamily: 'Poppins-Regular',
    },
    buttonInfoImage: {
        resizeMode: "contain",
        alignSelf: "flex-start",
        width: '15%',
        height: '100%'
    },

    /**BOTÃO DAS EMERGENCIAS */
    buttonBox: {
        width: 0.39 * wWidth,
        height: 0.39 * wWidth,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#8F8F8F",     /**AADAE5 */
        borderRadius: 8,
        marginBottom: 20,
        elevation: 10,
        justifyContent: "flex-end"      /*MAKES TEXT AT THE BOTTOM' BOX*/
    },
    buttonEmergencyIcon: {
        resizeMode: "contain",
        alignSelf:'center',
        width: '75%',
        height: '100%'
    },
    buttonBoxText: {
        fontFamily: 'Poppins-Regular',
        lineHeight: 20,
        paddingBottom: 4,
        textAlign: "center"
    }
})