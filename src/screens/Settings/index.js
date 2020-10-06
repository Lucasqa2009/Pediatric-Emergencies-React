import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

function ButtonSettings({ props, name, screens }) {
    return (
        <TouchableOpacity
            style={styles.buttonInfo}
            onPress={() => props.navigate(screens)}
        >
            <Text style={styles.buttonInfoText}>{name}</Text>
        </TouchableOpacity>
    );
}

function Settings({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <View style={{ flex: 1, width: '100%', backgroundColor: '#F4FFFE' }}>
            <View style={{ flex: 1, width: '83%', alignSelf: "center", justifyContent: "space-between", marginBottom: 25 }}>
                <Switch
                    style={{ transform: [{scale: 2}], alignSelf:"flex-end" }}
                    trackColor={{ false: "#A2BBBD", true: "#77D3D3" }}
                    thumbColor="#1A7C7C"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <ButtonSettings props={navigation} name="Sobre" screens="Sobre" />
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
        elevation: 8,
    },
    buttonInfoText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
    }
})