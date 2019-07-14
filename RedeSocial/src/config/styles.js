import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    areaFeed: {
        marginBottom: 10,
    },
    nomeUsuario: {
        fontSize: 22,
        paddingLeft: 5,
        textAlign: 'left',
        color: '#000000'
    },
    fotoPublicacao: {
        flex: 1,
        alignItems: 'center',
        height: 400,
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    iconeLike: {
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 5,
    },
    areaBotoes: {
        padding: 5,
        flexDirection: 'row'
    },
    like: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
    nomeRodape: {
        paddingLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000000'
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;