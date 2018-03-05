import React from 'react';
import { View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Text, List, ListItem, FormInput } from 'react-native-elements';
import  Modal  from 'react-native-modal';

import { styles } from '../utils/styles';
import { BottomNav } from '../components/BottomNav';

export class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            modalVisible: false,
        }
    }

    componentDidMount() {
        this.setState({ hasLoaded: true })
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return(
            <View style={{ flex: 1, }}>
                <Modal 
                    isVisible={this.state.modalVisible}
                    onBackdropPress={() => this.setModalVisible(false)}
                    >
                    <View style={styles.popup}>     
                        <FormInput
                            placeholder="Hernoem uw plant"
                        />
                    </View>
                </Modal>
                <Text h2 style={{marginTop: 50, marginLeft: 16}}>Instellingen</Text>
                <List>
                    <ListItem
                        title='Hernoem Plant'
                        leftIcon={{
                            name: 'pencil',
                            type: 'foundation'
                        }}
                        onPress={() => {
                            this.setModalVisible(true);
                          }}
                    />
                    <ListItem
                        title='Limiet herinstellen'
                        leftIcon={{
                            name: 'graph-bar',
                            type: 'foundation'
                        }}
                        onPress={() => this.props.navigation.navigate('Overview')}
                    />
                    <ListItem
                        title='Ontkoppel plant'
                        leftIcon={{
                            name: 'chain-broken',
                            type: 'font-awesome'
                        }}
                        onPress={() => {
                            Alert.alert(
                                'Plant ontkoppelen',
                                'Bent u zeker dat uw uw plant wilt ontkoppelen?',
                                [
                                  {text: 'Neen', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'Ja', onPress: () => this.props.navigation.navigate('Scan')},
                                ],
                                { cancelable: false }
                              )
                        }}
                    />
                </List>
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
}
