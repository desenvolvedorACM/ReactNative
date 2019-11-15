import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    inputFormat: {
        margin: 20,
        height: 45,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 13
    }
});

const { inputFormat } = styles;

export default function App() {

    const [nome, setNome] = useState('Alexandre');
    const [input, setInput] = useState('');

    function AlteraNome() {
        if (input === '') {
            alert('Preencha o campo nome..');
        } else {

            setNome(input);
            setInput('');
        }
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', padding: 12 }}>
            <TouchableOpacity
                onPress={AlteraNome}
                style={{ backgroundColor: '#FF8811', borderRadius: 12, padding: 15, width: '100%' }}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}> Trocar Nome </Text>
            </TouchableOpacity>

            <TextInput
                style={inputFormat}
                value={input}
                underlineColorAndroid="transparent"
                placeholder="Informe o seu nome..."
                onChangeText={(texto) => { setInput(texto); }} />

            <Text style={{ fontSize: 18, textAlign: 'center' }}>Nome na useState: {nome}</Text>
        </View >
    );
}
