import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HacerFilaScreen } from "../screens/home/HacerFilaScreen";
import { PedirFilaScreen } from "../screens/home/PedirFilaScreen";
import { PedirFilaNavigator } from "./PedirFilaNavigator";




const Tab = createBottomTabNavigator();

export const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name='Pedir Fila' component={PedirFilaNavigator} />
            <Tab.Screen name='Hacer Fila' component={HacerFilaScreen} />
            <Tab.Screen name='Mis Filas' component={HacerFilaScreen} />
        </Tab.Navigator>
    );
}