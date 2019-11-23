import { StyleSheet } from 'react-native';
import padrao from '../../styles/default';

export default styles = StyleSheet.create({
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        marginRight: 30
    },
    container_conversas: {
        flexDirection: 'row',
        marginHorizontal: 8,
        height: 70
    },
    container_info: {
        borderBottomColor: padrao.cores.cinza,
        borderBottomWidth: 1.5,
        flex: 1,
        flexDirection: 'row'
    },
    ultima_mensagem_container: {
        flexDirection: 'row'
    },
    ultimo_mensageiro: {
        color: 'gray',
        marginRight: 5,
        maxWidth: 60
    },
    container_esquerda: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    container_direita: {
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 15.5
    },
    horario_ultima_mensagem: {
        color: padrao.cores.verde_claro
    },
    mensagens_nao_lida_container: {
        backgroundColor: padrao.cores.verde_claro,
        borderRadius: 15,
        height: 25,
        width: 25,
        justifyContent: 'center'
    },
    mensagens_nao_lida_container_branco: {
        backgroundColor: padrao.cores.verde_limao
    },
    mensagens_nao_lida_texto: {
        color: '#FFF',
        textAlign: 'center'
    },
    ultima_mensagem: {
        color: 'gray'
    }
});
