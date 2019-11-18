import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const { container, title } = styles;

const Loading = (props) => (
    <View style={ container }>
        <Text style={ title }>{props.title}</Text>
    </View>
);

export default Loading;
