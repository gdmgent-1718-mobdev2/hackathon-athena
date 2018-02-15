import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';
import { SkinCard } from '../components/SkinCard';

export class ShopScreen extends React.Component {
    render(){
        return(
            <View style={styles.tmpContainer}>
                <Text style={{ color:Colors.TEXT_GREEN, fontSize: 16, textAlign:'center' }}>Pimp uw plant</Text>
                <SkinCard />
                <SkinCard />
                <SkinCard />
                <SkinCard />
                <SkinCard />
                <SkinCard />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tmpContainer: {
         marginTop: 50,
    }
})