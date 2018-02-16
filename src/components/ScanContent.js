import React from 'react';
import { View, Modal } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import { Color } from '../utils/colors';
import { styles } from '../utils/styles';

export class ScanContent extends React.Component {
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