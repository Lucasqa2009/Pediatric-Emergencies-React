import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TitleInformative } from '../../components';

function Sobre() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginTop: 40, width: '90%' }}        /**Limita o tamanho da ScrollView */>
                <ScrollView
                    /**Uma ScrollView precisa de um estilo de conteúdo e um estilo pro container*/
                    contentContainerStyle={styles.containerCategoryScroll}
                    style={styles.containerCategory}
                >
                    <View style={{ marginBottom: 25 }}>
                        <Text style={[styles.textStyle, { color: "#7D0C0C", fontFamily: 'Poppins-Bold' }]}>Este aplicativo disponibiliza orientações básicas sobre primeiros socorros pediátricos, mas não substitui o atendimento profissional. </Text>
                    </View>

                    <TitleInformative name="Colaboradores" />

                    <View style={{ marginBottom: 30 }}>
                       <View style={{ marginBottom: 30 }}><Text style={styles.textStyle}>Programa de Educação em Reanimação Cardiorrespiratória (PERC):</Text></View>
                        <Text style={styles.textStyle}>É um programa de ensino, pesquisa e extensão do curso de medicina da Universidade Federal do Ceará</Text>
                    </View>

                    <TitleInformative name="Desenvolvedores" />

                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.textStyle}>Alunos do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará:
                        </Text>
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.textStyle}>• Anderson Alencar</Text>
                        <Text style={styles.textStyle}>• Daniel Saboya</Text>
                        <Text style={styles.textStyle}>• Lucas Queiroz</Text>
                        <Text style={styles.textStyle}>• Markus Filipe Taumaturgo</Text>
                        <Text style={styles.textStyle}>• Alisson Lucas Sousa</Text>
                    </View>

                    <TitleInformative name="Orientadores" />

                    <View style={{ marginBottom: 30}}>
                        <Text style={styles.textStyle}>Professores do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará:
                        </Text>
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.textStyle}>• Cátia Luzia Oliveira</Text>
                        <Text style={styles.textStyle}>• Henrique Sérgio Lima</Text>
                        <Text style={styles.textStyle}>• Ismael Pordeus Bezerra</Text>
                        <Text style={styles.textStyle}>• Wellington Wagner Ferreira</Text>
                        <Text style={styles.textStyle}>• Inga Freire Saboia</Text>
                    </View>
                    <View style={{ marginBottom: 30}}>
                        <Text style={styles.textStyle}>Orientadora pediatra:</Text>
                        <Text style={styles.textStyle}>• Dra. Virna Costa e Silva</Text>
                    </View>

                </ScrollView>
            </View>

        </View>
    );
}

export default Sobre;

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