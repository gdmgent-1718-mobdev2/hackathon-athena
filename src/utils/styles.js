import { StyleSheet } from 'react-native';
import { Colors } from './colors'

export const styles = StyleSheet.create ({ 
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.DARK_GREEN,
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
        bottom: -25,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 16,
    },
    homeTitle: {
        justifyContent: 'center',
    },
    streak: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
});