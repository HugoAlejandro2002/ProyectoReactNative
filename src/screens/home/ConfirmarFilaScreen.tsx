import { Text, Card, Button, Icon, Tile } from "@rneui/base";
import React from "react"
import { View } from "react-native"
import { RatingDynamic } from "../../components/RatingDynamic";
import { globalStyles } from "../../themes/global";


export const ConfimarFilaScreen = (props: any) => {
    const {
        navigation,
        route: { params },
    } = props;
    const { Nombre, Precio, Rating, Zona, Imagen } = params

    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <Card containerStyle={{borderRadius:20, width:300}}>
                <Card.Title style={globalStyles.titles}>{Nombre}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{borderRadius:20}}
                    source={{
                        uri:
                            Imagen,
                    }}
                />
                <Text style={globalStyles.contentText}>
                    Cobra por hacer fila: {Precio} Bs
                </Text>
                <Text style={{...globalStyles.contentText, marginBottom: 10 }}>
                    En la Zona: {Zona}
                </Text>
                <Button
                    buttonStyle={{
                        backgroundColor: '#0ca5b0',
                        borderRadius: 20,
                    }}
                    title="CONFIRMAR FILA"
                />
            </Card>
            <Text style={{...globalStyles.contentText,fontSize:20}}>
                Su rating va de:
            </Text>
            <RatingDynamic props={{Rating}} />
        </View>
    )
}