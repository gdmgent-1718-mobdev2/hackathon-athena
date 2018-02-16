import React from 'react';
import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { UsageScreen} from '../views/UsageScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Shop: { screen: ShopScreen, },
        Usage: {screen: UsageScreen},
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
);

export default RootStack;