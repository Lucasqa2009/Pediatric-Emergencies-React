import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { wWidth } from '../../configs/dimensions';

export function ButtonAgir({props}) {
    return (
        <View style={styles.buttonAlternative}>
            <TouchableOpacity
                style={styles.buttonAlternative}
                onPress={()=> props.navigate('Quiz')}
            >
                <View style={styles.buttonAlternativeContainer}>
                    <Text style={styles.buttonAlternativeText}>Agir</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function QuizContext({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.containerRobertinho}>
                        <Image
                            style={styles.robertinhoImage}
                            source={require('../../../assets/images/Robertinho/robertinhoThink1.png')} />
                    </View>
                    <View style={{justifyContent:"center"}} /**AJEITAR PERGUNTA QUE NÃO ESTÁ CENTRALIZADA */>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', marginBottom: 15}}>
                        Maria xiquinha
                        </Text>
                    </View>
                </View>

                <View style={styles.containerAlternatives}>
                    <ButtonAgir props={navigation}/>
                </View>

            </View>
        </View>
    );
}

export default QuizContext;

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
        paddingHorizontal: '7%',
    },
    buttonAlternativeText: {
        fontSize: 14,
        fontFamily:'Poppins-Regular'
    }
})