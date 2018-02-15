import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';

import { styles } from '../utils/styles';

export class Camera extends React.Component {
    render() {
        return(
            <View>
                <Image
                    style={styles.stretch}
                    source={require('../assets/img/300.png')}
                />    
            </View>
        );
    }
}