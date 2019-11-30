import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ImageBackground
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


const { container } = styles;


const Filme = props => (
    <View style={container} >
    <TouchableHighlight
        onPress={() => alert("Filme: " + props.data.nome)}
        underlayColor="yellow" >

        <ImageBackground
            resizeMode="cover"
            source={{ uri: props.data.foto }}
            style={{ height: 150, marginBottom: 5 }}>

            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                paddingLeft: 10,
                paddingBottom: 10
            }}>
                <Text style={{ fontSize: 23, color: '#FFFFFF', fontWeight: 'bold' }}>{ props.data.nome}</Text>
            </View>
        </ImageBackground>

    </TouchableHighlight>
</View>
);

export default Filme;
