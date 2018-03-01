import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Streak } from '../components/Streak';
import { CameraScanner } from '../components/CameraScanner';

export class ScanScreen extends React.Component {


    // render(){
    //     return(
    //         <View style={styles.container}>
    //             <Text h4 style={styles.subtitle}>GASMETER</Text>
    //             <Text h3 style={styles.title}>SCAN BARCODE</Text>
    //         </View>
    //     );
    // }

    render() {
        return <CameraScanner />;
    }
}
