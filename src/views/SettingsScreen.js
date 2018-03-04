import React from 'react';
import { View, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Text, List, ListItem, FormInput } from 'react-native-elements';

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
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
            
            <FormInput
                placeholder="Hernoem uw plant"
                />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Sluiten</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Verder gaan</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


                <Text h2>Test</Text>
                <List>

                    <ListItem
                        title='Hernoem Plant'
                        leftIcon={{name: 'flash-on'}}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
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
                        onPress={() => this.props.navigation.navigate('Home')}
                    />

                </List>
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
}
