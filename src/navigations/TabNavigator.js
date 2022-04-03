
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./StackNavigator";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Menu from "../screens/Menu";
import Lifelyedit from "../screens/Lifelyedit";
import Account from "../screens/Account";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#5462E0',
                inactiveTintColor: '#000',
                keyboardHidesTabBar: 'true'
            }}
        >

            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="restaurant-menu" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Lifely"
                component={Lifelyedit}
                options={{
                    tabBarLabel: 'Lifely Edit',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="book-open" size={30} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;