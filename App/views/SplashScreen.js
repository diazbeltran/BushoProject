import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity,TouchableHighlight, ImageBackground,TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('window');


import { scale, verticalScale, moderateScale } from '../styles/scaling.js';
import themes from '../styles/theme.style';



import Swiper from 'react-native-swiper'



let box_count = 3;
let box_height = height / box_count;



//-----------------------------------------------------------------



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
            heightx:height,
            widthx:width,
            cambiax : false,
            c1 : false
        };

        this.Hint = React.createRef();
        //this._bootstrapAsync();
    }


   
    

    //-----------------------------------------------------------------

    async componentDidMount() {
         
        console.log("wexs");
            // this._interval = setInterval(async () => {
            //     this.setTimePassed();
            // }, 3000);     
            
        this.setState({cambiax:true});

    }
    //-----------------------------------------------------------------


  

    componentWillUnmount() {

        console.log('xxxxxxxxxxsacxsaxs...');
        if (Platform.OS === "android") {


        clearInterval(this._interval);
        console.log('componentWillUnmount...');
        }

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
          
                    console.log("==> wena wena marcelito hermoso :* ");
                    this.setState({cambiax:false})
                    this.props.navigation.navigate('Auth');
          
            
        }
    
    }
    



    llamada_final(e, state, context){
        console.log("ajojosdojasdjoaojsdjoasj",state);
    }







    render() {

        return (
            <View  style={{ alignItems:'baseline',flex:1}} >
               


                <Swiper 
                showsButtons={false}
                autoplay={true}
                style={styles.wrapper} 
                autoplayTimeout={5}
                paginationStyle={{marginBottom:100}}
                loop={false}
                onIndexChanged={index => {
                    console.log("vamos en el ", index);
                    if (index==2 && this.state.cambiax==true && this.state.c1 ==false) {
                        this.setState({cambiax:false})
                        this.props.navigation.navigate('Auth')

                        
                    } else {
                       // this.setState({cambiax:false})
                        console.log("wewewe");
                    }
                }}
             //   onTouchStartCapture={this.llamada_final()}
                //onIndexChanged={this.llamada_final()}
                >
                <ImageBackground
                source={require('../assets/img/Frame1.jpg')} 
                style={styles.slide1}
                imageStyle={{ height: height, width: width, resizeMode: 'stretch' }}
                >
                 <View style={styles.containerImageBackground} >

                    <View
                    style={{ position: 'absolute', bottom: 0, width: width, paddingHorizontal: 20, backgroundColor: 'transparent', flexDirection: 'column', }}
                    >
                    

                    <View style={{ marginLeft:'45%', marginTop:0 }} >
                    <TouchableOpacity onPress={() => {this.setState({c1:true})
                                                        this.props.navigation.navigate('Auth')}}  >
                        <Text style={{color:'white', marginBottom:100}}>Omitir</Text>
                    </TouchableOpacity>
                    
                    </View>

                    </View>

                </View>
                </ImageBackground>


                <ImageBackground
                source={require('../assets/img/Frame2.jpg')} 
                style={styles.slide1}
                imageStyle={{ height: height, width: width, resizeMode: 'stretch' }}
                >
                 <View style={styles.containerImageBackground} >

                    <View
                    style={{ position: 'absolute', bottom: 0, width: width, paddingHorizontal: 20, backgroundColor: 'transparent', flexDirection: 'column', }}
                    >
                    

                    <View style={{ marginLeft:'45%', marginTop:0 }} >
                    <TouchableOpacity onPress={() => {this.setState({cambiax:false})
                                                        this.props.navigation.navigate('Auth') }}  >
                        <Text style={{color:'white', marginBottom:100}}>Omitir</Text>
                    </TouchableOpacity>
                    
                    </View>

                    </View>

                </View>
                </ImageBackground>

                <ImageBackground
                source={require('../assets/img/Frame2.jpg')} 
                style={styles.slide1}
                imageStyle={{ height: height, width: width, resizeMode: 'stretch' }}
                >
                 <View style={styles.containerImageBackground} >

                    <View
                    style={{ position: 'absolute', bottom: 0, width: width, paddingHorizontal: 20, backgroundColor: 'transparent', flexDirection: 'column', }}
                    >
                    

                    <View style={{ marginLeft:'45%', marginTop:0 }} >
                    <TouchableOpacity onPress={() => {this.setState({cambiax:false})
                                                        this.props.navigation.navigate('Auth') }}  >
                        <Text style={{color:'white', marginBottom:100}}>Omitir</Text>
                    </TouchableOpacity>
                    
                    </View>

                    </View>

                </View>
                </ImageBackground>


      </Swiper>
         


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
    },
    wrapper: {},
  slide1: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  containerImageBackground: {
    backgroundColor: 'transparent',
    height: height / 2.3,
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingTop: verticalScale(50),
    paddingLeft: 20,
    paddingRight: 20
  },
  iconBox: {
    width: moderateScale(40),
    height: verticalScale(40),
    marginBottom: verticalScale(10),
  },
  iconBox2: {
    width: moderateScale(70),
    height: verticalScale(40),
    marginBottom: verticalScale(10),
  },


});	  