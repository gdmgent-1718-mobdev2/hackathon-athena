import React from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-elements';

import { styles } from '../utils/styles';

export class StreakTime extends React.Component {
    render() {
        return(
            <View>
                <Text h5 style={{fontWeight: '900', color: 'white', padding: 10}}>1 DAG 12 UUR</Text>
            </View>
        );
    }
}