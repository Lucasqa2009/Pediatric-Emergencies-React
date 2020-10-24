import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import {wWidth} from '../../configs/dimensions'

import { BoxShadow } from 'react-native-shadow';
const shadowOpt = {
    width: 0.83*wWidth,
    height: 50,
    color: "#000",
    border: 4,
    radius: 25,
    opacity: 0.3,
    x: 0,
    y: 3
}

function ButtonSettings({ props, name, screens }) {
    return (
        <BoxShadow setting={shadowOpt}>
            <TouchableOpacity
                style={styles.buttonInfo}
                onPress={() => props.navigate(screens)}
            >
                <Text style={styles.buttonInfoText}>{name}</Text>
            </TouchableOpacity>
        </BoxShadow>
    );
}

function Settings({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <View style={{ flex: 1, width: '100%', backgroundColor: '#F4FFFE' }}>
            <View style={{ flex: 1, width: '83%', alignSelf: "center", justifyContent: "flex-end", marginBottom: 25 }}>
                {/*<Switch
                    style={{ transform: [{scale: 2}], alignSelf:"flex-end" }}
                    trackColor={{ false: "#A2BBBD", true: "#77D3D3" }}
                    thumbColor="#1A7C7C"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />*/}
                <View style={{alignSelf:"center"}}><ButtonSettings props={navigation} name="Sobre" screens="Sobre" /></View>
            </View>
        </View>
    );
}

export default Settings

const styles = StyleSheet.create({
    buttonInfo: {
        width: '100%',
        height: 50,                        /*NEED TEST RESPONSIVITY*/
        justifyContent: "center",
        backgroundColor: "#AADAE5",     /**AADAE5 */
        borderRadius: 27,
    },
    buttonInfoText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
    }
})