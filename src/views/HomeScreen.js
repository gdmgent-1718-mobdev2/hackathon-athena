import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

export class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.tmpContainer}>
                <Text h2>Home Screen</Text>
                <Button
                    title="Next Screen"
                    onPress={() => this.props.navigation.navigate('Shop')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tmpContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})