import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { collection,getDocs} from 'firebase/firestore/lite'
import { db } from "../services/firebase";
import { FilaMakerCard } from "./FilaMakerCard";
import { globalStyles } from "../themes/global";


export const FilaSector = ({props}: any) => {
    const {section} = props
    
    console.log(section)
    const sectorMap = {
      '/pedirfila': 'Educacion',
      '/pedirFilaTransporte': 'Transporte',
      '/pedirFilaSalud': 'Salud'
    }
    const [filas, setFilas] = useState([]);

    const queryFilas = async () => {
        await getDocs(collection(db, section)).then(querySnapshot => {
        const newFilas = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
            setFilas(newFilas);
            // console.log(newFilas);
        });
    };
    useEffect(() => {
        queryFilas();
    }, []);

    return (
        <View>
          <View style={globalStyles.titleSection}>
            <Text style={globalStyles.titles}>{sectorMap[section]}</Text>
            {/* <Text style={{ fontSize: 16 }}>See all</Text> */}
          </View>
          <FlatList
            data={filas}
            renderItem={({ item }) => <FilaMakerCard {...item} />}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      );
}