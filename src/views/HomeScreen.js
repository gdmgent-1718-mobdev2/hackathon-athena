import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';
import { BottomNav } from '../components/BottomNav';

export class HomeScreen extends React.Component {
    
    render(){
        return(
            <View style={styles.container}>
                <Streak />
                <Text h2>Test Screen</Text>
                <Button
                    title="Next Screen"
                    onPress={() => this.props.navigation.navigate('Shop')}
                />
                <Button
                    title="Scan Screen"
                    onPress={() => this.props.navigation.navigate('Scan')}
                />
            </View>
        );
    }
}
