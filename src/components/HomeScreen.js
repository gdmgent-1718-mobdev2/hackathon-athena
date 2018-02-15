import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { styles } from '../utils/styles';

export class StreakTime extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Streak />
                <Text h2>Test Screen</Text>
                <Button
                    title="Next Screen"
                    onPress={() => this.props.navigation.navigate('Shop')}
                />
            </View>
        );
    }
}
