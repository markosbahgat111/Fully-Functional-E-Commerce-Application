import React from 'react';
import About from 'src/screens/about';
import { Stack } from './stack';
import Header from 'src/shared/header';


const AboutStack = ({ navigation }) =>
{
    return (
        <Stack.Navigator screenOptions={{ header: (props) => <Header navigation={navigation} {...props} /> }}>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}
export default AboutStack;
