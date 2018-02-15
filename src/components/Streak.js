import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';
import { StreakTime } from './StreakTime';



export class Streak extends React.Component {
    render(){
        return(
            <View>
                <Icon 
                    name="white-balance-sunny"
                    type="material-community"
                    color={Colors.ICON_YELLOW}
                />
                <StreakTime />
            </View>
        );
    }
}