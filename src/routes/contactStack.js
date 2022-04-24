import { Stack } from './stack';
import Contact from 'src/screens/contact';
import React from 'react';
import Header from 'src/shared/header';


const ContactStack = ({ navigation }) =>
{
    return (
        <Stack.Navigator screenOptions={{ header: (props) => <Header navigation={navigation} {...props} /> }}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}
export default ContactStack;
