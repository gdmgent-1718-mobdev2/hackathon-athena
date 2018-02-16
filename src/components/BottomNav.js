import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';



export class BottomNav extends React.Component {
    render(){
        return(
          <View style={styles.card}>
          <Avatar
               large
               overlayContainerStyle={{     
               backgroundImage: require('../assets/img/chart.svg'),
               borderWidth: 1,
               borderColor: Colors.TEXT_GREEN,
          }}
          
     />
            </View>
        );
    }
}