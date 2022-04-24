import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartState, toggleModel } from 'src/slices/cart.slice';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { remove } from "src/slices/cart.slice";
import Divider from "src/shared/divider";

const CartModel = ({navigation}) =>
{
    const state = useSelector(cartState);
    const dispatch = useDispatch();
    let totalPrice = 0;
    state.cartProducts.forEach(item => totalPrice += item.price * item.count);


    const handleRemoveFromCart = (id) => dispatch(remove(id));
    const handleNavigate = (item) =>
    {
        dispatch(toggleModel())
        navigation.navigate("Product", { product: item })
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={state.showCart}
            onRequestClose={() => dispatch(toggleModel())}
            style={styles.centeredView}
        >
            <View style={{ ...styles.modalView, height: `${state.cartProducts.length > 0 ? "80%" : "40%"}` }}>
                

                <View style={styles.title_container}>
                    <Text style={styles.modalTitle}>Store Cart</Text>
                    <Pressable
                        style={styles.buttonClose}
                        onPress={() => dispatch(toggleModel())}
                    >
                        <Ionicons name="md-close" size={30} color="hsl(26, 100%, 55%)" />
                    </Pressable>
                </View>



            {state.cartProducts.length > 0 ?
                    (
                <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.products_container}>
                    {state.cartProducts?.map(item => (
                        <TouchableOpacity key={item.id} style={styles.product_container} onPress={() => handleNavigate(item)}>
                            <View style={{flexDirection:"row", alignItems: 'center',}}>
                                <Image source={{ uri: item.image }} style={{ width: 50, height: 50, resizeMode: "contain", marginRight:10, }} />
                                <View>
                                    <Text style={{ fontFamily: "font-bold", fontSize: 18, }}>
                                        {item.title.split(' ').slice(0, 3).join(' ')}
                                    </Text>
                                    <Text style={{ fontFamily: "font-bold" }}>
                                        <Text style={{ color: "#999", fontFamily: "font-light" }}>${item.price} x {item.count} </Text>
                                        ${item.price * item.count}
                                    </Text>
                                </View>
                            </View>
                            <AntDesign name="delete" size={24} color="#888" onPress={() => handleRemoveFromCart(item.id)}/>
                        </TouchableOpacity>
                        ))}
                    </ScrollView>
                    )
                    :
                    (
                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: "center" }}>
                            <Text style={{ fontFamily: "font-bold", letterSpacing: 1, fontSize: 22 }}>
                                Your Cart Is Empty.
                            </Text>
                    </View>
                    )}
                {state.cartProducts.length > 0 && (
                    <>
                    <Divider />
                    <View style={styles.total_section}>
                        <Text>Total Pay:</Text>
                        <Text style={{fontFamily:"font-bold", fontSize:16}}>{totalPrice}</Text>
                    </View>
                    <Pressable style={styles.checkout_button}>
                        <Text style={{color:"white", fontFamily:"font-regular", fontSize:18, letterSpacing:1,}}>Checkout</Text>
                    </Pressable>
                    </>
                )}
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        backgroundColor: "#888",
    },
    modalView: {
        marginTop:90,
        width: "90%",
        alignSelf: "center",
        alignContent:"center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    title_container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: 2,
        paddingBottom:10
    },
    modalTitle: {
        textAlign: "center",
        fontFamily: "font-bold",
        fontSize: 20,
        textTransform:"uppercase",
    },
    products_container: {
        
    },
    product_container: {
        width:"90%",
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "flex-start",
        alignContent: 'flex-start',
        justifyContent: "space-between",
        marginVertical:15,
    },
    checkout_button: {
        width: "100%",
        backgroundColor: "hsl(26, 100%, 55%)",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        height: 50,
        borderRadius: 5,
    },
    total_section: {
        height: 40,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%"
    }
  });
export default CartModel
