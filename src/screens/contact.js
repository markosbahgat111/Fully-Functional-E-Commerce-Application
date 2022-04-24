import { Text, View, StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const Contact = () =>
{
    return (
        <View>
            <StatusBar animated={true} 
                barStyle='dark-content'
                backgroundColor="#eee"
                showHideTransition='fade' hidden={false} />
            <MaterialIcons name="quick-contacts-dialer" size={66} color="hsl(26, 100%, 55%)" />
            <Text>Contact Me Now!</Text>
        </View>
    );
}

export default Contact;
