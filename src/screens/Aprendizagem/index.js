import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ButtonInfoComp, ButtonAprendizagem } from '../../components';


function AprenderScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginTop: 40 }}        /**Limita o tamanho da ScrollView */>
                <ScrollView
                    contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <ButtonAprendizagem props={navigation} name={"Parada Cardiorrespiratória"} subVar={'pcr'}/>
                    <ButtonAprendizagem props={navigation} name={"Engasgo e Sufocamento"}  subVar={'engasgo'}/>
                    <ButtonAprendizagem props={navigation} name={"Queimadura"}  subVar={'queimadura'}/>
                    <ButtonAprendizagem props={navigation} name={"Queda"} subVar={'queda'}/>
                    <ButtonAprendizagem props={navigation} name={"Afogamento"}  subVar={'afogamento'}/>
                    <ButtonAprendizagem props={navigation} name={"Choque Elétrico"}  subVar={'choque'}/>

                </ScrollView>
            </View>

            <ButtonInfoComp props={navigation} />

        </View>
    );
}

export default AprenderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F4FFFE"        /**F47F4E */
    },
    containerCategory: {
        width: '90%',   /**F4FFFE */
    },
    containerCategoryScroll: {
        paddingHorizontal: '3%',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    
})
