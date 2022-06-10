import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: () => <Icon icon="meditation"></Icon>,
                    header: () => null,
                }}
            />
            <BottomTab.Screen
                name="profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: () => <Icon icon="tree"></Icon>,
                    header: () => null,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabs;
