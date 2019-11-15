import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles  from './styles';

const { inputFormat, container } = styles;

export default function PAgina2() {

    const [nome, setNome] = useState('');
    const [input, setInput] = useState('');

    //componentDidMount
    useEffect(() => {

        async function getStorage() {
            try {

                const seuNome = await AsyncStorage.getItem('@nome');
                if (seuNome != null) {
                    setNome(seuNome);
                }

            } catch (error) {

            }
        }

        getStorage();

        //componentWillUnMount
        return () => {

        }
    }, []);

    //componentDidUpDate
    useEffect(() => {

        async function saveStorage() {
            try {

                await AsyncStorage.setItem('@nome', nome);

            } catch (error) {

            }
        }

        saveStorage();

    }, [nome]);


    function AlteraNome() {
        if (input === '') {
            alert('Preencha o campo nome..');
        } else {
            setNome(input);
            setInput('');
        }
    }

    return (
        <View style={ container }>
            <TouchableOpacity
                onPress={AlteraNome}
                style={{ backgroundColor: '#FF8899', borderRadius: 12, padding: 15, width: '100%' }}>
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
