import React from 'react';
import { View, Text, Button } from 'react-native';

function Settings({navigation}){
    return(
        <View style={{flex:1, justifyContent: "center", alignSelf: "center"}}>
            <Text>Settings</Text>
            <Button title="Go to Subcategorias" onPress={()=>navigation.navigate('Subcategoria')}/>
        </View>
    );
}

export default Settings