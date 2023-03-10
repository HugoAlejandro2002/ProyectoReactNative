import React from "react"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "../screens/account/LoginScreen";
import { useSelector } from "react-redux";
import { HomeNavigator } from "./HomeNavigator";
import { SignUpScreen } from "../screens/account/SignUpScreen";



const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
    const selector = useSelector(store => store.auth);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            {selector.isLogin ?
                <Stack.Screen name='HomeScreen' component={HomeNavigator} /> :
                <Stack.Screen name='LoginScreen' component={LoginScreen} />                
            }
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />


        </Stack.Navigator>
    )
}