import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';

import Svg, { Path, Rect } from 'react-native-svg';

import Icon23 from 'react-native-vector-icons/MaterialCommunityIcons';




export default class Publicar3 extends Component {

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
        };

        
    }


 




    render() {

        return (
            <View style={{ 
              flex:1 }}>
               <View style={{flexDirection:'row', marginTop:30, marginBottom:20,}}>
                <View style={{flex:0.9,flexDirection:'row'}}>
                <Text style={{ marginLeft:20,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}> Publicar aviso</Text>
                {/* <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'black', fontWeight:'bold'}}></Text> */}
                </View>
                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
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
                
            <View style={{  flex:1, backgroundColor: 'white' , marginTop:'5%'}} >
                     
            <View style={{marginLeft:20, flexDirection:'row',marginBottom:20}}>
            <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M23.7239 31.2C22.7639 31.2 21.8439 31.06 20.9639 30.78C20.0972 30.4867 19.3772 30.0933 18.8039 29.6L19.6439 27.64C20.8439 28.5733 22.1772 29.04 23.6439 29.04C25.4439 29.04 26.3439 28.3333 26.3439 26.92C26.3439 26.2533 26.1172 25.76 25.6639 25.44C25.2239 25.1067 24.5772 24.94 23.7239 24.94H21.4639V22.82H23.4839C24.2306 22.82 24.8239 22.64 25.2639 22.28C25.7039 21.9067 25.9239 21.3933 25.9239 20.74C25.9239 20.1267 25.7172 19.66 25.3039 19.34C24.9039 19.02 24.3172 18.86 23.5439 18.86C22.1572 18.86 20.9372 19.34 19.8839 20.3L19.0439 18.38C19.6039 17.8467 20.3039 17.4333 21.1439 17.14C21.9839 16.8467 22.8572 16.7 23.7639 16.7C25.2306 16.7 26.3706 17.0333 27.1839 17.7C27.9972 18.3533 28.4039 19.2667 28.4039 20.44C28.4039 21.2 28.2106 21.8667 27.8239 22.44C27.4372 23.0133 26.9106 23.4267 26.2439 23.68C27.0572 23.9067 27.6906 24.3267 28.1439 24.94C28.5972 25.54 28.8239 26.2733 28.8239 27.14C28.8239 28.3933 28.3706 29.3867 27.4639 30.12C26.5572 30.84 25.3106 31.2 23.7239 31.2Z" fill="#1EB091"/>
<Path opacity="0.6" d="M24 -1.04907e-06C37.2548 -1.62846e-06 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 -4.69686e-07 37.2548 -1.04907e-06 24C-1.62846e-06 10.7452 10.7452 -4.69686e-07 24 -1.04907e-06ZM24 44.1436C35.125 44.1436 44.1436 35.125 44.1436 24C44.1436 12.875 35.125 3.85643 24 3.85643C12.875 3.85643 3.85643 12.875 3.85643 24C3.85643 35.125 12.875 44.1436 24 44.1436Z" fill="#1EB091"/>
<Path d="M2.09815e-06 24C1.68317e-06 28.7467 1.40757 33.3869 4.04473 37.3337C6.68189 41.2805 10.4302 44.3566 14.8156 46.1731C19.201 47.9896 24.0266 48.4649 28.6822 47.5388C33.3377 46.6128 37.6141 44.327 40.9706 40.9706C44.327 37.6141 46.6128 33.3377 47.5388 28.6822C48.4649 24.0266 47.9896 19.201 46.1731 14.8156C44.3566 10.4302 41.2805 6.68188 37.3337 4.04473C33.3869 1.40757 28.7468 -1.68317e-06 24 -2.09815e-06L24 3.85643C27.984 3.85643 31.8786 5.03783 35.1912 7.25123C38.5038 9.46464 41.0856 12.6106 42.6102 16.2914C44.1348 19.9721 44.5338 24.0223 43.7565 27.9298C42.9793 31.8373 41.0608 35.4265 38.2437 38.2437C35.4265 41.0608 31.8373 42.9793 27.9298 43.7565C24.0223 44.5338 19.9721 44.1348 16.2914 42.6102C12.6106 41.0856 9.46464 38.5038 7.25124 35.1912C5.03784 31.8786 3.85644 27.984 3.85644 24L2.09815e-06 24Z" fill="#1EB091"/>
</Svg>

            {/* <Image style={{marginTop:0,height:48,width:48, marginLeft:0}} source={require('../../assets/img/circulo_1_3.png')} /> */}
                  
                            <View style={{marginLeft:10, flexDirection:'column'}}>
                                <Text style={{fontFamily:'NunitoSans-Bold', fontSize:20,color:'black' }}>                           
                                Imágenes del lugar
                                </Text>
                                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>                           
                                Paso 3 de 4
                                </Text>
                            </View>
                        
                    </View>
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{marginLeft:20, marginBottom:90, flexDirection:'column'}}>
                    
                    
                    
                   

                   
                    
                  
                    


                    <View style={{marginTop:20}}>
                    <View>
                    <Text style={{marginTop:0, marginLeft:0, fontFamily:'NunitoSans-Bold',fontSize:18, color:'black', }}>Imágenes del lugar </Text>
                    </View>

                    <View style={{width:'95%'}} >
                    <Text style={{marginTop:15, marginLeft:0, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717171', lineHeight:26 }}>Recuerda subir imágenes donde se vea claramente el espacio, con buena iluminación y distintas perspectivas </Text>
                    </View>



                <View style={{flexDirection:'row', marginTop:10,}}>
                <View style={{width:'95%', height:200, borderWidth:0.2, borderColor:'#61D3BA', backgroundColor:'#F9FAFA'}}>
                <Icon23 style={{marginTop:'25%', marginLeft:'50%'}} name="image-plus" size={25} />
                    </View>
                </View>

                <View style={{flexDirection:'row', marginTop:10,}}>
                <View style={{width:'95%', height:200, borderWidth:0.2, borderColor:'#61D3BA', backgroundColor:'#F9FAFA'}}>
                <Icon23 style={{marginTop:'25%', marginLeft:'50%'}} name="image-plus" size={25} />
                    </View>
                </View>

                <View style={{flexDirection:'row', marginTop:10,}}>
                <View style={{width:'95%', height:200, borderWidth:0.2, borderColor:'#61D3BA', backgroundColor:'#F9FAFA'}}>
                <Icon23 style={{marginTop:'25%', marginLeft:'50%'}} name="image-plus" size={25} />
                    </View>
                </View>
                    </View>

                   

                    <View style={{flexDirection:'row',marginLeft:0, marginTop:'5%'}}>

                    <TouchableHighlight  underlayColor='white'
                    title="Ingresar"

                    >
                    <View style={{width:'90%',flexDirection:'row', }} > 
                    <Icon2 style={{marginLeft:'0%',paddingTop:'0%'}}  name="add-circle-outline" size={30} color="#61D3BA" />
                    <Text style={{fontFamily:'NunitoSans-Bold', fontSize:16,color:'#61D3BA',  marginTop:'3%', marginLeft:'5%'}}>
                    Agregar otras 5 fotos
                    </Text>
                    </View>   
                    </TouchableHighlight>  
                    </View>
                    
                    
                    
                      
                  

                
               

                    </View>
     


                    </ScrollView>

                    </SafeAreaView>

                    

                
            </View>


           <View style={{backgroundColor:'white', borderTopWidth:1, borderColor:'#D6D6D6'}}>
           <View style={{marginLeft:20, marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'95%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Publicar4')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{fontSize:16,fontFamily:'NunitoSans-Regular',fontWeight:'bold',color:'white',marginTop:'1%',  }} >Siguiente</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>


                    <View style={{marginLeft:20, flexDirection:'row',
                    marginTop:10, width:'90%',borderRadius:64 ,height:40,borderWidth:1,borderColor:'#61D3BA',paddingLeft:20, marginBottom:20}} > 
                    
                    <TouchableHighlight underlayColor='white' style={{ height:40, width:'90%',
                                  paddingTop:5,paddingBottom:0, paddingLeft:35,paddingRight:35, borderRadius:64,
                                   alignItems:'center'}}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{fontSize:16,marginTop:'1%',marginLeft:10, fontFamily:'NunitoSans-Regular',fontWeight:'bold', color:'#61D3BA' }} underlayColor={'red'}>Cancelar</Text>
                            </TouchableHighlight>
                    </View> 
           </View>
           

               

          </View>
        );
    }



}
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