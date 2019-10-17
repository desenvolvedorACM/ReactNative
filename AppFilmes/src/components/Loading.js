import React from 'react';
import { Text, View } from 'react-native';

const Loading = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Carregando..</Text>
    </View>
);

export default Loading;
