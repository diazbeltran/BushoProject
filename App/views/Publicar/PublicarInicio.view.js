import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight,TouchableOpacity, SafeAreaView, ScrollView, Dimensions, ImageBackground } from 'react-native';

import Svg, { Path, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from './src/Preview.js';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Carousel from 'react-native-reanimated-carousel';



const images = [
    {
     banner:require('../../assets/img/inicio_1.png'),
     //banner: '../../assets/img/inicio_1.png',
     desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
   {
     banner:require('../../assets/img/inicio_1.png'),
     //banner:'../../assets/img/inicio_1.png',
     desc:
       'Red fort in India New Delhi is a magnificient masterpeiece of humans',
   },
   ]
   

   





   
export default class Publicar1 extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            status: false,
           // correo:'tecnico@aeurus.cl',
           correo:'',
            ///clave:'12345678',
            clave:'',
            email :'',
            modalVisible:false,
            modal_error:'',
            dato1:'',
            aceptar:true,
            data: [
                {
                  //  image:'../../assets/img/inicio_1.png',
                    //image:require('../../assets/img/inicio_1.png'),
                  //image:'https://i.ibb.co/xgWb38x/inicio-1.png',
                  desc: 'Nombre propiedad',
                  selected: true,
                },
                {
                  //  image:'../../assets/img/inicio_1.png',
                    //image:require('../../assets/img/inicio_1.png'),
                  image:  'https://i.ibb.co/Wp7bFHZ/inicio-2.png',
                  desc: 'Nombre propiedad',
                  selected: false,
                },
                {
                 //   image:'../../assets/img/inicio_1.png',
                    //image:require('../../assets/img/inicio_1.png'),
                  image:                    'https://i.ibb.co/Yk6v84t/inicio-3.png',
                  desc: 'Nombre propiedad',
                  selected: false,
                },
                {
                  //  image:'../../assets/img/inicio_1.png',
                    //image:require('../../assets/img/inicio_1.png'),
                  image:                    'https://i.ibb.co/X24y6D5/inicio-4.png',
                  desc: 'Nombre propiedad',
                  selected: false,
                },
                
              ],
        };

        
    }


 
  



    render() {

        return (
            <View style={{ 
              flex:1 }}>
                <View style={{   backgroundColor: 'white', flexDirection:'row', marginTop:10 }} >
            
            {/* <TouchableHighlight  underlayColor='white' style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight> */}
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{marginLeft:20, width:'63%'}}>                    
                <Text style={{ fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:10, color:'black', fontWeight:'bold'}}>Publicar aviso</Text>
                
                </View>

                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:40}}
                        onPress={() => this.props.navigation.navigate('Mensajes')}
                            >
                       
                     {/* <Image style={{marginTop:0, }} source={require('../../assets/img/top_3.png')} /> */}
                     <Svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M3.741 6.40798L22.203 16.562C22.2814 16.6051 22.3468 16.6686 22.3923 16.7456C22.4378 16.8226 22.4618 16.9105 22.4618 17C22.4618 17.0895 22.4378 17.1773 22.3923 17.2544C22.3468 17.3314 22.2814 17.3948 22.203 17.438L3.741 27.592C3.66487 27.6339 3.57915 27.6552 3.49227 27.6538C3.4054 27.6525 3.32037 27.6285 3.24558 27.5843C3.17078 27.5401 3.1088 27.4772 3.06573 27.4017C3.02267 27.3262 3.00001 27.2409 3 27.154V6.84598C3.00001 6.7591 3.02267 6.67372 3.06573 6.59825C3.1088 6.52279 3.17078 6.45985 3.24558 6.41564C3.32037 6.37143 3.4054 6.34747 3.49227 6.34613C3.57915 6.34479 3.66487 6.36611 3.741 6.40798ZM5 18V24.617L18.85 17L5 9.38298V16H10V18H5Z" fill="#09121F"/>
                  <Rect x="12" y="1" width="12" height="12" rx="6" fill="#E46060" stroke="white" stroke-width="2"/>
                  </Svg>

                    </TouchableHighlight> 

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
                        onPress={() => this.props.navigation.navigate('Notificacion')}
                            >
                       
                     {/* <Image style={{marginLeft:20, marginTop:0, resizeMode:'contain'}} source={require('../../assets/img/top_4.png')} /> */}
                     <Svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M18 13C18 11.4087 17.3679 9.88258 16.2426 8.75736C15.1174 7.63214 13.5913 7 12 7C10.4087 7 8.88258 7.63214 7.75736 8.75736C6.63214 9.88258 6 11.4087 6 13V21H18V13ZM20 21.667L20.4 22.2C20.4557 22.2743 20.4896 22.3626 20.498 22.4551C20.5063 22.5476 20.4887 22.6406 20.4472 22.7236C20.4057 22.8067 20.3419 22.8765 20.2629 22.9253C20.1839 22.9741 20.0929 23 20 23H4C3.90714 23 3.81612 22.9741 3.73713 22.9253C3.65815 22.8765 3.59431 22.8067 3.55279 22.7236C3.51126 22.6406 3.49368 22.5476 3.50202 22.4551C3.51036 22.3626 3.54429 22.2743 3.6 22.2L4 21.667V13C4 10.8783 4.84286 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13V21.667ZM9.5 24H14.5C14.5 24.663 14.2366 25.2989 13.7678 25.7678C13.2989 26.2366 12.663 26.5 12 26.5C11.337 26.5 10.7011 26.2366 10.2322 25.7678C9.76339 25.2989 9.5 24.663 9.5 24Z" fill="#09121F"/>
                <Rect x="15" y="1" width="12" height="12" rx="6" fill="#E46060" stroke="white" stroke-width="2"/>
                </Svg>

                    </TouchableHighlight> 
                

                </View>
            </View>
                
            <View style={{   backgroundColor: 'white' , marginTop:'5%'}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{flexDirection:'column'}}>
                    
                    <View style={{marginLeft:20, flexDirection:'row',marginBottom:20}}>

                      {/* <SvgXml width="200" height="200" xml={Logo1} /> */}

                      <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M20.1839 31V28.88H23.3639V19.82L20.9039 21.3L19.9039 19.42L24.1039 16.9H25.9239V28.88H28.9039V31H20.1839Z" fill="#1EB091"/>
<Path d="M48 24C48 20.8483 47.3792 17.7274 46.1731 14.8156C44.967 11.9038 43.1992 9.25804 40.9706 7.02944C38.742 4.80083 36.0962 3.033 33.1844 1.82689C30.2726 0.620778 27.1517 -1.37766e-07 24 0L24 3.85643C26.6453 3.85643 29.2647 4.37746 31.7086 5.38977C34.1525 6.40208 36.3731 7.88584 38.2437 9.75635C40.1142 11.6269 41.5979 13.8475 42.6102 16.2914C43.6225 18.7353 44.1436 21.3547 44.1436 24H48Z" fill="#1EB091"/>
<Path opacity="0.6" d="M24 -1.04907e-06C37.2548 -1.62846e-06 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 -4.69686e-07 37.2548 -1.04907e-06 24C-1.62846e-06 10.7452 10.7452 -4.69686e-07 24 -1.04907e-06ZM24 44.1436C35.125 44.1436 44.1436 35.125 44.1436 24C44.1436 12.875 35.125 3.85643 24 3.85643C12.875 3.85643 3.85643 12.875 3.85643 24C3.85643 35.125 12.875 44.1436 24 44.1436Z" fill="#1EB091"/>
</Svg>



                    {/* <Image style={{marginTop:0,height:48,width:48, marginLeft:0}} source={require('../../assets/img/circulo_1_1.png')} /> */}
                            <View style={{marginLeft:10, flexDirection:'column'}}>
                                <Text style={{fontFamily:'NunitoSans-Blod',fontWeight:'bold', fontSize:16,color:'black' }}>                           
                                Seleccione propiedad
                                </Text>
                                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>                           
                                Paso 1 de 4
                                </Text>
                            </View>
                        
                    </View>
                    
                   

                    
                <View style={{borderTopWidth:1, borderColor:'#D7D7D7'}}>
                <Text style={{marginTop:20, marginLeft:20, fontFamily:'NunitoSans-Blod',fontWeight:'bold', fontSize:16, color:'black'}}>Seleccione la propiedad </Text>
                    <View style={{ flex:0.5, marginTop:20}}>

                    <View style={{ alignItems:'center'  }}>
            <Carousel
                loop
                width={width/1.2}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>

                 

                       
                    
                    </View>
                    {/* <SwiperFlatList autoplay  showPagination
            
            onPaginationSelectedIndex={item =>{
                console.log("hay que puro actualizar viejaaaaa!!!",item)
            }}
            onMomentumScrollEnd={item =>{
                console.log("hay que puro actualizar viejaaaaa!!!",item)
            }}
            >
      <View style={[styles1.child, { backgroundColor: 'red' }]}>
     
      <ImageBackground
                source={require('../../assets/img/inicio_1.png')} 
                //style={styles.slide1}
                imageStyle={{ height: 200, width: width, }}
                >
                 <View style={styles.containerImageBackground} >

                      

                </View>
                </ImageBackground>

      </View>
      <View style={[styles1.child, { backgroundColor: 'thistle' }]}>
      <ImageBackground
                source={require('../../assets/img/inicio_1.png')} 
                style={styles.slide1}
                imageStyle={{ height: 200, width: width, resizeMode: 'stretch' }}
                >
                 <View style={styles.containerImageBackground} >

                    

                </View>
                </ImageBackground>
      </View>
      
    </SwiperFlatList> */}
    <Text>wewe</Text>
                </View>

                   
                    
                            
                    


                   

                   
                    
                    
                    
                      
                    <View style={{marginLeft:20, marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'95%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Publicar2')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:16,color:'white',marginTop:'1%',  }} >Siguiente</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>


                    <View style={{marginLeft:20, flexDirection:'row',
                    marginTop:20, width:'90%',borderRadius:64 ,height:40,borderWidth:1,borderColor:'#61D3BA',paddingLeft:20, marginBottom:100}} > 
                    
                    <TouchableHighlight underlayColor='white' style={{ height:40, width:'90%',
                                  paddingTop:5,paddingBottom:0, paddingLeft:35,paddingRight:35, borderRadius:64,
                                   alignItems:'center'}}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text style={{ marginTop:'1%',fontFamily:'NunitoSans-Blod',fontSize:16, color:'#61D3BA' }} underlayColor={'red'}>Cancelar</Text>
                            </TouchableHighlight>
                    </View> 

                
               

                    </View>
     


                    </ScrollView>

                    </SafeAreaView>
                       
                
            </View>
           

               

          </View>
        );
    }



}

const styles1 = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center', height:200 },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});



const styles = StyleSheet.create({
    input: {
      marginLeft:30,
      height: 40,
      width:'80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#efeeef',
      borderRadius: 5,
      borderColor: '#dadee3',
    },
  });