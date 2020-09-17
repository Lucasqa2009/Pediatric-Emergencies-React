import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';

function Categoria({ props, name }){
    let pagina = name;
    return(
        <View style={styles.boxCategorias}>
            <Button title = "Subcategoria"
                onPress={() => props.navigate(pagina)}
            />
        </View>
    );
}

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.containerCategoriasScroll}
            style={styles.containerCategorias}>
                <Categoria props={navigation} name='Subcategoria'></Categoria>
                <Categoria></Categoria>
                <Categoria></Categoria>
                <Categoria></Categoria>
                <Categoria></Categoria>
                <Categoria></Categoria>
                <Categoria></Categoria>
                <Categoria></Categoria>
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#F47F7E"
    },
    containerCategorias: {
        width: 300,
        height: 200,
        backgroundColor: "#58585E",
        marginBottom: 200
    },
    containerCategoriasScroll: {
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    boxCategorias: {
        width:140,
        height:140,
        backgroundColor: "#8F8F8F",
        borderRadius: 8,
        marginBottom: 20,
        elevation:10,
    }
  })