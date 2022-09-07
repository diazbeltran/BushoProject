import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';


import Svg, { Path, Rect } from 'react-native-svg';

import Icon22 from 'react-native-vector-icons/AntDesign';



export default class Perfil extends Component {

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
                
                <View style={{flexDirection:'row', marginTop:30,marginLeft:20}}>

                <View style={{flex:0.9}}>
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:10, color:'black', fontWeight:'bold' }}>Mi perfil</Text>
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
                <SafeAreaView >
                    

                    <ScrollView >
                <View style={{flexDirection:'row', marginTop:30, marginLeft:20}}>

                {/* <Icon22 style={{}}  name="smileo" size={50} color="#0B121F" /> */}
                <Image style={{ borderRadius:50, height:74,width:74, resizeMode: 'center'}} source={require('../../assets/img/perfil.jpeg')} />
                <View style={{flexDirection:'column', marginTop:0, marginLeft:0}}>
                    
                <Text style={{fontSize:13,marginTop:0, marginLeft:20}}><Icon22 style={{}}  name="star" size={10} color="#0B121F" />  5.5</Text>
                <Text style={{color:'black', fontFamily:'NunitoSans-Bold',fontSize:21,marginTop:5, marginLeft:20 }}>Fernando Garrido</Text>

                </View>
                </View>

                <View style={{  flex:1, backgroundColor: 'white' , marginTop:'5%'}} >
                                
                    <View style={{alignItems:'center', marginTop:10}}>
                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilInformacion')}
                            >
                    <View style={{width:'90%',flexDirection:'row', borderBottomWidth:0.5,borderColor:'#dadada', paddingBottom:15}} > 

                    {/* <Image style={{ marginTop:10,marginLeft:7 }} source={require('../../assets/img/busho_icono_0.png')} /> */}
                    <View style={{ marginTop:10,marginLeft:7 }}>
                    <Svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="black"/>
                    </Svg>
                    </View>
                
                    
                    <Text  style={{color:'black',  flex:1, marginTop:10, fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20}}>Información Personal</Text>
                    <Icon22 style={{flex:0.1, marginTop:15}}  name="right" size={16} color="#0B121F" />
                    </View>   
                    </TouchableHighlight>       
                    </View>


                    <View style={{alignItems:'center', marginTop:15}}>
                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilPago')}
                            >
                    <View style={{width:'90%',flexDirection:'row',  borderBottomWidth:0.5,borderColor:'#dadada', paddingBottom:15}} > 
                    {/* <Image style={{ marginTop:10,marginLeft:7 }} source={require('../../assets/img/busho_icono_2.png')} /> */}
                    <View style={{ marginTop:10,marginLeft:7 }}>
                        
                    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 8H2V16H18V8ZM18 6V2H2V6H18ZM12 12H16V14H12V12Z" fill="black"/>
                    </Svg>


                    </View>
                    <Text  style={{ color:'black',flex:1, marginLeft:20, marginTop:10,fontFamily:'NunitoSans-Regular',fontSize:16}}>Métodos de pago y cobros</Text>
                    <Icon22 style={{flex:0.1, marginTop:15}}  name="right" size={16} color="#0B121F" />
                    </View>   
                    </TouchableHighlight>             
                    </View>

                    <View style={{alignItems:'center', marginTop:15}}>
                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                            >
                    <View style={{width:'90%',flexDirection:'row', borderBottomWidth:0.5,borderColor:'#dadada', paddingBottom:15}} > 
                    {/* <Image style={{ marginTop:10,marginLeft:7 }} source={require('../../assets/img/busho_icono_3.png')} /> */}
                    <View style={{ marginTop:10,marginLeft:7 }}>
                        
                    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 5.98703e-09 17.2652 5.98703e-09 17V9.487C-1.56288e-05 9.34411 0.0305909 9.20288 0.0897577 9.07281C0.148924 8.94275 0.235277 8.82688 0.343 8.733L4 5.544V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18ZM7 16H10V9.942L6 6.454L2 9.942V16H5V12H7V16ZM12 16H18V2H6V4.127C6.234 4.127 6.469 4.209 6.657 4.374L11.657 8.733C11.7647 8.82688 11.8511 8.94275 11.9102 9.07281C11.9694 9.20288 12 9.34411 12 9.487V16ZM14 8H16V10H14V8ZM14 12H16V14H14V12ZM14 4H16V6H14V4ZM10 4H12V6H10V4Z" fill="black"/>
                    </Svg>

                    </View>
                    <Text  style={{color:'black',marginLeft:20, flex:1, marginTop:10, fontFamily:'NunitoSans-Regular',fontSize:16}}>Mis propiedades</Text>
                    <Icon22 style={{flex:0.1, marginTop:15}}  name="right" size={16} color="#0B121F" />
                    </View>  
                    </TouchableHighlight> 

                     
                                    
                    </View>

                    <View style={{alignItems:'center', marginTop:15}}>

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilAvisos')}
                            >
                    <View style={{width:'90%',flexDirection:'row',  borderBottomWidth:0.5,borderColor:'#dadada', paddingBottom:15}} > 
                    <Image style={{ marginTop:10,marginLeft:7 }} source={require('../../assets/img/busho_icono_4.png')} />
                    <Text  style={{ color:'black',flex:1, marginTop:10, fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20}}>Mis avisos</Text>
                    <Icon22 style={{flex:0.1, marginTop:15}}  name="right" size={16} color="#0B121F" />
                    </View>  
                    </TouchableHighlight>                      
                                    
                    </View>

                    

                    <View style={{alignItems:'center', marginTop:15}}>

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilHistorial')}
                            >
                    <View style={{width:'90%',flexDirection:'row', borderBottomWidth:0.5,borderColor:'#dadada', paddingBottom:15}} > 
                    {/* <Image style={{ marginTop:10,marginLeft:7 }} source={require('../../assets/img/busho_icono_5.png')} /> */}
                    <View style={{ marginTop:10,marginLeft:7 }}>
                        
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="black"/>
                        </Svg>

    
                    </View>

                    <Text  style={{color:'black', flex:1, marginTop:10, fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20}}>Historial de actividades</Text>
                    <Icon22 style={{flex:0.1, marginTop:15}}  name="right" size={16} color="#0B121F" />
                    </View>  
                    </TouchableHighlight> 

                      
                                    
                    </View>

                    <View style={{alignItems:'center', marginTop:15, paddingBottom:100}}>

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilPoliticas')}
                            >
                     <View style={{width:'90%',flexDirection:'row', borderColor:'#dadada', paddingBottom:15}} > 
                     <Image style={{ marginTop:10,marginLeft:7 }} source={require('../../assets/img/busho_icono.png')} />
                    <Text  style={{marginLeft:20, color:'black', flex:1, marginTop:10, fontFamily:'NunitoSans-Regular',fontSize:16}}>Nuestras Políticas</Text>
                    <Icon22 style={{flex:0.1, marginTop:15}}  name="right" size={16} color="#0B121F" />
                    </View>  
                    </TouchableHighlight> 


                    
                                    
                    </View>
                    

                
            </View>
           
                </ScrollView>

            </SafeAreaView>


               

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