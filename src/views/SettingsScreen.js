import React from 'react';
import { View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Text, List, ListItem, FormInput } from 'react-native-elements';
import  Modal  from 'react-native-modal';

import { styles } from '../utils/styles';
import { BottomNav } from '../components/BottomNav';

export class SettingsScreen extends React.Component {

    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render(){
        const list = [
            {
                title: 'Hernoem plant',
                icon: 'flash-on',
                press: 'this.setModalVisible'
            },
            {
                title: 'Limiet herstellen',
                icon: 'flight-takeoff',
                press: 'this.setModalVisible'
            },
            {
                title: 'Ontkoppel plant',
                icon: 'local-car-wash',
                press: 'this.setModalVisible'
            }
        ]

        

        return(
            <View style={{ flex: 1 }}>


<Modal 
    isVisible={this.state.modalVisible}
    onBackdropPress={() => this.setModalVisible(!this.state.modalVisible)}
    >
    <View style={styles.popup}>     
        <FormInput
            placeholder="Hernoem uw plant"
        />
    </View>
</Modal>




                <Text h2>Test</Text>
                <List>

                    <ListItem
                        title='Hernoem Plant'
                        leftIcon={{name: 'flash-on'}}
                        onPress={() => {
                            this.setModalVisible(true);
                          }}
                    />

                    <ListItem
                        title='Limiet herstellen'
                        leftIcon={{name: 'flight-takeoff'}}
                        onPress={() => this.props.navigation.navigate('Limit')}
                    />

                    <ListItem
                        title='Ontkoppel plant'
                        leftIcon={{name: 'local-car-wash'}}
                        onPress={() => {
                            Alert.alert(
                                'Plant ontkoppelen',
                                'Wilt u zeker uw plant ontkoppelen?',
                                [
                                  {text: 'Neen', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'Ja', onPress: () => this.props.navigation.navigate('Home')},
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
