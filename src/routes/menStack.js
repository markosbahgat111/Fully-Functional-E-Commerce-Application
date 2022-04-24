import React from 'react';
import Men from '../screens/men';
import Header from 'src/shared/header';
import ProductScreen from 'src/screens/product';
import { Stack } from './stack';



const MenStack = ({ navigation }) =>
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Men" component={Men} options={{ header: (props) => <Header navigation={navigation} {...props} /> }}/>
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={({ route }) => ({ title: route.params.product.title.split(' ').slice(0, 2).join(' ') + "..." })}
            />
        </Stack.Navigator>
    );
}
export default MenStack;
