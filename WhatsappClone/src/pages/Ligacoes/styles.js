import { StyleSheet } from 'react-native';
import padrao from '../../styles/default';

export default styles = StyleSheet.create({
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        marginRight: 10
    },
    ligacoes_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    container_info: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1.5,
        borderBottomColor: padrao.cores.cinza
    },
    container_esquerda: {
        flex: 1,
        justifyContent: 'center'
    },
    container_direita: {
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'space-evenly'
    },
    data_ligacao: {
        color: 'gray'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 15.5
    },
    container_ligacao: {
        flexDirection: 'row',
        marginHorizontal: 8,
        height: 70
    },
    margin_icon: {
        marginRight: 2
    }
});
