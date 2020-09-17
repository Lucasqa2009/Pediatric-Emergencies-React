import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

function Categoria(){
    return(
        <View style={styles.boxCategorias}></View>
    );
}

export default class Home extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCategorias}>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                    <Categoria></Categoria>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#F47F7E"
    },
    containerCategorias: {
        flexDirection: 'row',
        flexWrap: "wrap",
        width:'80%',
        height: '80%',
        backgroundColor: "#58585E",
        justifyContent: "space-between",
        marginBottom: 40
    },
    boxCategorias: {
        width:140,
        height:140,
        backgroundColor: "#8F8F8F",
        borderRadius: 8
    }
  })