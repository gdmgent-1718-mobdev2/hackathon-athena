import React from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { OverviewScreen } from '../views/OverviewScreen';
import { ScanScreen } from '../views/ScanScreen';
import { SettingsScreen } from '../views/SettingsScreen';
import { LoadScreen } from '../views/LoadScreen';

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Shop: { screen: ShopScreen },
        Overview: { screen: OverviewScreen },
        Scan: { screen: ScanScreen },
        Settings: { screen: SettingsScreen },
        Load: { screen: LoadScreen }
    },
    {
        initialRouteName: 'Load',
        headerMode: 'none',
    },
);

export default RootStack;