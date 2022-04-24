import React from 'react';
import Home from 'src/screens/home';
import Sign_Up from 'src/screens/signUpform';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from './stack';


const HomeStack = ({ navigation }) =>
{
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
            <Stack.Screen
                name='SignUpForm'
                component={Sign_Up}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerLeft: () => <Ionicons
                        onPress={() => navigation.navigate("Home")}
                        name="arrow-back-circle"
                        size={40}
                        color="hsl(26, 100%, 55%)"
                    />
                }} />
        </Stack.Navigator>
    );
}
export default HomeStack;
