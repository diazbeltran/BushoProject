import React, { Component } from 'react';
import { View,  Image, Dimensions, StyleSheet,ImageBackground,TouchableWithoutFeedback } from 'react-native';
const { width, height } = Dimensions.get('window');

import { verticalScale, moderateScale } from '../styles/scaling.js';
import themes from '../styles/theme.style.js';

let box_count = 3;
let box_height = height / box_count;




export default class SplashScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            porcentaje: 0,
            texto: '',
            barColor: '#0873ba',
            color: '#bbbbbb',
            compatible: false,
            tituloHint: '',
            isConnected: '',
            isType: '',
        };

        

    }


 setTimePassed = async () => {
    let porc = this.state.porcentaje;

    let result = porc + (width * 0.1);

    let x = result;
    switch (x) {
                
        case (x >= 100):
            this.setState({ texto: '¡Estamos listos!' });
            this.setState({ barColor: '#06973e' });
            this.setState({ color: '#5cbb81' });
            this.setState({ status: true });
            break;
    }

    if (result < 100) {
        this.setState({ porcentaje: result });
    } else {
        result = width - (width * 0.40);
        this.setState({ porcentaje: result });
    }

    if (result >= 100) {
        clearInterval(this._interval);
      
                console.log("==> Auth");
                this.props.navigation.navigate('Splash0');
      
        
    }

}


    //-----------------------------------------------------------------

    async componentDidMount() {

        // try {

           
                   
                   
                   
            this._interval = setInterval(async () => {
                this.setTimePassed();
            }, 1000);
                        
        
           
            }


    componentWillUnmount() {

        if (Platform.OS === "android") {

        clearInterval(this._interval);
        console.log('componentWillUnmount...');
        }

    }








    render() {

        return (
            <View style={styles.wrapper} >


<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Splash0')}>
<View >
                        <View style={{ backgroundColor: '#58C0AD' }}>

                        {/* <Image style={{ height:'100%',width:'100%', resizeMode: 'cover'}} source={require('../assets/img/splash_fondo_1.png')} /> */}

                        <ImageBackground
                        style={{height:'100%',width:'100%'}}
                        imageStyle={{ resizeMode: 'cover'}}
                        source={require('../assets/img/splash_fondo_1.png')}>
                                <Image style={{marginTop:'80%', marginLeft:'37%' }} source={require('../assets/img/splash_fondo_2.png')} />
                        </ImageBackground>
                       
                        </View>

                

                </View>
               
                
                </TouchableWithoutFeedback>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    box: {
        height: box_height
      },
    wrapper: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center',
        //backgroundColor:'#f4f4f4',
       // backgroundColor: '#fafafa',
        flexDirection: 'column',
    },
    content: {
        //height: verticalScale(height/4), 
        width: width,
        //backgroundColor:'red', 
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        paddingTop: height / 3, //scale(height / 3), 
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: moderateScale(70),
        marginLeft:moderateScale(70),
        width: moderateScale(250),
        height: verticalScale(350),
        resizeMode: 'center'
    },
    logo2: {
        width: moderateScale(355),
        height: verticalScale(230),
        resizeMode: 'contain'
    },
    titulo: {
        fontSize: moderateScale(themes.FONT_SIZE_SMALL),
       // fontFamily: "Overpass-Bold",
        marginBottom: verticalScale(10)
    },
    icono: {
        width: moderateScale(40),
        height: verticalScale(40),
    },
    barColor: {
        height: 10,
        borderRadius: 4,
    }



});	  