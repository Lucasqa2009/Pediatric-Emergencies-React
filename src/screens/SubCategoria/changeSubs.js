import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import { ButtonEmergency } from '../../components';

export var subVariable = null;
export function ChangeSubVariable(props) {
    subVariable = props;
}

function ChangeSubs({ props2 }) {
    return (
        subVariable === 'pcr' ? Prc(props2)
            : subVariable === 'quedas' ? Quedas(props2)
                : subVariable === 'queimaduras' ? Queimaduras(props2)
                    : Replace(props2)
    );

}

function Replace(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
        </View>
    );
}

function Prc(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Menores de 1 ano (lactente)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar= "pcrLac" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Acima de 1 ano até a puberdade (criança)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar= "pcrCrianca"/>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Adolescentes, crianças obesas e adultos" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar= "pcrAdulto"/>
        </View>
    );
}
function Quedas(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Traumatismo Cranioencefálico" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Fratura" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Luxação de Cotovelo" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Trauma de Clavícula" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Trauma de Quadril" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
        </View>
    );
}
function Queimaduras(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="1º grau" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="2º grau" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="3º grau" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} />
        </View>
    );
}

export default ChangeSubs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCCCCC',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    }
})