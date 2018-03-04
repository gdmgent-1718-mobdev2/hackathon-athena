import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Colors } from '../utils/colors';
import { Tip } from '../components/Tip';

export class LoadScreen  extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.DARK_GREEN}}>
                <ActivityIndicator 
                    color={Colors.LIGHT_GREEN}
                    size={'large'}
                />
                <Tip />
            </View>
        );
    }
}
