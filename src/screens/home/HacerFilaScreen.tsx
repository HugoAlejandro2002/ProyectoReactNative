import { Text } from "@rneui/base";
import { Button, Input } from "@rneui/themed";
import { doc, setDoc } from "firebase/firestore/lite";
import { useFormik } from "formik";
import { View } from "react-native";
import * as YUP from 'yup';
import { db } from "../../services/firebase";
import { globalStyles } from "../../themes/global";
import {v4 as uuidv4} from 'uuid';


export const HacerFilaScreen = () => {
    const initialValues = {
        Nombre: '',
        Precio: ' ',
        Zona: '',

    };

    const registerHacerFila = async (Nombre:string,Precio:string,Zona:string) => {
        const rating = 4;
        const imagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png';
        try {
          const id = uuidv4();
          await setDoc(doc(db, '/filasHechasporMi', id), {
            Nombre,
            Precio,
            Rating: rating,
            Zona,
            Imagen:imagen,
            id,
          });
    
        } catch (e) {
          console.log('Error adding document: ', e);
        }
      };

    const formik = useFormik({

        initialValues: initialValues,
        validationSchema: YUP.object({
            Nombre: YUP.string()
                .required('se requiere de tu nombre')
            ,
            Precio: YUP.number().required('El precio es requerido'),
            Zona: YUP.string().required('Debes ingresar la Zona')
        }), validateOnChange: false,
        // validationOnChange: false,

        onSubmit: (formValue) => {
            registerHacerFila(formValue.Nombre, formValue.Precio,formValue.Zona)
        },
    });
    return (
        <View style={{ backgroundColor: '#fffaeb', flex: 1 ,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:300, alignItems:'center'}}>
                <Text style={{...globalStyles.titles,textAlign:'center'}}>Gana Dinero Haciendo Fila por Alguien</Text>
                <Input
                    placeholder="Nombre"
                    onChangeText={text => formik.setFieldValue('Nombre', text)}
                    errorMessage={formik.errors.Nombre}
                    containerStyle={{ marginTop: 30 }}
                />
                <Input
                    placeholder="Precio"
                    errorMessage={formik.errors.Precio}
                    onChangeText={number => formik.setFieldValue('Precio', number)}
                />
                <Input
                    placeholder="Zona"
                    errorMessage={formik.errors.Zona}
                    onChangeText={text => formik.setFieldValue('Zona', text)}
                />

                <Button
                    title="Hacer Fila"
                    loading={false}
                    //   loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: '#0ca5b0',
                        borderRadius: 20,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        height: 50,
                        width: 200,
                        marginTop: 30,
                        marginBottom: 15
                    }}
                    onPress={() => { formik.submitForm() }}
                />
            </View>
        </View>
    );
} 