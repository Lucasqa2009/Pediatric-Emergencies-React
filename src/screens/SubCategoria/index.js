import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ButtonEmergency } from '../../components';
import ChangeSubs from './changeSubs';

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function Subcategoria({ navigation }) {
   return (
      <ChangeSubs props2={navigation}/>
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