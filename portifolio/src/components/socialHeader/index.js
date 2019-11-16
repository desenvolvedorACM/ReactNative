import React, { Component } from 'react';
import { View,TouchableOpacity,Image } from 'react-native';

import styles from './styles';

const {
    socialHeader,
    socialMedia } = styles;

class SocialHeader extends Component {

    render() {
        return (
            <View style={socialHeader}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Project', {
                        project: {
                            url: 'https://pt-br.facebook.com/login/',
                            title: 'FaceBook'
                        }
                    })
                }} >
                    <Image
                        style={socialMedia}
                        source={require('../../assets/facebook.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Project', {
                        project: {
                            url: 'https://twitter.com/login?lang=pt',
                            title: 'Twitter'
                        }
                    });
                }} >

                    <Image style={socialMedia}
                        source={require('../../assets/twitter.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Project', {
                        project: {
                            url: 'https://github.com/desenvolvedorACM',
                            title: 'GitHub'
                        }
                    })
                }} >
                    <Image style={socialMedia}
                        source={require('../../assets/github.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default SocialHeader;
