import React from "react";
import { View } from "react-native";
import { MisFilasSector } from "../../components/MisFilasSector";


export const MisFilasScreen = () =>{


    return (
        <View style={{flex:1,backgroundColor:'#fffaeb'}}>
            <View style = {{flex:1}}>
                <MisFilasSector props={{section:'/filasPedidas'}}/>
            </View>
            <View style = {{flex:1}}>
                <MisFilasSector props={{section:'/filasHechasporMi'}}/>
            </View>
        </View>
    );
}