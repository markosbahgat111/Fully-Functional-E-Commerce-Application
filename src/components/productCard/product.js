import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { append, incrementCount, cartState } from 'src/slices/cart.slice';

const ProductCard = ({ product , handleNavigation}) =>
{
    const dispatch = useDispatch();
    const state = useSelector(cartState);
    const currentCount = state.cartProducts?.find(item => item.id === product.id)?.count;


    const handleAddToCart = () =>
    {
        if (!currentCount) dispatch(append({...product, count: 1}));
        else Alert.alert(
                "Product Increment Alert",
                "⚠️ Note: This Product Already exists in your cart, you wanna to add one more ?",
                [
                    {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Increment"),
                    style: "cancel"
                    },
                    { text: "YES", onPress: () => dispatch(incrementCount({id:product.id, count: currentCount + 1})) }
                ]
            );
    }


  return (
      <TouchableOpacity style={styles.container} onPress={() => handleNavigation(product)}>
          <Image source={{uri:product.image}} style={{ width: 200, height: 200, resizeMode:"contain", marginBottom:25 }} />
            <View style={{width:"100%"}}>
                <View>
                    <Text style={{fontFamily:"font-bold", fontSize:16, marginBottom:10}}>{product.title}</Text>
                    <Text style={styles.price}>${~~ product.price}</Text>
                </View>
                <Pressable style={styles.button} onPress={handleAddToCart}>
                    <Text style={{color:"#fff", marginHorizontal:5,}}>Add to cart</Text>
                    <MaterialIcons name="add-shopping-cart" size={24} color="white" />
                </Pressable>
            </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "85%",
        backgroundColor: "#fff",
        flexDirection: "column",
        margin: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:"space-between",
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOpacity:0.2,
    },
    button: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        backgroundColor: "hsl(26, 100%, 55%)",
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        borderRadius: 5,
        

    },
    price:{
        backgroundColor:"hsl(25, 100%, 94%)",
        color:"hsl(26, 100%, 55%)",
        alignSelf:"flex-start",
        fontSize:16,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius: 5,
        overflow:"hidden"
    }
})

export default ProductCard;
