import { StyleSheet } from 'react-native';
import padroes from '../../styles/default';


export default styles = StyleSheet.create({
    imageBg: {
        width: '100%',
        height: '100%'
    },
    inserir_texto_container: {
        flex: 1,
        minHeight: 45,
        maxHeight: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    },
    inserir_texto: {
        maxHeight: 50,
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        fontSize: 18,
        paddingLeft: 10
    },
    botao_enviar: {
        backgroundColor: padroes.cores.primaria,
        height: 45,
        width: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    mensagem_container_remetente: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10,
        justifyContent: 'flex-start'
    },
    mensagem_container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10,
        justifyContent: 'flex-end'
    },
    horario_mensagem: {
        color: 'grey',
        fontSize: 14,
        marginTop: 5,
        marginLeft: 5
    },
    mensagem: {
        padding: 8,
        backgroundColor: padroes.cores.verde_limao,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mensagem_remetente: {
        padding: 8,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});
