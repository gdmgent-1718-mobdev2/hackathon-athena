import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';



export class ErrorMessage extends React.Component {
    render(){
        return(
            <View style={styles.error_container}>
                <Icon 
                    name="leaf"
                    type="entypo"
                    size={48}
                    color={Colors.DARK_GREEN}
                />
                <Text h3 style={{ textAlign: 'center' }}>Geen toegang tot de camera</Text>
            </View>
        );
    }
}