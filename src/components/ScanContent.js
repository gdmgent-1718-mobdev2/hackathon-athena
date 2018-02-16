import React from 'react';
import { View } from 'react-native';
import { Text, Button, Modal, TextInput } from 'react-native-elements';

import { Camera } from './Camera';
import { Color } from '../utils/colors';
import { styles } from '../utils/styles';

export class ScanContent extends React.Component {
    state = { modalVisible: false, };
    openModal() { this.setState({modalVisible:true});}
    closeModal() { this.setState({modalVisible:false});}
    constructor(props) {
        super(props);
        this.state = { text: 'Voer uw serial key in...'};
    }

    render(){
        return(
            <View style={styles.container}>
                <Text h4 style={styles.subtitle}>GASMETER</Text>
                <Text h3 style={styles.title}>SCAN BARCODE</Text>
                <Camera />
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