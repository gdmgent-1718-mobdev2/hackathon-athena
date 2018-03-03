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
                icon: 'flash-on'
            },
            {
                title: 'Limiet herstellen',
                icon: 'flight-takeoff'
            },
            {
                title: 'Ontkoppel plant',
                icon: 'local-car-wash',
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
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{name: item.icon}}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                          }}
                    />
                    ))
                }
                </List>
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
}
