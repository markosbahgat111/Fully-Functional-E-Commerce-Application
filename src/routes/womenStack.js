import { Stack } from './stack';
import Women from 'src/screens/woman';
import React from 'react';
import Header from 'src/shared/header';
import ProductScreen from 'src/screens/product';



const WomenStack = ({ navigation }) =>
{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Women" component={Women} options={{ header: (props) => <Header navigation={navigation} {...props} /> }}/>
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={({ route }) => ({ title: route.params.product.title.split(' ').slice(0, 2).join(' ') + "..." })}
            />
        </Stack.Navigator>
    );
}
export default WomenStack;
