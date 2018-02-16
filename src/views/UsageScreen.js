import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Colors } from '../utils/colors';
import { TopNav } from '../components/TopNav';


export class UsageScreen extends React.Component {
    render(){
        return(
          <View style={styles.tmpContainer}>
          <TopNav />
              <Text style={{ color:Colors.TEXT_GREEN, fontSize: 16, textAlign:'center' }}>Uw verbruik tot heden</Text>
              <Image style={styles.Image} source={require('../assets/img/Usage.png')} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  tmpContainer: {
       marginTop: 50,
  },
  Image: {
       marginTop: 50
  }
})
