import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function ButtonAprendizagem({ props }) {
    return (
        <TouchableOpacity
            style={styles.buttonAp}
            onPress={() => props.navigate('Subcategoria')}
        >
            <Text>Olá</Text>
        </TouchableOpacity>
    );
}

/** Tem nada ainda da tela de aprendizagem*/
function AprenderScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ height: '61%' }}        /**Limita o tamanho da ScrollView */>
                <ScrollView
                    contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <ButtonAprendizagem props={navigation} />
                    <ButtonAprendizagem props={navigation} />
                    <ButtonAprendizagem props={navigation} />
                    <ButtonAprendizagem props={navigation} />
                    <ButtonAprendizagem props={navigation} />
                    <ButtonAprendizagem props={navigation} />

                </ScrollView>
            </View>
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
        width: '90%',
        backgroundColor: "#58585E",     /**F4FFFE */
    },
    containerCategoryScroll: {
        paddingHorizontal: '3%',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    buttonAp: {
        width: '100%',
        height: 50,
        marginBottom: 18,
        backgroundColor: '#AAAAAA',
        borderRadius: 3,
        elevation: 10
    }
})
