import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Modal, TextInput } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';

export class ScanScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text h4 style={styles.subtitle}>GASMETER</Text>
                <Text h3 style={styles.title}>SCAN BARCODE</Text>
                <Button
                    title="Voer handmatig code in"
                    onPress={() => this.openModal()}
                />
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <TextInput
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                            <Button
                                onPress={() => this.closeModal()}
                                title="Sluiten"
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
