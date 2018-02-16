import React from 'react';
import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Shop: { screen: ShopScreen, },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
);

export default RootStack;