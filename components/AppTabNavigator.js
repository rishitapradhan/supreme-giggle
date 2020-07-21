import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        tabBarIcon:<Image source={require("../assets/request-list.png")}
    }
})
