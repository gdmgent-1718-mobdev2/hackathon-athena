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
                <View style={{marginTop: 50}}>
                    <Streak />
                    <View style={styles.homeTitle}>
                        <Text>
                            <Text style={{fontSize: 14, fontWeight: '900', color: Colors.TEXT_GREEN}}>
                                JE HEBT DEZE MAAND
                            </Text>
                            <Text style={{fontSize: 24, color: 'white', fontWeight: '900'}}> €63.21 </Text>
                            <Text style={{fontSize: 14, fontWeight: '900', color: Colors.TEXT_GREEN}}>
                                BESPAARD
                            </Text>
                        </Text>
                        <Button
                                
                                title="Limit"
                                color="#841584"
                                onPress={() => this.props.navigation.navigate('Limit')}
/>
                    </View>    
                </View>
                
                
                <Image 
                    style={styles.Image} 
                    source={require('../assets/img/plant_ground.png')} 
                    resizeMode="cover"
                />
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
}
