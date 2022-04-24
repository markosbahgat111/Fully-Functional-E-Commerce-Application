import 'react-native-gesture-handler';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import MyDrawer from 'src/routes/drawer.js';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import { LoadFonts } from 'src/styles/global';


export default function App()
{
  const [IsReady, setIsReady] = useState(false);
  
  if (!IsReady) return ( <AppLoading
          startAsync={LoadFonts}
          onFinish={() => setIsReady(true)}
          onError={() => console.log("Error Happened While Loading Fonts")}
  />);
  
  return (
    <Provider store={store}>
      <NavigationContainer>
          <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
