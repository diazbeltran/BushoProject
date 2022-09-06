
import {  Dimensions,  Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Component } from "react";


import { scale  } from '../styles/scaling.js';

import Svg, { Path } from 'react-native-svg';



const { width, height } = Dimensions.get('window');
const size = (width >= 768) ? scale(10) : scale(20);
const isIphoneX = DeviceInfo.hasNotch();

const StatusBarHeight = Platform.select({
    ios: isIphoneX == true ? 30 : 15,
    android: 0,//StatusBar.currentHeight,
    default: 0
})

const BarHeight = Platform.select({
    ios: isIphoneX == true ? 130 : 70,
    android: 60,
    default: 0
})

const BarHeightAuth = Platform.select({
    ios: isIphoneX == true ? 90 : 60,
    android: 60,
    default: 0
})

const TabBarHeight = Platform.select({
    ios: isIphoneX == true ? 80 : 50,
    android: 50,
    default: 0
})

const TabBarPaddingBottom = Platform.select({
    ios: isIphoneX == true ? 20 : 0,
    android: 0,
    default: 0
})

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';








//---- FIN HEADER ----

//---- AuthLoadingStack ----
import Splash0Screen from '../views/Splash0Screen.js';
import SplashScreen from '../views/SplashScreen.js';
//import Splash2Screen from '../views/Splash2Screen.js';
//import initializingScreen from '../views/initializing';
//---- FIN AuthLoadingStack ----

import LoginScreen from '../views/Login/Login.view.js';                





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function InitialNavigator() {
    return (
        <Stack.Navigator 
            options={{
                gestureEnabled: false,
                headerShown:false,
            }}
        >
            <Stack.Screen name="Splash0" component={Splash0Screen} options={{headerShown:false}} />
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
            {/* <Stack.Screen name="Splash2" component={Splash2Screen} options={{headerShown:false}} /> */}
            
        </Stack.Navigator>
    );
}

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                gestureEnabled: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'red',
                    height: BarHeightAuth
                },
            }}
            options={{
                gestureEnabled: false,
            }}
        >
            <Stack.Screen name="Login" 
                options={{ headerShown: false }} 
                component={LoginScreen} />
                

                
               
         {/* <Stack.Screen name="Recupera" 
                options={{ headerShown: false }} 
                component={RecuperaScreen} />
            

            <Stack.Screen name="IngresoCodigo" 
                options={{ headerShown: false }} 
                component={IngresaCodigoScreen} />
         

         <Stack.Screen name="CreaContraseña" 
                options={{ headerShown: false }} 
                component={CreaContraseñaScreen} />
         

            <Stack.Screen name="Registra" 
                    options={{ headerShown: false }} 
                    component={RegistraScreen} />


                <Stack.Screen name="RegistraFoto" 
                options={{ headerShown: false }} 
                component={RegistraFotoScreen} /> */}

            
        </Stack.Navigator>
    );
}










class routes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userToken: null,
        }
    }

    render() {
        return (
            <NavigationContainer
                theme={navTheme}
            >
                
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Initial" component={InitialNavigator} />
                    <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Auth" component={AuthNavigator} /> 
                    {/* <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="App" component={MainNavigator} /> */}
                </Stack.Navigator>

            </NavigationContainer>
        );
    }

}

export default routes;