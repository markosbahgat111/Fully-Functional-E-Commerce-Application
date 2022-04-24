import { Stack } from './stack';
import Collections from 'src/screens/collections';
import React from 'react';
import Header from 'src/shared/header';
import ProductScreen from 'src/screens/product';


const CollectionsStack = ({ navigation }) =>
{
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Collections"
                component={Collections}
                options={{ header: (props) => <Header navigation={navigation} {...props} /> }}
            />
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={({ route }) => ({ title: route.params.product.title.split(' ').slice(0, 2).join(' ') + "..." })}
            />

        </Stack.Navigator>
    );
}
export default CollectionsStack;
