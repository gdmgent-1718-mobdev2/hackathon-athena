import { StyleSheet } from 'react-native';
import { Colors } from './colors'

export const styles = StyleSheet.create ({ 
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.DARK_GREEN,
    },
    containerflex: {
        flex: 1,
        padding: 0,
        backgroundColor: Colors.DARK_WHITE,
    },
    containercenter: {
        flex: 1,
        padding: 0,
        alignItems: 'center',
        backgroundColor: Colors.DARK_WHITE,

    },
    title: {
        color: 'white',
        fontWeight: '900',
    },
    subtitle: {
        color: Colors.LIGHT_GREEN,
        fontWeight: '700',
    },
    Image: {
        position: 'absolute',
        bottom: -50,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 16,
    },
    homeTitle: {
        alignItems: 'center',
    },
    streak: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    error_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    tip: {
        margin: 30, 
        fontWeight: '900',
        textAlign: 'center',
        color: Colors.LIGHT_GREEN,
    },
    popup: {
        backgroundColor: Colors.WHITE,
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.LIGHT_GREEN,
    },
});