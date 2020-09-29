import React from 'react';
import { View, Text, Button } from 'react-native';

function WinQuiz({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
            <Text>Boa!</Text>
            <Button
                title="GoAprendizagem"
                onPress={() => navigation.navigate('HomeStack')}
            />
        </View>
    );
}

export default WinQuiz