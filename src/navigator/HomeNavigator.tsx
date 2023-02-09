import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HacerFilaScreen } from "../screens/home/HacerFilaScreen";
import { MisFilasScreen } from "../screens/home/MisFilasScreen";
import { PedirFilaScreen } from "../screens/home/PedirFilaScreen";
import { PedirFilaNavigator } from "./PedirFilaNavigator";




const Tab = createBottomTabNavigator();

export const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle:{backgroundColor:'#0ca5b0',borderBottomStartRadius:20,borderBottomEndRadius:20, marginBottom:10}
            }}
            >
            <Tab.Screen name='Pedir Fila' component={PedirFilaNavigator} />
            <Tab.Screen name='Hacer Fila' component={HacerFilaScreen} />
            <Tab.Screen name='Mis Filas' component={MisFilasScreen} />
        </Tab.Navigator>
    );
}