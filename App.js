import React from 'react';
import View from 'react-native';
import Text from 'react-native-elements';

import Colors from './src/utils/colors';
import ScanContent from './src/components/ScanContent';
import RootStack from './src/navigator/RootStack';
import { initFirebase } from './src/config/firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    }
    initFirebase();
  }
  
  render() {
    return <RootStack />;
  }
};