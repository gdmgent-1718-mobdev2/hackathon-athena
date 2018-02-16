import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';

export class SkinCard extends React.Component {
     render(){
         return(
             <View style={styles.card}>
                    <Avatar
                         large
                         overlayContainerStyle={{backgroundColor: 'white',
                         borderWidth: 1,
                         borderColor: Colors.TEXT_GREEN,
                    }}
               />
               <Avatar
                         large
                         overlayContainerStyle={{backgroundColor: 'white', 
                         borderWidth: 1,
                         borderColor: Colors.TEXT_GREEN,}}
               />
               <Avatar
                         large
                         overlayContainerStyle={{backgroundColor: 'white', 
                         borderWidth: 1,
                         borderColor: Colors.TEXT_GREEN,}}
               />
             </View>
         );
     }
 }
 const styles = StyleSheet.create({
     card: {
          marginTop: 20,
          width:'70%',
          marginLeft:'15%',
          flexDirection:'row',
          justifyContent: 'space-between',
     }
 })