import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { wWidth } from '../../configs/dimensions';

export function ButtonAlternativa({props, alternative}) {
    return (
        <View style={styles.buttonAlternative}>
            <TouchableOpacity
                style={styles.buttonAlternative}
                onPress={()=>props.navigate('WinQuiz')}
            >
                <View style={styles.buttonAlternativeContainer}>
                    <Text style={styles.buttonAlternativeText}>{alternative} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function Quiz({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.containerRobertinho}>
                        <Image
                            style={styles.robertinhoImage}
                            source={require('../../../assets/images/Robertinho/robertinhoThink3.png')} />
                    </View>
                    <View style={{justifyContent:"center"}} /**AJEITAR PERGUNTA QUE NÃO ESTÁ CENTRALIZADA */>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginBottom: 15}}>
                        O pai a afastou da fonte de calor e percebeu uma queimadura vermelha e com bolhas. O que deve ser feito em seguida? 
                        </Text>
                    </View>
                </View>

                <View style={styles.containerAlternatives}>
                    <ButtonAlternativa props={navigation} alternative="Retirar acessórios, perto do ferimento, e roupa, próxima da queimadura, mas que não está aderida à pele. "/>
                    <ButtonAlternativa props={navigation} alternative="Passar pomada na queimadura."/>
                    <ButtonAlternativa props={navigation} alternative="Levar a criança para o médico."/>
                    <ButtonAlternativa props={navigation} alternative="Manter o local da lesão em repouso"/>
                </View>

            </View>
        </View>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F4FFFE'
    },
    container: {
        flex: 1,
        alignSelf: "center",
        width: 0.84 * wWidth,
        //backgroundColor: '#F68686'
    },
    containerRobertinho: {
        flex: 1,
        //backgroundColor: '#8686F6',
        maxHeight: '70%'
    },
    robertinhoImage: {
        resizeMode: "contain",
        width: '100%',
        height: '100%',
        marginTop:10
    },

    containerAlternatives: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 10,
        //backgroundColor: '#F8F868'
    },

    buttonAlternative: {
        width: '100%',
        height: 65,                        /*NEED TEST RESPONSIVITY*/
        backgroundColor: "#AADAE5",     /**AADAE5 */
        borderRadius: 40,
        marginVertical: 4,
        elevation: 8,
        justifyContent: "center"
    },
    buttonAlternativeContainer: {
        paddingHorizontal: '6%',
    },
    buttonAlternativeText: {
        fontSize: 14,
        fontFamily:'Poppins-Regular'
    }
})