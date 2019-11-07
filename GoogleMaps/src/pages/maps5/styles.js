import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapa: {
      width: '100%',
      height: '100%'
    },
    box: {
        position: 'absolute',
        top: -10,
        margin: 10,
        height: 100
    },
    localView: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    localButton: {
        height: 60,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#FF8800'
    },
    localText: {
     fontSize: 15,
     color: '#FFF'
    }
});

export default styles;