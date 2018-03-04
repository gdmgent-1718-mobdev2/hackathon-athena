import React from 'react';
import { View } from 'react-native';
import { Text, Button, FormInput } from 'react-native-elements';
import { Permissions } from 'expo';
import Modal  from 'react-native-modal';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';
import { ErrorMessage } from '../components/ErorrMessage';
import { CameraScanner } from '../components/CameraScanner';

export class ScanScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermissions: null,
            isModalVisible: false,
        };    
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === 'granted' });
    }

    _toggleModal = (visible) =>
        this.setState({ isModalVisible: visible });  

    render(){
        const { hasCameraPermissions } = this.state;
        if (hasCameraPermissions === null) {
            return <Text>Toestemming om camera te gebruiken aanvragen</Text>;
        } else if (hasCameraPermissions === false) {
            return <ErrorMessage />;
        } else {
            return(
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <CameraScanner />
                    
                    <Button 
                        title="Voer handmatig je code in"
                        backgroundColor={Colors.DARK_GREEN}
                        onPress={this._toggleModal}
                        color={Colors.LIGHT_GREEN}
                        style={{
                            flex: 1,
                        }}
                    />
                    
                    <Modal 
                        isVisible={this.state.isModalVisible}
                        onBackdropPress={() => this._toggleModal(!this.state.isModalVisible)}
                        style={{
                        }}    
                    >
                        <FormInput
                            placeholder="Hernoem uw plant"
                        />
                        <Button
                            title="Hide"
                            onPress={this._toggleModal}
                        />
                    </Modal>
                </View>
            );
        }
    }
}