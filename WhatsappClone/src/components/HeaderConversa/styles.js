import { StyleSheet } from 'react-native';
import padroes from '../../styles/default';

export default styles = StyleSheet.create({
    container: {
        minHeight: 65,
        maxHeight: 65,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: padroes.cores.primaria
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    container_esquerdo: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center'
    },
    icone_voltar: {
        flexDirection: 'row'
    },
    cabecalho: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 10,
      alignSelf: 'center'
    },
    container_direta: {
        flexDirection: 'row',
        paddingRight: 10,
        width: 80,
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
});