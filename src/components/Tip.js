import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import { Colors } from '../utils/colors';
import { styles } from '../utils/styles';



export class Tip extends React.Component {
    
    render(){
        const tips = [
            "Vang het regenwater op en gebruik het voor toiletspoeling, wasmachines en dienstkranen.", 

            "Laat in de douche een spaarkop installeren die maximaal 6 liter per minuut verbruikt.",

            "Goed voor het milieu en de portemonnee: het gebruik van energie uit hernieuwbare energiebronnen.",

            "Wanneer je streak hoog genoeg is kan je nieuwe skins aankopen in de winkel",

            "Stel je minimaal verbruik zelf in op de overzichten pagina",
        ];
        const rn = Math.floor(Math.random() * tips.length);
        
        return(
            <Text h5 style={styles.tip}>{tips[rn]}</Text>
        );
    }
}