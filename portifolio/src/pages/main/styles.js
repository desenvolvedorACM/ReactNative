import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cdcdcd'
    },
    projectContainer: {
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    projectTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: "uppercase"
    },
    list: {
        padding: 9
    },
    projectText: {
        color: '#FFF',
        fontSize: 15
    },
    projecButton: {
        width: '100%',
        backgroundColor: '#115588',
        borderRadius: 10,
        marginTop: 12,
        padding: 9,
        alignItems: 'center'
    },
    projectDescription: {
        color: 'gray'
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    }
});