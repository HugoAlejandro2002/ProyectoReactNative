import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button, Input } from "@rneui/themed"
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase'
import { useDispatch } from "react-redux";
import { authUser } from "../../store/actions/authUserAction";
import { useSelector } from "react-redux";


export const SignUpScreen = (props:any) => {
    const {
        navigation,
    } = props;
    // console.log(props)

    const dispatch = useDispatch();
    const selector = useSelector(store => store.auth);
  
    const initialValues = {
        email: '',
        password: '',
    };

    const signup = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                //console.log(user)
                navigation.popToTop()
                dispatch(authUser)
                //console.log(selector.isLogin)
                
            })
            .catch((error) => {
                console.error(error)
            });
    }

    const formik = useFormik({

        initialValues: initialValues,
        validationSchema: YUP.object({
            email: YUP.string()
                .required('El email es Requerido.')
                .email('No es un email valido'),
            password: YUP.string().required('El password es Requerido.'),
        }), validateOnChange: true,
        // validationOnChange: false,

        onSubmit: (formValue) => {
            signup(formValue.email, formValue.password)
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={require('../../assets/logofila.png')}
                />
            </View>
            <View style={styles.formContainer}>
                <Input
                    placeholder="Email"
                    onChangeText={text => formik.setFieldValue('email', text)}
                    errorMessage={formik.errors.email}
                    containerStyle={{ marginTop: 30 }}
                />
                <Input
                    placeholder="Password"
                    errorMessage={formik.errors.password}
                    onChangeText={text => formik.setFieldValue('password', text)}
                    secureTextEntry={true}
                />
                <Button
                    title="Registrate"
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
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffaeb'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    formContainer: {
        flex: 1,
        alignItems: 'center'
    }

})