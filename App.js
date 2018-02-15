import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import { Colors } from './utils/colors';
import { ScanContent } from './components/ScanContent';

export default class App extends React.Component {

  render() {
    return (
      <ScanContent />
    );
  }
};