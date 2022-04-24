import { ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { dataState } from 'src/slices/data.slice'
import ProductCard from 'src/components/productCard/product';


const Collections = ({navigation}) =>
{
  const state = useSelector(dataState);
  const handleNavigation = (product) => navigation.navigate('Product', { product });

    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar animated={true} 
                barStyle='dark-content'
                backgroundColor="#eee"
                showHideTransition='fade' hidden={false} />
        
          {state.products?.map(product => <ProductCard product={product} key={product.id} handleNavigation={handleNavigation} />)}
        </ScrollView>
    );
}

export default Collections;
