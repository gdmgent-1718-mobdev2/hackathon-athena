import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {  Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';

export class SkinCard extends React.Component {
     render(){
         return(
            <ScrollView contentContainerStyle={styles.containerflex}>
                <View style={styles.card}>
                    <Avatar
                            large
                            overlayContainerStyle={{backgroundColor: '#fff',
                        }}
                    />
                    <Avatar
                            large
                            overlayContainerStyle={{backgroundColor: '#fff',
                        }}
                    />
                    <Avatar
                            large
                            overlayContainerStyle={{backgroundColor: '#fff',
                        }}
                    />
                </View>
            </ScrollView>
         );
     }
 }
 const styles = StyleSheet.create({
     card: {
          marginTop: 20,
          width:'80%',
          marginLeft:'10%',
          flexDirection:'row',
          justifyContent: 'space-around',
     }
 })