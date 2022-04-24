import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Me from 'src/assets/images/markos.jpg';


const About = () =>
{
    const stacks = [
        "React Native",
        "Expo Dev",
        "React Redux",
        "Redux Toolkit",
        "Redux Navigation",
        "Redux Hook Form",
        "Axios",
        "React Native Async Storage"
    ]
    return (
        <View style={styles.container}>
            <StatusBar animated={true} 
                barStyle='dark-content'
                backgroundColor="#eee"
                showHideTransition='fade' hidden={false} />
            <Image source={Me} style={{ width: 150, height: 150, resizeMode: "cover", borderRadius: 100, }} />
            <View style={styles.identity_container}>
                <Text style={styles.name}>Markos Bahgat</Text>
                <Text style={styles.exper}>Front End Developer With almost 3 years of experience in Front End development field.</Text>
            </View>
            <View style={styles.about_container}>
                <Text style={{color:"hsl(26, 100%, 55%)", fontFamily:"font-bold", fontSize:20, marginBottom:5}}>About This Project:</Text>
                <Text style={{fontFamily:"font-regular", fontSize:13, textAlign:"center"}}>This is an advanced E-commerce Online Store For Clothes and accessories for both men and women.</Text>
                <Text style={{fontFamily:"font-regular", fontSize:20, marginTop:25, marginBottom:5}}>Tech Stack:</Text>
                <View style={styles.stack_container}>
                    {stacks.map((stack, index) => (
                        <Text key={index} style={styles.stackItem}> - {stack}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    identity_container: {
        width: "100%",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        marginVertical:20
    },
    name: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: "font-bold",
        textTransform:"uppercase",
    },
    exper: {
        textAlign:"center"
    },
    about_container: {
        marginTop: 15,
        alignItems: "flex-start",
        justifyContent:"space-around"
    },
    stack_container: {
        marginLeft: 20,
    },
    stackItem: {
        fontFamily: "font-regular",
        fontWeight: "bold",
        fontSize:15
    }
});

export default About;
