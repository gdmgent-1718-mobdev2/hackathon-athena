import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {  Avatar } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Colors } from '../utils/colors';

export class SkinCard extends React.Component {
     render(){
         return(
            <ScrollView contentContainerStyle={{ flex: 1, }}>
                <View style={styles.card}>
                    <Avatar
                            xlarge
                            icon={{
                                name: 'lock',
                                type: 'font-awesome',
                                color: Colors.DARK_GREEN,
                            }}
                            overlayContainerStyle={{backgroundColor: '#fff',
                            borderColor: Colors.TEXT_GREEN,
                        }}
                    />
                    <Avatar
                            xlarge
                            icon={{
                                name: 'lock',
                                type: 'font-awesome',
                                color: Colors.DARK_GREEN,
                            }}
                            overlayContainerStyle={{backgroundColor: '#fff',
                            borderColor: Colors.TEXT_GREEN,
                        }}
                    />

                </View>
            </ScrollView>
         );
     }
 }
