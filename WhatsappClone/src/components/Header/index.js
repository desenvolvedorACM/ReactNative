import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';


const {
    container,
    cabecalho,
    container_direita
} = styles;

class Header extends Component {

    render() {
        return (
            <View style={container}>
                <Text style={cabecalho}> WhatsApp </Text>
                <View style={container_direita}>
                    <TouchableOpacity>
                        <IconFontAwesome name='search' color='white' font={30} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconMaterialCommunityIcons name='message-reply-text' color='white' font={30} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconEntypo name='dots-three-vertical' color='white' font={30} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Header;
