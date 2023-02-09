import React from "react"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PedirFilaScreen } from "../screens/home/PedirFilaScreen";
import { ConfimarFilaScreen } from "../screens/home/ConfirmarFilaScreen";



const Stack = createNativeStackNavigator();

export const PedirFilaNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Pedido Fila' component={PedirFilaScreen} />
            <Stack.Screen name='Confirmar Fila' component={ConfimarFilaScreen} />
        </Stack.Navigator>
    )
}