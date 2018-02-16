import React from 'react';
import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { OverviewScreen } from '../views/OverviewScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Shop: { screen: ShopScreen, },
        Overview: { screen: OverviewScreen},
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
);

export default RootStack;