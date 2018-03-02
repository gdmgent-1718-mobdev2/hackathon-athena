import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';

export class SkinCard extends React.Component {
     render(){
         return(
             <View style={styles.card}>
                <Avatar 
                    width={100}
                    icon={{ name: 'home', color: 'orange' }}
                    overlayContainerStyle={{ backgroundColor: '#F5F5F5' }}
                />
                <Avatar 
                    width={100}
                    icon={{ name: 'shop', color: 'orange' }}
                    overlayContainerStyle={{ backgroundColor: '#F5F5F5' }}
                />
                <Avatar 
                    width={100}
                    icon={{ name: 'settings', color: 'orange' }}
                    overlayContainerStyle={{ backgroundColor: '#F5F5F5'}}
                />
             </View>
         );
     }
 }
 const styles = StyleSheet.create({
     card: {
          marginTop: 20,
          flexDirection:'row',
          alignItems: 'center',
          justifyContent: 'center'
     }
 })