import { StyleSheet } from 'react-native';
import padrao from '../../styles/default';

export default styles = StyleSheet.create({
    container_contato: {
        flexDirection: 'row',
        marginHorizontal: 8,
        height: 70
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        marginRight: 10
    },
    container_info: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1.5,
        borderBottomColor: padrao.cores.cinza
    },
    container_esquerda: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    container_direita: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 15.5
    },
    numero_container:{
        marginRight: 5
    },
    numero: {
        color: 'gray'
    },
    icone_font_icon: {
        fontSize: 25
    }
});
