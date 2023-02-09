import { Text, Card, Button, Icon, Tile } from "@rneui/base";
import React from "react"
import { View } from "react-native"
import { RatingDynamic } from "../../components/RatingDynamic";
import { globalStyles } from "../../themes/global";
import {doc, setDoc} from 'firebase/firestore/lite';
import {v4 as uuidv4} from 'uuid';
import { db } from "../../services/firebase";


export const ConfimarFilaScreen = (props: any) => {
    const {
        navigation,
        route: { params },
    } = props;
    const { Nombre, Precio, Rating, Zona, Imagen } = params

    const registerFila = async () => {
        try {
          const id = uuidv4();
          await setDoc(doc(db, '/filasPedidas', id), {
            Nombre,
            Precio,
            Rating,
            Zona,
            Imagen,
            id,
          });
          navigation.popToTop()
        } catch (e) {
          console.log('Error adding document: ', e);
        }
      };

    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'#fffaeb'}}>
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
                    onPress={() => registerFila()}
                />
            </Card>
            <Text style={{...globalStyles.contentText,fontSize:20}}>
                Su rating va de:
            </Text>
            <RatingDynamic props={{Rating}} />
        </View>
    )
}