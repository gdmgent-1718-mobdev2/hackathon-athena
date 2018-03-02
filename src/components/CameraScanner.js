import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { BarCodeScanner, Permissions } from 'expo';

import { styles } from '../utils/styles';
import { ErrorMessage } from '../components/ErorrMessage';

export class CameraScanner extends React.Component {
    state = {
        hasCameraPermissions: null,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === 'granted' });
    }

    render() {
        const { hasCameraPermissions } = this.state;
        if (hasCameraPermissions === null) {
            return <Text>Requesting for camera permission</Text>;
        } else if (hasCameraPermissions === false) {
            return <ErrorMessage />;
        } else {
            return(
                <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeRead = {this._handleBarCodeRead}
                        style={StyleSheet.absoluteFill}
                    >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Text h2>PLANT</Text>
                            <Text h1>SCAN BARCODE</Text>
                        </View>
                    </BarCodeScanner>
                </View>
            );
        }
    }

    _handleBarCodeRead = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }
}