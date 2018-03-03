import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';

import { styles } from '../utils/styles';

export class SettingsScreen extends React.Component {
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
                <Text h2>Test</Text>
                <List>
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{name: item.icon}}
                    />
                    ))
                }
                </List>
            </View>
        );
    }
}
