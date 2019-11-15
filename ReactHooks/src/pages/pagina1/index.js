import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'

import Api from '../../services/api';

const { inputFormat, container } = styles;

export default function Pagina1() {

    const [docs, setDocs] = useState([]);
    const [productInfoRec, setProductInfoRec] = useState({});


    const [nome, setNome] = useState('');
    const [input, setInput] = useState('');
    const { navigate } = useNavigation();

    //componentDidMount
    useEffect(() => {

        async function loadProduct(page = 1)  {
            try {
                const response = await Api.get(`/products?page=${page}`);
                const { docs, ...productInfo } = response.data;

                setProductInfoRec(productInfo);
                setDocs(docs);

                console.log(`hooks: ${docs}`);
                
                console.log(`Dados hooks ${productInfoRec.limit}`);
            } catch (error) {
                console.warn(`${error}`);
                alert(error.message)
                //this.setState({ error: 'Error no servidor' });
            }
        }

        async function getStorage() {
            try {

                const seuNome = await AsyncStorage.getItem('@nome');
                if (seuNome != null) {
                    setNome(seuNome);
                }

            } catch (error) {

            }
        }

        loadProduct();
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
        <View style={container}>
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

            <Button title="Pagina 2" onPress={() => { navigate('Pagina2'); }} />
        </View >
    );
}
