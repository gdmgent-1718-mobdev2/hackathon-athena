import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';
import { BottomNav } from '../components/BottomNav';
import { Colors } from '../utils/colors';

export class HomeScreen extends React.Component {
    
    render(){
        return(
            <View style={styles.container}>
                <View style={{marginTop: 100}}>
                    <Streak />
                    <View style={styles.homeTitle}>
                        <Text>
                            <Text style={{fontSize: 14, fontWeight: '900', color: Colors.LIGHT_GREEN}}>
                                JE HEBT DEZE MAAND
                            </Text>
                            <Text style={{fontSize: 24, color: 'white', fontWeight: '900'}}> €63.21 </Text>
                            <Text style={{fontSize: 14, fontWeight: '900', color: Colors.LIGHT_GREEN}}>
                                BESPAARD
                            </Text>
                        </Text>
                    </View>    
                </View>
                
                
                <Image 
                    style={styles.Image} 
                    source={require('../assets/img/plant_ground.png')} 
                    resizeMode="cover"
                />
                <BottomNav />
            </View>
        );
    }
}
