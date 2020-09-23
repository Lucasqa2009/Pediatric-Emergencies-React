import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {wWidth} from '../../configs/dimensions'

const buttonBoxWidth = (39/100)*wWidth;

function Categoria({ props, screen, name }){
    return(
        <TouchableOpacity                           /* This is a button */
            style={styles.buttonBox}
            onPress={() => props.navigate(screen)}    /**When pressed, navigate to screen passed as attribute */
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
                    <Categoria props={navigation} screen='Subcategoria' name={'Parada\nCardiorrespiratória'}/>
                    <Categoria props={navigation} screen='Subcategoria' name='Queimaduras'/>
                    <Categoria props={navigation} screen='Subcategoria' name='Quedas'/>
                    <Categoria props={navigation} screen='Subcategoria' name='Afogamento'/>
                    <Categoria props={navigation} screen='Subcategoria' name='Engasgo e Sufocamento'/>
                    <Categoria props={navigation} screen='Subcategoria' name='Choques Elétricos'/>
                    <Categoria props={navigation} screen='Subcategoria' name='Intoxicação Exógena'/>
                </ScrollView>
            </View>
            <TouchableOpacity>
                <Text>Informações Importantes</Text>
            </TouchableOpacity>
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
        width:buttonBoxWidth,
        height:buttonBoxWidth,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#8F8F8F",     /**AADAE5 */
        borderRadius: 8,
        marginBottom: 20,
        elevation:10,

        justifyContent: "flex-end"      /*MAKES TEXT AT THE BOTTOM' BOX*/
    },
    buttonBoxText: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        lineHeight:20,
        paddingBottom: 4,
        textAlign: "center"
    }
  })