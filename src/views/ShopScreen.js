import React from 'react';
import { View, StyleSheet, ScrollView, Modal } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';
import { SkinCard } from '../components/SkinCard';
import { BottomNav } from '../components/BottomNav';
import { styles } from '../utils/styles';

export class ShopScreen extends React.Component {
    render(){
        return(
            <View>
                <ScrollView contentContainerStyle={styles.center}>
                    <Text style={{ color:Colors.TEXT_GREEN, fontSize: 16, textAlign:'center', marginTop:50, }}>Pimp uw plant</Text>
                    <SkinCard />
                    <SkinCard />
                    <SkinCard />
                    <SkinCard />
                    <SkinCard />
                </ScrollView>
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
}