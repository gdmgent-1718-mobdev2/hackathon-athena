import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Colors } from '../utils/colors';
import { TopNav } from '../components/TopNav';
import { Slider } from 'react-native-elements'



export class OverviewScreen extends React.Component {
    render(){
        return(
          <View style={styles.tmpContainer}>
              <Slider orientation='vertical' />
              <Text style={{textAlign:'center'}}>Value: Hier komt de waarde</Text>

          </View>
          
      );
  }
}

const styles = StyleSheet.create({
  tmpContainer: {
       marginTop: 250,
  },
  Image: {
       marginTop: 50
  }
})
