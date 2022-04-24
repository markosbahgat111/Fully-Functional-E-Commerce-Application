import { View, Text, TextInput, StyleSheet, SafeAreaView, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { signIn, userAuthnticated } from 'src/slices/auth.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpForm({ navigation })
{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email:'',
            password: '',
            confirmPassword: ''
        }
    }); 


    const _setUser = async (value) => {
        try {
            await AsyncStorage.setItem('user', value);
            dispatch(userAuthnticated(value));
            
        } catch (error) {
            Alert.alert('Error', "Error Happened While Saving Your Data", [{text:"Retry", onPress:() => console.log("Okay")}]);
        }
    };
    

    const onSubmit = data =>
    {
        setLoading(true);
        const { email, password, confirmPassword } = data;
        reset();
        if (password === confirmPassword) dispatch(signIn({ email, password, confirmPassword }));
        setTimeout(() => {
            setLoading(false);
            navigation.jumpTo('Collections-stack');
            _setUser(email);
        }, 3000);
    };


    if (loading) return <Text style={{ flex: 1, textAlign: "center", marginTop: 50, }}>Loading....</Text>;
    

return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.main_container}>
            <View style={styles.inputs_container}>
              
            <Controller control={control} rules={{required: true,}} name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.label_container}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.input_container}>
                            <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
                            <TextInput placeholder='Email Address'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}/>
                        </View>
                    </View>
                )}/>
            {errors.email && <Text>This is required.</Text>}
              
                    
            <Controller control={control} rules={{ required: true }}  name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.label_container}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.input_container}>
                        <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
                        <TextInput secureTextEntry={!showPassword} placeholder='Password' 
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />
                        <TouchableOpacity onPress={() => setShowPassword(showPassword => !showPassword)}>
                            <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"}  size={24} color="black" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View> )}/>
            {errors.password && <Text>This is required.</Text>}
              
            <Controller control={control} rules={{ required: true }} name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.label_container}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.input_container}>
                        <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
                        <TextInput placeholder='Confirm Password' secureTextEntry={!showPassword}
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                        <TouchableOpacity onPress={() => setShowPassword(showPassword => !showPassword)}>
                            <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={24} color="black" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View> )} />
            {errors.confirmPassword && <Text>This is required.</Text>}
            
        </View>
        <View style={styles.handling_container}>
              <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>
              <Text>Don't Have Time ? <Link to={{screen:"Collections-stack"}} onPress={() => navigation.pop()} style={styles.cncl}> Not Now!</Link></Text>
        </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },
    inputs_container: {
        flex:1,
    },
    label_container: {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "90%",
        alignSelf:"center"
        
    },
    label: {
        fontFamily: "font-bold",
        fontSize:16,
    },
    input_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: "100%",
        height: 60,
        borderRadius: 5,
        marginVertical:10,
    },
    icon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    handling_container: {
        width:"100%",
        flexDirection: "column",
        alignItems: "center",
        alignSelf:"center"
    },
    button : {
        width: "90%",
        textAlign:"center",
        backgroundColor: "hsl(26, 100%, 55%)",
        borderRadius: 5,
        paddingVertical: 10,
        marginVertical:15,
        
    },
    buttonText: {
        textAlign: "center",
        fontSize: 22,
        color:"#fff"
    },
    cncl: {
        color: "#ff8c32",
        fontFamily:"font-bold"
    }
})
