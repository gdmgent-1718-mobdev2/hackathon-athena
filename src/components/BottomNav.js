import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';



export class BottomNav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <View style={styles.buttons}>
                <Icon
                    style={styles.button}
                    name='graph-bar'
                    type='foundation'
                    color='white'
                    size={36}
                    onPress={() => this.props.navigation.navigate('Overview')}
                />
                <Icon
                    style={styles.button}
                    name='flower'
                    type='material-community'
                    color='white'
                    size={36}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Icon
                    style={styles.button}
                    name='md-pricetag'
                    type='ionicon'
                    color='white'
                    size={36}
                    onPress={() => this.props.navigation.navigate('Shop')}
                />
                <Icon
                    style={styles.button}
                    name='md-settings'
                    type='ionicon'
                    color='white'
                    size={36}
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );
    }
}