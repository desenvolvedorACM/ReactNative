import React from 'react';
import { Text, View, Button } from 'react-native';

const Page1 = ({ navigation }) => (
    <View style={{ flex: 1, padding: 10 }}>
        <Button title="Pagina2" onPress={() => { navigation.navigate('Pagina2'); }} />
    </View>
);

Page1.navigationOptions = {
    tabBarLabel: 'Pagina 1'
}

export default Page1;
