import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';

export class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Streak />
                <Text h2>Test Screen</Text>
                <Button
                    title="Go to Shop"
                    onPress={() => this.props.navigation.navigate('Shop')}
                />
                <Button
                    title="Go to Usage"
                    onPress={() => this.props.navigation.navigate('Usage')}
                />
            </View>
        );
    }
}
