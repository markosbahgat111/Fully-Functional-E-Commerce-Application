
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack.js';
import CollectionsStack from './collectionsStack.js';
import MenStack from './menStack.js';
import WomenStack from './womenStack.js';
import AboutStack from './aboutStack.js';
import ContactStack from './contactStack.js';
import { useSelector } from 'react-redux';
import { authState } from 'src/slices/auth.slice.js';


const Drawer = createDrawerNavigator();


function MyDrawer()
{
    const state = useSelector(authState);
    return (
        <Drawer.Navigator initialRouteName="Home-stack" screenOptions={{ headerShown: false }}>
           {!state.auth ? ( <Drawer.Screen
                name="Home-stack"
                component={HomeStack}
                options={{ drawerLabel: "Home" }}
                
            />) : undefined}
            <Drawer.Screen
                name="Collections-stack"
                component={CollectionsStack}
                options={{ drawerLabel: "Collections" }}
            />
            <Drawer.Screen
                name="Men-stack"
                component={MenStack}
                options={{ drawerLabel: "Men" }}
            />
            <Drawer.Screen
                name="Women-stack"
                component={WomenStack}
                options={{ drawerLabel: "Women" }}
            />
            <Drawer.Screen
                name="About-stack"
                component={AboutStack}
                options={{ drawerLabel: "About" }}
            />
            <Drawer.Screen
                name="Contact-stack"
                component={ContactStack}
                options={{ drawerLabel: "Contact" }}
            />
        </Drawer.Navigator>
    );
}


export default MyDrawer;
