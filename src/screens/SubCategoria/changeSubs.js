import React from 'react';
import { View, StyleSheet, } from 'react-native';

import { ButtonSubCategory } from '../../components';

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
export default ChangeSubs;



function Replace(props3) {
    return (
        <View style={styles.container}>
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Replace" styleExtra={{ marginHorizontal: 10 }} />
        </View>
    );
}

function Prc(props3) {
    return (
        <View style={styles.container}>
            <ButtonSubCategory
                props={props3}
                screen="PassoAPasso"
                name="Menores de 1 ano (lactente)"
                styleExtra={{ marginHorizontal: 10 }}
                buttonSubVar="pcrLac"
                titleHeader="Parada Cardiorrespiratória: Lactentes"
            />
            <ButtonSubCategory
                props={props3}
                screen="PassoAPasso"
                name="Acima de 1 ano até a puberdade (criança)"
                styleExtra={{ marginHorizontal: 10 }}
                buttonSubVar="pcrCrianca"
                titleHeader="Parada Cardiorrespiratória: Crianças"
            />
            <ButtonSubCategory
                props={props3}
                screen="PassoAPasso"
                name="Adolescentes, crianças obesas e adultos"
                styleExtra={{ marginHorizontal: 10 }}
                buttonSubVar="pcrAdulto"
                titleHeader="Parada Cardiorrespiratória: Adultos"
            />
        </View>
    );
}
function Quedas(props3) {
    return (
        <View style={styles.container}>
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Traumatismo Cranioencefálico" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="traumaCranio" titleHeader="Traumatismo Cranioencefálico" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Fratura" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="fratura" titleHeader="Fratura" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Luxação de Cotovelo" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="luxCotovelo" titleHeader="Luxação de Cotovelo" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Trauma de Clavícula" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="luxClavicula" titleHeader="Trauma de Clavícula" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Trauma de Quadril" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="traumaQuadril" titleHeader="Trauma de Quadril" />
        </View>
    );
}
function Queimaduras(props3) {
    return (
        <View style={styles.container}>
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="1º Grau" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="primeiroGrau" titleHeader="Queimadura de Primeiro Grau" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="2º Grau" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="segundoGrau" titleHeader="Queimadura de Segundo Grau" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="3º Grau" styleExtra={{ marginHorizontal: 10 }} buttonSubVar="terceiroGrau" titleHeader="Queimadura de Terceiro Grau" />
        </View>
    );
}
function Engasgo(props3) {
    return (
        <View style={styles.container}>
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Menor de 1 ano (Lactente)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasLac" titleHeader="Engasgo ou Sufocamento em Lactente" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Menor de 1 ano INCONSCIENTE (Lactente)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasInconsistente" titleHeader="Engasgo ou sufocamento em Lactente inconsciente" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Maior de 1 ano (Criança)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasCrianca" titleHeader="Engasgo ou Sufocamento em Criança" />
            <ButtonSubCategory props={props3} screen="PassoAPasso" name="Maior de 1 ano INCONSCIENTE (Criança)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={16} buttonSubVar="engasInconsistenciaCrianca" titleHeader="Engasgo ou Sufocamento em Criança inconsciente" />
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52,52,52,0.93)',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    }
})