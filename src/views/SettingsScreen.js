import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, List, ListItem, Overlay } from 'react-native-elements';

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



<Overlay
  isVisible={this.state.modalVisible}
  windowBackgroundColor="rgba(255, 255, 255, .5)"
  overlayBackgroundColor="red"
  width="auto"
  height="auto"
>
  <Text>Hello from Overlay!</Text>
</Overlay>


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
