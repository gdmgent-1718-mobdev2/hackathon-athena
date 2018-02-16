import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';



export class TopNav extends React.Component {
    render(){
        return(
            <View onPress={() => this.props.navigation.navigate.goBack()}>
                <Icon 
                name="white-balance-sunny"
                type="material-community"
                color={Colors.ICON_YELLOW}
                />
                <Text class="back-button">Terug</Text>
            </View>
        );
    }
}