import React from 'react';
import { View, StyleSheet, Modal, TextInput } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';

export class ScanScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text h4 style={styles.subtitle}>GASMETER</Text>
                <Text h3 style={styles.title}>SCAN BARCODE</Text>
                <Input
                    placeholder='BASIC INPUT'
                />
            </View>
        );
    }
}
