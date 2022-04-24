import { View, Image, StyleSheet } from "react-native";
import { Feather, Ionicons } from '@expo/vector-icons';
import userPhoto from 'src/assets/images/image-avatar.png';
import logo from 'src/assets/images/logo.png';
import { authState } from "src/slices/auth.slice";
import { toggleModel } from "src/slices/cart.slice";
import { useDispatch, useSelector } from 'react-redux'
import CartModel from 'src/components/cart/cart.js';

const Header = ({ navigation }) =>
{
    const isUser = useSelector(authState);
    const dispatch = useDispatch();

    return (
        <View style={styles.Header}>

            <View style={styles.logo_container}>
                <Feather name="menu" size={30} color="black" onPress={() => navigation.openDrawer()} />
                <Image source={logo} style={styles.logo} />
            </View>

            <CartModel navigation={navigation} />

            <View style={styles.cart_container}>
                <Ionicons name="cart-outline" size={30} color="black" onPress={() => dispatch(toggleModel())}/>
                {isUser.auth ? (
                    <View>
                        <Image source={userPhoto} style={{ width: 30, height: 30, marginLeft: 25, }} />
                    </View>
                ) : undefined}
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    Header: {
        width:"100%",
        height: 60,
        marginTop:20,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        marginBottom: 10,
        borderBottomColor: "#b5b5b5",
        borderBottomWidth: 2,
    },
    logo_container: {
        flexDirection: "row",
        alignItems:"center"

    },
    cart_container: {
        flexDirection: "row",
        alignItems:"center"

    },
    logo: {
        marginLeft: 10,
        width: 100,
        height: 40,
        resizeMode:'contain'
    }

});
export default Header;
