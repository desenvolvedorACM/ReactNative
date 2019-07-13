import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        justifyContent: 'center'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#CDCDCD'
    },
    sectionHeader: {
        flex: 1,
        alignItems: 'center',
        height: 60
    },
    input: {
        height: 50,
        backgroundColor: '#FFDEAD',
        fontSize: 18,
        margin: 5,
        padding: 5,
        borderRadius: 20,
        color: '#000',
        borderColor: '#808080'
    },
    img: {
        height: 100,
        width: 380
    },
    btnArea: {
        flexDirection: 'row',
        height: 40
    },
    botao: {
        flex: 1,
        backgroundColor: '#7B68EE',
        height: 40,
        margin: 5,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#FFF'
    },
    sectionCadastro: {
        flex: 1,
        padding: 10,
        paddingTop: 20
    },
    inpuCadastro: {
        height: 50,
        backgroundColor: '#836FFF',
        fontSize: 18,
        margin: 5,
        padding: 5,
        borderRadius: 20,
        color: '#FFF'
    },
    imgCadastro: {
        height: 100,
        width: 380
    },
    sectionContainerP: {
        flex: 1
    },
    sectionHeaderP: {
        backgroundColor: '#483D8B',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    sectionTitleP: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    },
    sectionLista: {
        backgroundColor: '#CDCDCD',
        flex: 1,
        height: 50,
        borderRadius: 20,
        margin: 10,
        marginLeft: 5,
        padding: 5,
        borderWidth: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
});

export default styles;
