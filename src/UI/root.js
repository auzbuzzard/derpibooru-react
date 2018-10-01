import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import HomeFeed from './Screens/home';

export default createBottomTabNavigator({
    Home: HomeFeed,
})