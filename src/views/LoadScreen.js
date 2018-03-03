import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';

import { styles } from '../utils/styles';
import { Colors } from '../utils/colors';

export class LoadScreen  extends React.Component {
    render(){
        const tips = [
            {
                text: "Vang het regenwater op en gebruik het voor toiletspoeling, wasmachines en dienstkranen. In nieuwe woningen is de opvang van regenwater sowieso verplicht."
            },
            {
                text: "Laat in de douche een spaarkop installeren die maximaal 6 liter per minuut verbruikt. Je wastafels kan je voorzien van een toestel met debietbegrenzing."
            },
            {
                text: "Goed voor het milieu en de portemonnee: het gebruik van energie uit hernieuwbare energiebronnen (bv panelen die elektriciteit opwekken door zonne-energie). Aangezien dit pas iets oplevert op lange termijn, moet je durven investeren."
            },
            {
                text: "Warm water moet dikwijls een hele weg afleggen voor het zijn bestemming bereikt. Dat kost natuurlijk heel wat energie. In een nieuwbouw kan je de warmwaterproductie dus maar best decentraliseren. Uiteraard helpt de isolatie van de leidingen ook."
            },
        ]

        const rn = Math.floor(Math.random() * tips.length);

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.DARK_GREEN}}>
                <Icon
                    name='leaf'
                    type='entypo'
                    size={80}
                    color={Colors.LIGHT_GREEN}
                />
                {
                    // tips.map((tip, i) => (
                    //     <Text h4 key={i}>{tip.text}</Text>
                    // ))
                    <Text h4>{tips[2]}</Text>
                }
            </View>
        );
    }
}
