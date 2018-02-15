import { StyleSheet } from 'react-native';
import { Colors } from './colors'

export const styles = StyleSheet.create ({ 
    container: {
        paddingTop: 150,
        flex: 1,
        backgroundColor: Colors.DARK_GREEN,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontWeight: '900',
    },
    subtitle: {
        color: Colors.LIGHT_GREEN,
        fontWeight: '700',
    },
});