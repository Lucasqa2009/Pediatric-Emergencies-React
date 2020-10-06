import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TitleInformative } from '../../components';



function Infos() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginTop: 40, width: '90%' }}        /**Limita o tamanho da ScrollView */>
                <ScrollView
                    /**Uma ScrollView precisa de um estilo de conteúdo e um estilo pro container*/
                    contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <TitleInformative name="Números de Emergência" />

                    <View style={{ marginBottom: 25 }}>
                        <Text style={[styles.textStyle, {lineHeight:30}]}>• 190 - Polícia Civil{'\n'}• 192 - SAMU{'\n'}• 193 - Bombeiros</Text>
                    </View>

                    <TitleInformative name="Prevenções" />

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.textStyle}>• Tomadas elétricas devem estar protegidas. A fiação deve estar em bom estado e fixada no alto e os fios precisam ficar presos e recolhidos;{'\n'}{'\n'}
                            • Os móveis devem ter cantos arredondados para evitar lesões e traumas;{'\n'}{'\n'}
                            • Nenhum móvel deve estar em baixo das janelas para desestimular tentativas de escalada e evitar quedas;{'\n'}{'\n'}
                            • As janelas devem ser protegidas por grades ou telas;{'\n'}{'\n'}
                            • Colocar cercas de isolamento ao redor de piscinas;{'\n'}{'\n'}
                            • Usar dispositivos de flutuação pessoal (Bóias e coletes) em crianças enquanto estiverem dentro ou próximo da água;{'\n'}{'\n'}
                            • Nunca deixar a criança nadar sozinha.{'\n'}{'\n'}
                        </Text>
                    </View>

                </ScrollView>
            </View>

        </View>
    );
}

export default Infos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F4FFFE"        /**F47F4E */
    },

    /* para maior entendimento dos ScrollViews, google it: "contentContainerStyle stackoverflow" */
    containerCategory: {
        paddingHorizontal: '3%',
        width: '100%',    /**58585E */
    },
    containerCategoryScroll: {
        alignItems: "flex-start"
    },
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18
    }
})