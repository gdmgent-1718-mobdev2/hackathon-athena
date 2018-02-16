import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';



export class BottomNav extends React.Component {
    render(){
        return(
            <View>
                <Button
                icon={
                    <Icon
                    name='arrow-right'
                    size={15}
                    color='white'
                    />
                }
                text='BUTTON WITH ICON'
                />
            </View>
        );
    }
}