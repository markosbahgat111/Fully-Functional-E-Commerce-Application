
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, StatusBar } from 'react-native';
import storePhoto from 'src/assets/images/Asset1.png';

const Home = ({ navigation }) =>
{
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <Image source={storePhoto} style={{ width: 300, height: 300, resizeMode: "contain" }} />
            <View style={styles.intro_container}>
                <Text style={{ fontFamily: "font-bold", fontSize: 25, }}>Sneakers Store</Text>
                <Text style={{ textAlign: "center" }}>
                    Simple and easy online store to use , here you can find everything you want from clothes to shoes.
                </Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate("SignUpForm")}>
                <Text style={styles.buttonText}>Let"s get Started</Text>
            </Pressable>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-around"
    },
    intro_container: {
        flexDirection: "column",
        alignItems: "center",
        textAlign:"center"
    },
    button: {
        width: "90%",
        height:50,
        backgroundColor: "hsl(26, 100%, 55%)",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize:22,
    }
})
export default Home;
