import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';
import { BottomNav } from '../components/BottomNav';
import { LoadScreen } from './LoadScreen';

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
        }
    }    

    componentDidMount() {
        this.setState({ hasLoaded: true })
    }

    render(){
        if(!this.state.hasLoaded) {
            return <LoadScreen />
        }
        else {
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
}
