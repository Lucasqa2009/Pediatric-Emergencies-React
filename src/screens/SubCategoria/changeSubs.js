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
                    : subVariable === 'engasgo' ? Engasgo(props2)
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
            <ButtonEmergency
                props={props3}
                screen="PassoAPasso"
                name="Menores de 1 ano (lactente)"
                styleExtra={{ marginHorizontal: 10 }}
                textLabelSize={16}
                buttonSubVar="pcrLac"
                titleHeader="Parada Cardiorrespiratória: Lactentes"
            />
            <ButtonEmergency
                props={props3}
                screen="PassoAPasso"
                name="Acima de 1 ano até a puberdade (criança)"
                styleExtra={{ marginHorizontal: 10 }}
                textLabelSize={16}
                buttonSubVar="pcrCrianca"
                titleHeader="Parada Cardiorrespiratória: Crianças"
            />
            <ButtonEmergency
                props={props3}
                screen="PassoAPasso"
                name="Adolescentes, crianças obesas e adultos"
                styleExtra={{ marginHorizontal: 10 }}
                textLabelSize={16}
                buttonSubVar="pcrAdulto"
                titleHeader="Parada Cardiorrespiratória: Adultos"
            />
        </View>
    );
}
function Quedas(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Traumatismo Cranioencefálico" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="traumaCranio" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Fratura" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="fratura"/>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Luxação de Cotovelo" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="luxCotovelo" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Trauma de Clavícula" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="luxClavicula" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Trauma de Quadril" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="traumaQuadril" />
        </View>
    );
}
function Queimaduras(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="1º grau" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="primeiroGrau" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="2º grau" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="segundoGrau" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="3º grau" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="terceiroGrau" />
        </View>
    );
}
function Engasgo(props3) {
    return (
        <View style={styles.container}>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Menor de 1 ano (Lactente)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasLac"/>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Menor de 1 ano INCONSCIENTE (Lactente)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasInconsistente" />
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Maior de 1 ano (Criança)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasCrianca"/>
            <ButtonEmergency props={props3} screen="PassoAPasso" name="Maior de 1 ano INCONSCIENTE (Criança)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasInconsistenciaCrianca"/>
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