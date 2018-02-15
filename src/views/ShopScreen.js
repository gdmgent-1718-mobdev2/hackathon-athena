import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

export class ShopScreen extends React.Component {
    render(){
        return(
            <View style={styles.tmpContainer}>
                <Text h2>Shop Screen</Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
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