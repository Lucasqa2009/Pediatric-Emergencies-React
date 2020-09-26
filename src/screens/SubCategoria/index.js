import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {wWidth} from '../../configs/dimensions'

const buttonBoxWidth = (39/100)*wWidth;

/**Mesmo botão da tela Home */
function ButtonSubCategory({ props, screen, name }){
   return(
       <TouchableOpacity                           /* This is a button */
           style={styles.buttonBox}
           onPress={() => props.navigate(screen)}    /**When pressed, navigate to screen passed as attribute */
       >
           <Text style={styles.buttonBoxText}>{name}</Text>
       </TouchableOpacity>
   );
}
/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function Subcategoria ({navigation}) {
   return(
      <View style={styles.container}>
         <ButtonSubCategory props={navigation} screen="PassoAPasso" name="Menores de 1 ano (lactente)"/>
         <ButtonSubCategory props={navigation} screen="PassoAPasso" name="Acima de 1 ano até a puberdade (criança)"/>
         <ButtonSubCategory props={navigation} screen="PassoAPasso" name="Adolescentes, crianças obesas e adultos"/>
      </View>
   );
}

export default Subcategoria;

const styles = StyleSheet.create({
   container: {
      backgroundColor:'#CCCCCC',
      flex:1,
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',
      alignContent:'center',
   },
   buttonBox: {
      width:buttonBoxWidth,
      height:buttonBoxWidth,                        /*NEED TEST RESPONSIVITY*/
      backgroundColor: "#8F8F8F",     /**AADAE5 */
      borderRadius: 8,
      marginBottom: 20,
      elevation:10,
      marginHorizontal:10,
      justifyContent: "flex-end"      /*MAKES TEXT AT THE BOTTOM' BOX*/
      
  },
  buttonBoxText: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      paddingBottom: 4,
      lineHeight:20,
      textAlign: "center"
  }
})