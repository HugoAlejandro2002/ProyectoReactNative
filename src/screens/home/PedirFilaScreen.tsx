import React from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { FilaSector } from "../../components/FilaSector"

export const PedirFilaScreen = () => {
    return (
        <View>
            <ScrollView>
                <FilaSector props={{section:'/pedirFilaSalud'}}/>
                <FilaSector props={{section:'/pedirFilaTransporte'}}/>
                <FilaSector props={{section:'/pedirfila'}}/>
            </ScrollView>
        </View>
    )
}