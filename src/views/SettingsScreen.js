import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { BottomNav } from '../components/BottomNav';

export class SettingScreen extends React.Component {
    render(){
        return(
            <View style={styles.containerflex}>
                <Text h2>Settings</Text>
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
}
