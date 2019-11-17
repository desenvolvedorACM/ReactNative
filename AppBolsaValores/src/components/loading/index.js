import React from 'react';
import { Text, View } from 'react-native';

const Loading = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(238,232,170,0.3)' }}>
        <Text style={{ fontSize: 25, fontWeight: '400'}}>Aguarde...</Text>
    </View>
);

export default Loading;
