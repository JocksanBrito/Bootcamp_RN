import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import Home from '~/screen/SignIn/screen/SignedIn/Home';
import Profile from '~/screen/SignIn/screen/SignedIn/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: () => <Icon icon="meditation"></Icon>,
                    header: () => null,
                }}
            />
            <BottomTab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: () => <Icon icon="tree"></Icon>,
                    header: () => null,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabsNavigator;
