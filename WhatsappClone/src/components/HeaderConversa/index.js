import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import padroes from '../../styles/default';


const {
    container,
    container_esquerdo,
    icone_voltar,
    imagem,
    cabecalho,
    container_direta
} = styles;

class HeaderConversa extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const parametro = this.props.navigation.getParam('perfil', null);

        return (
            <View style={container}>
                <View style={container_esquerdo}>
                    <TouchableOpacity
                        style={icone_voltar}
                        onPress={() => this.props.navigation.goBack()}>

                        <IconMaterialIcons
                            name='arrow-back'
                            font={30}
                            color='#FFF'
                            style={{ fontSize: 30, alignSelf: 'center' }} />

                        <Image source={parametro.imagem} style={imagem} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={cabecalho}>{parametro.nome}</Text>
                </View>

                <View style={container_direta}>
                    <TouchableOpacity>
                        <Entypo name='attachment' color='#FFF' font={20} style={{ fontSize: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name='dots-three-vertical' color='#FFF' font={20} style={{ fontSize: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HeaderConversa;
