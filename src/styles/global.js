import { StyleSheet } from "react-native";
import * as Font from 'expo-font';
const globalStyles = StyleSheet.create({/* here we should make a variables to use for global styles*/})

const customFonts = {
    'font-black': require('../assets/fonts/KumbhSans-Black.ttf'),
    'font-bold': require('../assets/fonts/KumbhSans-Bold.ttf'),
    'font-light': require('../assets/fonts/KumbhSans-Light.ttf'),
    'font-regular': require('../assets/fonts/KumbhSans-Regular.ttf'),
}
export const LoadFonts = () => Font.loadAsync(customFonts);
export default globalStyles;
