import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Colors } from '../utils/colors';
import { SkinCard } from '../components/SkinCard';

import { styles } from '../utils/styles';

export class ShopScreen extends React.Component {
    render(){
        return(
            <ScrollView style={{
                flex: 1,
                padding: 16,
            }}>
                <Text h3 style={{ textAlign: 'center', marginTop: 20, }}>Pimp uw Plant</Text>
                <SkinCard />
                <SkinCard />
                <SkinCard />
                <SkinCard />
                <SkinCard />
                <SkinCard />
            </ScrollView>
        );
    }
}