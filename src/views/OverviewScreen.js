import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Colors } from '../utils/colors';

import { TopNav } from '../components/TopNav';
import { ValueSlider } from '../components/ValueSlider';
import { BottomNav } from '../components/BottomNav';



export class OverviewScreen extends React.Component {
    render(){
        return(
          <View style={styles.tmpContainer}>
            <Text h4 style={{ textAlign: 'center' }}>Elektriciteit</Text>
            <ValueSlider />
            <Text h4 style={{ textAlign: 'center' }}>Water</Text>
            <ValueSlider />
            <Text h4 style={{ textAlign: 'center' }}>Gas</Text>
            <ValueSlider />
            <BottomNav navigation={this.props.navigation} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  tmpContainer: {
       flex: 1,
       justifyContent: 'center',
       marginTop: 100
  },
  Image: {
       marginTop: 50
  }
})
