import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    projectContainer: {
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    socialHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 80,
        margin: 10
    },
    socialMedia: {
        width: 30,
        height: 30,
        alignSelf: 'center'
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
        width: 60,
        height: 60,
        alignSelf: 'center'
    },
    cardProfile: {
       paddingVertical: 15,
       borderColor: '#115588',
       borderWidth: 1,
       borderTopWidth: 0
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40
    },
    userInfo: {

    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});