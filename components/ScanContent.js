import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import { Camera } from './Camera';
import { Color } from '../utils/colors';
import { styles } from '../utils/styles';

export class ScanContent extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text h4 style={styles.subtitle}>GASMETER</Text>
                <Text h3 style={styles.title}>SCAN BARCODE</Text>
                <Camera />
                <Text></Text>
            </View>
        );
    }
}