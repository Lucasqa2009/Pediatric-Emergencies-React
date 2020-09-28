import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ButtonEmergency } from '../../components';

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function Subcategoria({ navigation }) {
   return (
      <View style={styles.container}>
         <ButtonEmergency props={navigation} screen="PassoAPasso" name="Menores de 1 ano (lactente)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={ 16 } />
         <ButtonEmergency props={navigation} screen="PassoAPasso" name="Acima de 1 ano até a puberdade (criança)" styleExtra={{ marginHorizontal: 10 }} textLabelSize={ 16 } />
         <ButtonEmergency props={navigation} screen="PassoAPasso" name="Adolescentes, crianças obesas e adultos" styleExtra={{ marginHorizontal: 10 }} textLabelSize={ 16 } />
      </View>
   );
}

export default Subcategoria;

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#CCCCCC',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
   }
})