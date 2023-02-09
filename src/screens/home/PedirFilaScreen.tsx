import React from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { FilaSector } from "../../components/FilaSector"

export const PedirFilaScreen = () => {
    return (
        <View style={{backgroundColor:'#c2def2', flex:1,borderTopEndRadius:20,borderTopStartRadius:20}}>
            <ScrollView>
                <FilaSector props={{section:'/pedirFilaSalud'}}/>
                <FilaSector props={{section:'/pedirFilaTransporte'}}/>
                <FilaSector props={{section:'/pedirfila'}}/>
            </ScrollView>
        </View>
    )
}