import React from 'react';
import { View, StyleSheet, ScrollView, Slider } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';
import { SkinCard } from '../components/SkinCard';
import { TopNav } from '../components/TopNav';
import { styles } from '../utils/styles';

export class LimitScreen extends React.Component {
    render(){
        return(
            <ScrollView contentContainerStyle={styles.center}>
                <Text style={{ color:Colors.TEXT_GREEN, fontSize: 16, textAlign:'center', marginTop:50, }}>Wijzig uw limieten</Text>
                <Slider orientation="vertical"/><Text>Value: {this.state.value}</Text>
            </ScrollView>
        );
    }
}