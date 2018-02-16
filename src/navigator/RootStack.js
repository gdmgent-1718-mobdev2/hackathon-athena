import React from 'react';
import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { ScanScreen } from '../views/ScanScreen';
import { LoadScreen } from '../views/LoadScreen';
import { OverviewScreen } from '../views/OverviewScreen';
import { SettingsScreen } from '../views/SettingsScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Shop: { screen: ShopScreen },
        Scan: { screen: ScanScreen},
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
);

export default RootStack;