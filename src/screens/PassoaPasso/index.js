const { createFactory } = require("react");

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {wWidth} from '../../configs/dimensions'

const containerWidth = (84/100)*wWidth;
const textPaP1 = "Mantendo a cabeça da criança estendida, envolva, com a sua boca, a boca e nariz da criança e deixe o ar da sua boca passar para a  boca e nariz da criança, evitando soprar na boca da criança por duas vezes. Olhe para o tórax da criança. percebendo se ele se eleva, em caso afirmativo a manobra está correta."



function PassoAPasso(){
    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tag}><Text style={styles.textTag}>LACTENTE</Text></View>
                <View style={styles.containerImage}></View>

                <Text style={styles.textPaP}>{textPaP1}</Text>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPaP}>
                        <Image
                            style={styles.arrowIcon}
                            source={require('../../../assets/images/seta_esquerda.png')}
                        />
                    </TouchableOpacity>
                    {/*Contador */}
                    <Text style={styles.countPages}>1/10</Text>
                    {/*Contador */}
                    <TouchableOpacity style={styles.buttonPaP}>
                        <Image
                            style={styles.arrowIcon}
                            source={require('../../../assets/images/seta_direita.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            
        </View>

    );
}

export default PassoAPasso

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: '#F4FFFE'
    },
    container: {
        flex:1,
        alignSelf: "center",
        width: containerWidth,
        backgroundColor: '#F4FFFE'
    },
    tag: {
        alignSelf:'center',
        width:'50%',
        height:'8%',
        backgroundColor: '#AADAE5',
        marginBottom: 16,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent:'center',
    },
    textTag: {
        textAlign: "center",
        fontFamily: "Poppins-Regular",
        fontSize: 22,
        color: '#4B4B4B'
    },
    containerImage: {
        backgroundColor: '#C4C4C4',
        height: (19/30)*containerWidth,
        borderRadius: 5,
    },
    textPaP: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        backgroundColor:"#F4FFFE",
        height:'40%',
        paddingTop: 10
    },

    buttonContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor:"#F4FFFE",
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttonPaP: {
        width:'27%',
        height: '75%',
        backgroundColor: '#22CDCD',
        borderRadius: 14,
        justifyContent: "center",
        alignItems:"center",
        elevation: 5
    },
    countPages: {
        backgroundColor:'#22CDCD',
        width: '30%',
        height: '50%',
        borderRadius: 8,
        textAlignVertical:'center',
        textAlign:'center',
        fontFamily: 'Poppins',
        fontSize: 30,                               /**Responsividade zoadíssima */
        paddingTop: 4,
        color: '#4B4B4B'
    }

})