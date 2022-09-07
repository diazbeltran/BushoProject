
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

//---- FIN AuthLoadingStack ----

import LoginScreen from '../views/Login/Login.view.js'; 
import RecuperaScreen from '../views/Recupera/Recupera.view.js';
import IngresaCodigoScreen from '../views/Recupera/RecuperaIngresaCodigo.view.js';
import CreaContraseñaScreen from '../views/Login/RecuperaCreaPass.view.js';
import RegistraScreen from '../views/Registra/Registra.view.js';
import RegistraFotoScreen from '../views/Registra/RegistraFoto.view.js';



// --

import HomeScreen from '../views/Home/Inicio.view.js';

import NotificacionScreen from '../views/Home/Notifica.view.js';
import Notificacion1Screen from '../views/Home/Notifica_1.view.js';
import Notificacion2Screen from '../views/Home/Notifica_2.view.js';
import Notificacion3Screen from '../views/Home/Notifica_3.view.js';
import MensajesScreen from '../views/Home/Mensaje.view.js';
import MensajeChatScreen from '../views/Home/MensajeChat.view.js';
import FavoritoScreen from '../views/Favoritos/FavoritosInicio.view.js';
import BuscarScreen from '../views/Buscar/BuscaInicio.view.js';
import BuscarDispoScreen from '../views/Buscar/BuscaDispo.view.js';
import BuscarDetalleScreen from '../views/Buscar/BuscaDetalle.view.js';
import BuscarPerfilScreen from '../views/Buscar/BuscaPerfil.view.js';
import BuscarReseñaScreen from '../views/Buscar/BuscaReseña.view.js';
import BuscarReglaScreen from '../views/Buscar/BuscaRegla.view.js';
import BuscarFinalScreen from '../views/Buscar/BuscaFinal.view.js';

// -





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
                

                
               
         <Stack.Screen name="Recupera" 
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
                component={RegistraFotoScreen} />

            
        </Stack.Navigator>
    );
}




function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Main" 
            component={MainTabs}  

            options={{
                    tabBarLabel: 'Seguimientos',
                    headerShown:false,
                    gestureEnabled:false,
                }}
                />
        </Stack.Navigator>
    );
}

function MainTabs() {
    return (
        <Tab.Navigator
       
            screenOptions={({ route }) => ({
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily:'NunitoSans-Regular'
                  },
                tabBarActiveTintColor: "#050d00",
                tabBarStyle: { height:70, paddingBottom:10, },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let anchoIcono = 60;
                    let altoIcono = 60;
                    switch (route.name) {
                    
                        case 'Inicio':
                            if (focused) {
                                return <View style={{ flex: 1, width: '100%', }}>
                                <View style={{ top: 0, height: 2 , backgroundColor: '#D4D4D4', }} ></View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab.png')} /> */}

                                    <Svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M18 18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8947 17.2652 19 17 19H1C0.734784 19 0.48043 18.8947 0.292893 18.7071C0.105357 18.5196 2.4071e-07 18.2652 2.4071e-07 18V7.49003C-0.000105484 7.33764 0.0346172 7.18724 0.101516 7.05033C0.168415 6.91341 0.26572 6.79359 0.386 6.70003L8.386 0.478028C8.56154 0.341473 8.7776 0.267334 9 0.267334C9.2224 0.267334 9.43846 0.341473 9.614 0.478028L17.614 6.70003C17.7343 6.79359 17.8316 6.91341 17.8985 7.05033C17.9654 7.18724 18.0001 7.33764 18 7.49003V18ZM16 17V7.97803L9 2.53403L2 7.97803V17H16ZM4 13H14V15H4V13Z" fill="#09121F"/>
                                    </Svg>


                                </View>
                            </View>
                            } else {
                                return <View style={{ flex: 1, width: '100%', }}>
                                <View style={{ top: 0, height: 2 , backgroundColor: '#EAEAEA', }} ></View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                <Svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M18 18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8947 17.2652 19 17 19H1C0.734784 19 0.48043 18.8947 0.292893 18.7071C0.105357 18.5196 2.4071e-07 18.2652 2.4071e-07 18V7.49003C-0.000105484 7.33764 0.0346172 7.18724 0.101516 7.05033C0.168415 6.91341 0.26572 6.79359 0.386 6.70003L8.386 0.478028C8.56154 0.341473 8.7776 0.267334 9 0.267334C9.2224 0.267334 9.43846 0.341473 9.614 0.478028L17.614 6.70003C17.7343 6.79359 17.8316 6.91341 17.8985 7.05033C17.9654 7.18724 18.0001 7.33764 18 7.49003V18ZM16 17V7.97803L9 2.53403L2 7.97803V17H16ZM4 13H14V15H4V13Z" fill="#09121F"/>
                                </Svg>
                                </View>
                            </View>
                            }
                            break;

                            case 'Favorito':
                                if (focused) {
                                    return <View style={{ flex: 1, width: '100%', }}>
                                    <View style={{ top: 0, height: 2 , backgroundColor: '#D4D4D4', }} ></View>
                                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab1.png')} /> */}
                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14.5 0C17.538 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.36 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.934 15.604C11.815 15.048 12.61 14.495 13.354 13.903C16.335 11.533 18 8.943 18 6C18 3.64 16.463 2 14.5 2C13.424 2 12.26 2.57 11.414 3.414L10 4.828L8.586 3.414C7.74 2.57 6.576 2 5.5 2C3.56 2 2 3.656 2 6C2 8.944 3.666 11.533 6.645 13.903C7.39 14.495 8.185 15.048 9.066 15.603C9.365 15.792 9.661 15.973 10 16.175C10.339 15.973 10.635 15.792 10.934 15.604Z" fill="black"/>
</Svg>


                                    </View>
                                </View>
                                } else {
                                    return <View style={{ flex: 1, width: '100%', }}>
                                    <View style={{ top: 0, height: 2 , backgroundColor: '#EAEAEA', }} ></View>
                                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab1.png')} /> */}
                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14.5 0C17.538 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.36 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.934 15.604C11.815 15.048 12.61 14.495 13.354 13.903C16.335 11.533 18 8.943 18 6C18 3.64 16.463 2 14.5 2C13.424 2 12.26 2.57 11.414 3.414L10 4.828L8.586 3.414C7.74 2.57 6.576 2 5.5 2C3.56 2 2 3.656 2 6C2 8.944 3.666 11.533 6.645 13.903C7.39 14.495 8.185 15.048 9.066 15.603C9.365 15.792 9.661 15.973 10 16.175C10.339 15.973 10.635 15.792 10.934 15.604Z" fill="black"/>
</Svg>
                                    </View>
                                </View>
                                }
                                break;


                                case 'Buscar':
                                    if (focused) {
                                        return <View style={{ flex: 1, width: '100%', }}>
                                        <View style={{ top: 0, height: 2 , backgroundColor: '#D4D4D4', }} ></View>
                                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab2.png')} /> */}
                                        <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" fill="#09121F"/>
</Svg>


                                        </View>
                                    </View>
                                    } else {
                                        return <View style={{ flex: 1, width: '100%', }}>
                                        <View style={{ top: 0, height: 2 , backgroundColor: '#EAEAEA', }} ></View>
                                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab2.png')} /> */}
                                        <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" fill="#09121F"/>
</Svg>
                                        </View>
                                    </View>
                                    }


                                    case 'Publicar':
                            if (focused) {
                                return <View style={{ flex: 1, width: '100%', }}>
                                <View style={{ top: 0, height: 2 , backgroundColor: '#D4D4D4', }} ></View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab3.png')} /> */}
                                <Svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.515 1.79631C18.5898 1.56144 18.5691 1.30656 18.4573 1.08686C18.3456 0.867149 18.1518 0.700286 17.918 0.622388C17.6841 0.544491 17.429 0.561827 17.2078 0.670644C16.9867 0.779461 16.8172 0.971003 16.7362 1.20381L15.7987 4.01506C15.724 4.24992 15.7447 4.5048 15.8564 4.72451C15.9681 4.94421 16.1619 5.11108 16.3958 5.18897C16.6296 5.26687 16.8848 5.24954 17.1059 5.14072C17.3271 5.0319 17.4965 4.84036 17.5775 4.60756L18.515 1.79631ZM24.225 1.77506C24.4006 1.95084 24.4992 2.18912 24.4992 2.43756C24.4992 2.68599 24.4006 2.92427 24.225 3.10006L21.1 6.22506C21.0142 6.31717 20.9107 6.39104 20.7957 6.44228C20.6807 6.49352 20.5565 6.52107 20.4307 6.5233C20.3048 6.52552 20.1797 6.50236 20.063 6.45521C19.9463 6.40806 19.8402 6.33788 19.7512 6.24885C19.6622 6.15983 19.592 6.05379 19.5448 5.93705C19.4977 5.82032 19.4745 5.69528 19.4768 5.5694C19.479 5.44352 19.5065 5.31938 19.5578 5.20438C19.609 5.08939 19.6829 4.98588 19.775 4.90006L22.9 1.77506C23.0758 1.59949 23.3141 1.50088 23.5625 1.50088C23.8109 1.50088 24.0492 1.59949 24.225 1.77506ZM8.345 4.39756C8.5501 3.97167 8.85599 3.60224 9.23615 3.3213C9.6163 3.04035 10.0592 2.85638 10.5266 2.78532C10.9939 2.71427 11.4715 2.75828 11.918 2.91354C12.3645 3.0688 12.7663 3.33062 13.0888 3.67631L21.8463 13.0588C22.1625 13.3976 22.393 13.8072 22.5188 14.2533C22.6445 14.6994 22.6617 15.169 22.569 15.6231C22.4763 16.0772 22.2763 16.5026 21.9857 16.8636C21.6952 17.2247 21.3225 17.5111 20.8988 17.6988L16.6238 19.5938C17.1436 20.8033 17.1655 22.1691 16.6847 23.3946C16.2038 24.6202 15.259 25.6066 14.0553 26.1399C12.8516 26.6731 11.4861 26.71 10.2553 26.2427C9.02455 25.7754 8.02773 24.8415 7.48125 23.6438L5.71 24.4288C5.3049 24.6083 4.85582 24.6642 4.41909 24.5895C3.98235 24.5148 3.57739 24.3128 3.255 24.0088L1.45625 22.3126C1.10848 21.9847 0.874117 21.5547 0.787141 21.0848C0.700164 20.6148 0.765087 20.1294 0.972501 19.6988L8.345 4.39881V4.39756ZM9.1975 22.8838C9.55037 23.6138 10.1732 24.1781 10.9343 24.4574C11.6955 24.7368 12.5354 24.7094 13.2767 24.381C14.018 24.0526 14.6027 23.4489 14.9072 22.6975C15.2118 21.946 15.2123 21.1056 14.9087 20.3538L9.19625 22.8838H9.1975ZM11.7175 4.95631C11.6032 4.83378 11.4607 4.74096 11.3024 4.6859C11.1441 4.63084 10.9747 4.61519 10.809 4.6403C10.6433 4.66542 10.4862 4.73054 10.3514 4.83004C10.2165 4.92953 10.1079 5.0604 10.035 5.21131L2.6625 20.5126C2.62771 20.5843 2.61671 20.6653 2.63109 20.7438C2.64548 20.8222 2.68451 20.894 2.7425 20.9488L4.54125 22.6438C4.59495 22.6944 4.66236 22.728 4.73507 22.7404C4.80777 22.7529 4.88254 22.7436 4.95 22.7138L20.1388 15.9851C20.2892 15.9186 20.4215 15.8171 20.5247 15.689C20.6279 15.561 20.699 15.4101 20.732 15.249C20.7651 15.0879 20.7591 14.9212 20.7146 14.7628C20.6701 14.6045 20.5884 14.4591 20.4762 14.3388L11.7175 4.95631ZM20.75 9.31131C20.75 9.06266 20.8488 8.82421 21.0246 8.64839C21.2004 8.47258 21.4389 8.37381 21.6875 8.37381H24.1875C24.4361 8.37381 24.6746 8.47258 24.8504 8.64839C25.0262 8.82421 25.125 9.06266 25.125 9.31131C25.125 9.55995 25.0262 9.7984 24.8504 9.97422C24.6746 10.15 24.4361 10.2488 24.1875 10.2488H21.6875C21.4389 10.2488 21.2004 10.15 21.0246 9.97422C20.8488 9.7984 20.75 9.55995 20.75 9.31131Z" fill="black"/>
</Svg>
                                </View>
                            </View>
                            } else {
                                return <View style={{ flex: 1, width: '100%', }}>
                                <View style={{ top: 0, height: 2 , backgroundColor: '#EAEAEA', }} ></View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab3.png')} /> */}
                                <Svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.515 1.79631C18.5898 1.56144 18.5691 1.30656 18.4573 1.08686C18.3456 0.867149 18.1518 0.700286 17.918 0.622388C17.6841 0.544491 17.429 0.561827 17.2078 0.670644C16.9867 0.779461 16.8172 0.971003 16.7362 1.20381L15.7987 4.01506C15.724 4.24992 15.7447 4.5048 15.8564 4.72451C15.9681 4.94421 16.1619 5.11108 16.3958 5.18897C16.6296 5.26687 16.8848 5.24954 17.1059 5.14072C17.3271 5.0319 17.4965 4.84036 17.5775 4.60756L18.515 1.79631ZM24.225 1.77506C24.4006 1.95084 24.4992 2.18912 24.4992 2.43756C24.4992 2.68599 24.4006 2.92427 24.225 3.10006L21.1 6.22506C21.0142 6.31717 20.9107 6.39104 20.7957 6.44228C20.6807 6.49352 20.5565 6.52107 20.4307 6.5233C20.3048 6.52552 20.1797 6.50236 20.063 6.45521C19.9463 6.40806 19.8402 6.33788 19.7512 6.24885C19.6622 6.15983 19.592 6.05379 19.5448 5.93705C19.4977 5.82032 19.4745 5.69528 19.4768 5.5694C19.479 5.44352 19.5065 5.31938 19.5578 5.20438C19.609 5.08939 19.6829 4.98588 19.775 4.90006L22.9 1.77506C23.0758 1.59949 23.3141 1.50088 23.5625 1.50088C23.8109 1.50088 24.0492 1.59949 24.225 1.77506ZM8.345 4.39756C8.5501 3.97167 8.85599 3.60224 9.23615 3.3213C9.6163 3.04035 10.0592 2.85638 10.5266 2.78532C10.9939 2.71427 11.4715 2.75828 11.918 2.91354C12.3645 3.0688 12.7663 3.33062 13.0888 3.67631L21.8463 13.0588C22.1625 13.3976 22.393 13.8072 22.5188 14.2533C22.6445 14.6994 22.6617 15.169 22.569 15.6231C22.4763 16.0772 22.2763 16.5026 21.9857 16.8636C21.6952 17.2247 21.3225 17.5111 20.8988 17.6988L16.6238 19.5938C17.1436 20.8033 17.1655 22.1691 16.6847 23.3946C16.2038 24.6202 15.259 25.6066 14.0553 26.1399C12.8516 26.6731 11.4861 26.71 10.2553 26.2427C9.02455 25.7754 8.02773 24.8415 7.48125 23.6438L5.71 24.4288C5.3049 24.6083 4.85582 24.6642 4.41909 24.5895C3.98235 24.5148 3.57739 24.3128 3.255 24.0088L1.45625 22.3126C1.10848 21.9847 0.874117 21.5547 0.787141 21.0848C0.700164 20.6148 0.765087 20.1294 0.972501 19.6988L8.345 4.39881V4.39756ZM9.1975 22.8838C9.55037 23.6138 10.1732 24.1781 10.9343 24.4574C11.6955 24.7368 12.5354 24.7094 13.2767 24.381C14.018 24.0526 14.6027 23.4489 14.9072 22.6975C15.2118 21.946 15.2123 21.1056 14.9087 20.3538L9.19625 22.8838H9.1975ZM11.7175 4.95631C11.6032 4.83378 11.4607 4.74096 11.3024 4.6859C11.1441 4.63084 10.9747 4.61519 10.809 4.6403C10.6433 4.66542 10.4862 4.73054 10.3514 4.83004C10.2165 4.92953 10.1079 5.0604 10.035 5.21131L2.6625 20.5126C2.62771 20.5843 2.61671 20.6653 2.63109 20.7438C2.64548 20.8222 2.68451 20.894 2.7425 20.9488L4.54125 22.6438C4.59495 22.6944 4.66236 22.728 4.73507 22.7404C4.80777 22.7529 4.88254 22.7436 4.95 22.7138L20.1388 15.9851C20.2892 15.9186 20.4215 15.8171 20.5247 15.689C20.6279 15.561 20.699 15.4101 20.732 15.249C20.7651 15.0879 20.7591 14.9212 20.7146 14.7628C20.6701 14.6045 20.5884 14.4591 20.4762 14.3388L11.7175 4.95631ZM20.75 9.31131C20.75 9.06266 20.8488 8.82421 21.0246 8.64839C21.2004 8.47258 21.4389 8.37381 21.6875 8.37381H24.1875C24.4361 8.37381 24.6746 8.47258 24.8504 8.64839C25.0262 8.82421 25.125 9.06266 25.125 9.31131C25.125 9.55995 25.0262 9.7984 24.8504 9.97422C24.6746 10.15 24.4361 10.2488 24.1875 10.2488H21.6875C21.4389 10.2488 21.2004 10.15 21.0246 9.97422C20.8488 9.7984 20.75 9.55995 20.75 9.31131Z" fill="black"/>
</Svg>
                                </View>
                            </View>
                            }
                            break;


                            case 'Perfil':
                            if (focused) {
                                return <View style={{ flex: 1, width: '100%', }}>
                                <View style={{ top: 0, height: 2 , backgroundColor: '#D4D4D4', }} ></View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab4.png')} /> */}
                                <Svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="black"/>
</Svg>

                                </View>
                            </View>
                            } else {
                                return <View style={{ flex: 1, width: '100%', }}>
                                <View style={{ top: 0, height: 2 , backgroundColor: '#EAEAEA', }} ></View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Image style={{resizeMode: 'stretch'}} source={require('../assets/img/inicio_tab4.png')} /> */}
                                <Svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="black"/>
</Svg>
                                </View>
                            </View>
                            }
                            break;
                        
                    }
                    
                },        
                
                    activeTintColor: '#595B5A',
                    inactiveTintColor: '#8F8F8F',
                    labelStyle: {                    
                        marginBottom: 50,
                        fontSize: 33
                    },                
                    style: {
                        backgroundColor: '#f5f5f5',
                        paddingBottom: TabBarPaddingBottom,
                        height: TabBarHeight, 
                        //marginBottom: isIphoneX == true ? 0 : 5,                   
                    },
                         
            })}

        >
            <Tab.Screen name="Inicio" 
                component={AppStack} 
                style={{fontFamily:'NunitoSans-Regular', size:30}}
                options={({ route }) => ({
                    headerShown:false,
                    gestureEnabled:false,
                   // tabBarVisible: getTabBarVisible(route) 
                })
                }             
            />

                <Tab.Screen name="Favorito" 
                component={FavoritoScreen} 
                options={({ route }) => ({
                    headerShown:false,
                    gestureEnabled:false,
                    // tabBarVisible: getTabBarVisible(route) 
                })
                }             
                />

                <Tab.Screen name="Buscar" 
                component={BuscarScreen} 
                options={({ route }) => ({
                    headerShown:false,
                    gestureEnabled:false,
                    // tabBarVisible: getTabBarVisible(route) 
                })
                }             
                />

                <Tab.Screen name="Publicar" 
                component={PublicarRecomendacionScreen} 
                options={({ route }) => ({
                    headerShown:false,
                    gestureEnabled:false,
                // tabBarVisible: getTabBarVisible(route) 
                })
                }             
                />



        <Tab.Screen name="Perfil" 
                component={PerfilScreen} 
                options={({ route }) => ({
                    headerShown:false,
                    gestureEnabled:false,
                   // tabBarVisible: getTabBarVisible(route) 
                })
                }             
            />


            
           
            
            
        </Tab.Navigator>
    );
}

function AppStack() {
    return (

        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
            options={{
                gestureEnabled: false,
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => ({
                  
                   
                    
                })}
            />


                <Stack.Screen
                name="Notificacion"
                component={NotificacionScreen}
                options={({ navigation, route }) => ({
                  
                   
                    
                })}
            />



<Stack.Screen
                name="Notificacion1"
                component={Notificacion1Screen}
                options={({ navigation, route }) => ({
                  
                   
                    
                })}
            />



<Stack.Screen
                name="Notificacion2"
                component={Notificacion2Screen}
                options={({ navigation, route }) => ({
                  
                   
                    
                })}
            />

            <Stack.Screen
                name="Notificacion3"
                component={Notificacion3Screen}
                options={({ navigation, route }) => ({
                  
                   
                    
                })}
            />






                    <Stack.Screen
                    name="Mensajes"
                    component={MensajesScreen}
                    options={({ navigation, route }) => ({

                    })}
                    />

                    <Stack.Screen
                    name="MensajeChat"
                    component={MensajeChatScreen}
                    options={({ navigation, route }) => ({

                    })}
                    />




            <Stack.Screen
                name="Favoritos"
                component={FavoritoScreen}
                options={({ navigation, route }) => ({
                  
                   
                    
                })}
            />

                    <Stack.Screen
                    name="Buscar"
                    component={BuscarScreen}
                    options={({ navigation, route }) => ({
                        
                        
                        
                    })}
                    />
                   
                    <Stack.Screen
                    name="BuscaDisponibilidad"
                    component={BuscarDispoScreen}
                    options={({ navigation, route }) => ({
                        
                    })}
                    />

                    <Stack.Screen
                    name="BuscaFinal"
                    component={BuscarFinalScreen}
                    options={({ navigation, route }) => ({

                    })}
                    />


                    <Stack.Screen
                    name="BuscarDetalle"
                    component={BuscarDetalleScreen}
                    options={({ navigation, route }) => ({
                        
                    })}
                    />

                    <Stack.Screen
                    name="BuscarPerfil"
                    component={BuscarPerfilScreen}
                    options={({ navigation, route }) => ({
                        
                    })}
                    />




                        <Stack.Screen
                        name="BuscarReseña"
                        component={BuscarReseñaScreen}
                        options={({ navigation, route }) => ({

                        })}
                        />

                            <Stack.Screen
                            name="BuscarRegla"
                            component={BuscarReglaScreen}
                            options={({ navigation, route }) => ({

                            })}
                            />



















<Stack.Screen
                    name="BuscarMapa"
                    component={BuscarMapaScreen}
                    options={({ navigation, route }) => ({
                        
                        
                        
                    })}
                    />



                {/* <Stack.Screen
                    name="Publicar"
                    component={PublicarScreenInicio}
                    options={({ navigation, route }) => ({
                    
                    })}
                    /> */}



                        <Stack.Screen
                        name="BuscarMap"
                        component={BuscarMapScreen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />



                        <Stack.Screen
                        name="Publicar"
                        component={PublicarRecomendacionScreen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />

                    <Stack.Screen
                        name="Publicar2"
                        component={Publicar2Screen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />



                <Stack.Screen
                        name="Publicar3"
                        component={Publicar3Screen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />


                <Stack.Screen
                        name="Publicar4"
                        component={Publicar4Screen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />

                    <Stack.Screen
                        name="Publicar5"
                        component={Publicar5Screen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />





                        <Stack.Screen
                        name="PublicarRecomendacion"
                        component={PublicarScreen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />


                        <Stack.Screen
                        name="Perfil"
                        component={PerfilScreen}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />

                        <Stack.Screen
                        name="PerfilInformacion"
                        component={PerfilInformacion}
                        options={({ navigation, route }) => ({
                            
                            
                            
                        })}
                        />

            <Stack.Screen
                            name="PerfilInformacionEditar"
                            component={PerfilInformacionEditar}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                        />
                <Stack.Screen
                                name="PerfilPago"
                                component={PerfilPago}
                                options={({ navigation, route }) => ({
                                
                                
                                
                                })}
                            />


                            <Stack.Screen
                            name="PerfilPagoNuevo"
                            component={PerfilPagoNuevo}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

                            <Stack.Screen
                            name="PerfilCobroNuevo"
                            component={PerfilCobroNuevo}
                            options={({ navigation, route }) => ({
                            
                            })}
                            />




                            <Stack.Screen
                            name="PerfilPropiedad"
                            component={PerfilPropiedad}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

                        <Stack.Screen
                            name="PerfilPropiedadVer"
                            component={PerfilPropiedadVer}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />


                            <Stack.Screen
                            name="PerfilPropiedadAgregar"
                            component={PerfilPropiedadAgregar}
                            options={({ navigation, route }) => ({
                            
                            })}
                            />

                            <Stack.Screen
                            name="PerfilPropiedadAgregarDocto"
                            component={PerfilPropiedadAgregarDocto}
                            options={({ navigation, route }) => ({

                            })}
                            />

                            <Stack.Screen
                            name="PerfilPropiedadAgregarDoctoFinaliza"
                            component={PerfilPropiedadAgregarDoctoFinaliza}
                            options={({ navigation, route }) => ({

                            })}
                            />








                            <Stack.Screen
                            name="PerfilAvisos"
                            component={PerfilAviso}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

                        <Stack.Screen
                            name="PerfilHistorial"
                            component={PerfilHistorial}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />


                        <Stack.Screen
                            name="PerfilPoliticas"
                            component={PerfilPoliticas}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

                            <Stack.Screen
                            name="PerfilPoliticasTerminos"
                            component={PerfilPoliticasTerminos}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

<Stack.Screen
                            name="PerfilPoliticasNuestra"
                            component={PerfilPoliticasNuestra}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

<Stack.Screen
                            name="PerfilPoliticasSanitaria"
                            component={PerfilPoliticasSanitaria}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />

                            
<Stack.Screen
                            name="PerfilPoliticasPago"
                            component={PerfilPoliticasPago}
                            options={({ navigation, route }) => ({
                            
                            
                            
                            })}
                            />



     

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
                    <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="App" component={MainNavigator} />

                </Stack.Navigator>

            </NavigationContainer>
        );
    }

}

export default routes;