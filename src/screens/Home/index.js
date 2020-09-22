import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { ceil } from 'react-native-reanimated';

function Categoria({ props, page, name }){
    return(
        <TouchableOpacity                           /* This is a button */
            style={styles.buttonBox}
            onPress={() => props.navigate(page)}    /**When pressed, navigate to 'page' screen */
        >
            <Text style={styles.buttonBoxText}>{name}</Text>
        </TouchableOpacity>
    );
}

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{height:'61%'}}>
                <ScrollView contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <Categoria props={navigation} page='Subcategoria' name='Parada Cardíaca e Respiratória (?)'/>
                    <Categoria props={navigation} page='Subcategoria' name='Queimaduras'/>
                    <Categoria props={navigation} page='Subcategoria' name='Quedas'/>
                    <Categoria props={navigation} page='Subcategoria' name='Afogamento'/>
                    <Categoria props={navigation} page='Subcategoria' name='Engasgo e Sufocamento'/>
                    <Categoria props={navigation} page='Subcategoria' name='Choques Elétricos'/>
                    <Categoria props={navigation} page='Subcategoria' name='Intoxicação Exógena'/>
                </ScrollView>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#F47F7E"        /**F4FFFE */
    },

    containerCategory: {              /* search for "contentContainerStyle stackoverflow" */
        width: '90%',
        backgroundColor: "#58585E",     /**F4FFFE */
    },
    containerCategoryScroll: {
        paddingHorizontal:'3%',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    buttonBox: {
        width:'46%',
        height:160,                        /*NOT RESPONSIVE*/
        backgroundColor: "#8F8F8F",     /**AADAE5 */
        borderRadius: 8,
        marginBottom: 20,
        elevation:10,

        justifyContent: "flex-end"      /*MAKES TEXT AT THE BOTTOM' BOX*/
    },
    buttonBoxText: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        paddingBottom: 4,
        paddingLeft: 10,
        lineHeight:20
    }
  })