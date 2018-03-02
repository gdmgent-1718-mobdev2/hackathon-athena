import React from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { OverviewScreen } from '../views/OverviewScreen';
import { ScanScreen } from '../views/ScanScreen';

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Shop: { screen: ShopScreen },
        Overview: { screen: OverviewScreen },
        Scan: { screen: ScanScreen }
    },
    {
        initialRouteName: 'Shop',
        headerMode: 'none',
    },
);

export default RootStack;