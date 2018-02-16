import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';

export class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Streak />
                <Text style={{fontSize: 16}}>JE HEBT DEZE MAAND € 67.32 BESPAARD</Text>
                <Button
                style={{marginTop:20}}
                    title="Go to Shop"
                    onPress={() => this.props.navigation.navigate('Shop')}
                />
                <Button
                 style={{marginTop:20}}
                    title="Go to Overview"
                    onPress={() => this.props.navigation.navigate('Overview')}
                />
                <Image style={styles.Image} source={require('../assets/img/plant_ground.png')} />


            </View>
        );
    }
}
