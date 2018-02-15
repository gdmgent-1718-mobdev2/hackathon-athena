import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import { Colors } from './src/utils/colors';
import { ScanContent } from './src/components/ScanContent';

export default class App extends React.Component {
  render() {
    return (
      <ScanContent />
    );
  }
};