import { StyleSheet } from 'react-native';
import padroes from '../../styles/default';

export default styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: padroes.cores.primaria
    },
    cabecalho: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        alignSelf: 'center'
    },
    container_direita: {
     flexDirection: 'row',
     width: 120,
     justifyContent: 'space-between',
     paddingRight: 10,
     alignItems: 'center'
    }
});