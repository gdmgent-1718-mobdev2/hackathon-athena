import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { BarCodeScanner, Permissions } from 'expo';

import { styles } from '../utils/styles';
import { ErrorMessage } from '../components/ErorrMessage';

export class CameraScanner extends React.Component {
    _handleBarCodeRead = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }

    render() {
        return(
            <BarCodeScanner
                onBarCodeRead = {this._handleBarCodeRead}
                style={StyleSheet.absoluteFill}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text h2>PLANT</Text>
                    <Text h1>SCAN BARCODE</Text>
                </View>
            </BarCodeScanner>
        );
    }
}