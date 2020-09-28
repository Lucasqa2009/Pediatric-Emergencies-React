import React from 'react';
import { View, Text, Button } from 'react-native';

function Settings({navigation}){
    return(
        <View style={{flex:1, justifyContent: "center", alignSelf: "center"}}>
            <Text>Settings</Text>
            <Button title="Politica de Privacidade" onPress={()=>navigation.navigate('Politics')}/>
            <Button title="Sobre" onPress={()=>navigation.navigate('Sobre')}/>
        </View>
    );
}

export default Settings