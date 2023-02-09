import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RatingDynamic } from "./RatingDynamic"
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../themes/global';

export const FilaMakerCard = (props:any) =>{
    const {Nombre,Precio,Rating,Zona,Imagen} = props
    // console.log(Rating)
    const navigation= useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Confirmar Fila', {Nombre,Precio,Rating,Zona,Imagen})}>
            <View style={styles.containerCard}>
                <View style={{flex:1}}>
                    <Image source={{uri: Imagen}} style={styles.imageStyle}/>
                </View>
                <View style={styles.detailsFilaMaker}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{...styles.textInfo,color:'#0ca5b0'}}>Nombre: </Text>
                        <Text style={styles.textInfo}>{Nombre}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{...styles.textInfo,color:'#0ca5b0'}}>Precio: </Text>
                        <Text style={styles.textInfo}>{Precio} Bs</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{...styles.textInfo,color:'#0ca5b0'}}>Zona: </Text>
                        <Text style={styles.textInfo}>{Zona}</Text>
                    </View>
                    <RatingDynamic props={{Rating}}/>
                </View>
            </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerCard:{
        borderRadius:15, 
        margin: 5, 
        backgroundColor:'white', 
        padding:5,
        width:350,
        height:150,
        flexDirection:'row'
    },
    detailsFilaMaker:{
        flexDirection:'column', 
        justifyContent:'space-between',
        flex:1
    },
    imageStyle:{ 
        width: 150, 
        height: 150,
        flex:1,
        borderRadius: 15,
    },
    textInfo:{
        ...globalStyles.contentText,
        fontSize:15
    }
    
})