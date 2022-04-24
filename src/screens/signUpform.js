import SignUpForm from "src/components/signUpForm/signUp";
import { Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Divider from "src/shared/divider";

const Sign_Up = ({navigation}) =>
{
    return (
        <SafeAreaView style={styles.sign_container}>
            <StatusBar animated={true} 
                barStyle='dark-content'
                backgroundColor="#eee"
                showHideTransition='fade' hidden={false} />
            <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 40, marginBottom: 10, textTransform: "uppercase" }}>
                Sign Up
            </Text>
            <Divider/>
            <SignUpForm navigation={navigation} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    sign_container: {
        flex: 1,
        marginVertical: 40,
    }
})
export default Sign_Up;
