import React, { Component } from 'react';
import { View, Text,  Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const { width, height } = Dimensions.get('window');
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];


import {  verticalScale, moderateScale } from '../styles/scaling.js';
import themes from '../styles/theme.style';





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
            heightx:height,
            widthx:width,
            cambiax : true
        };

        
 
    }




 


    //-----------------------------------------------------------------

    componentWillUnmount() {

        if (Platform.OS === "android") {

        clearInterval(this._interval);
        console.log('componentWillUnmount...');
        }

    }









    render() {

        return (
            <View  style={{ alignItems:'baseline',flex:1}} >
               
           

            <SwiperFlatList autoplay  showPagination
            
            onPaginationSelectedIndex={item =>{
                console.log("hay que puro actualizar viejaaaaa!!!",item)
            }}
            onMomentumScrollEnd={item =>{
                console.log("hay que puro actualizar viejaaaaa!!!",item)
            }}
            >
      <View style={[styles1.child, { backgroundColor: 'tomato' }]}>
     
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')}  >
                        <Text style={{color:'white', marginBottom:100}}>Omitir</Text>
                    </TouchableOpacity>
                    
                    </View>

                    </View>

                </View>
                </ImageBackground>

      </View>
      <View style={[styles1.child, { backgroundColor: 'thistle' }]}>
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')}  >
                        <Text style={{color:'white', marginBottom:100}}>Omitir</Text>
                    </TouchableOpacity>
                    
                    </View>

                    </View>

                </View>
                </ImageBackground>
      </View>
      
    </SwiperFlatList>


            </View>
            
        );
    }
}

const styles1 = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
  });



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