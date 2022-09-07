import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image, TouchableHighlight,SafeAreaView, ScrollView  } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';


import Svg, { Path, Rect } from 'react-native-svg';
import Icon25 from 'react-native-vector-icons/Feather';




export default class Publicar2 extends Component {

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
                <View style={{   backgroundColor: 'white', flexDirection:'row' }} >
            
            {/* <TouchableHighlight  underlayColor='white' style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight> */}
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{marginLeft:20, width:'63%'}}>                    
                <Text style={{ marginLeft:0,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}> Publicar aviso</Text>       
                
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
                
            <View style={{ backgroundColor: 'white' , marginTop:'5%'}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{flexDirection:'column'}}>
                    
                    <View style={{marginLeft:20, flexDirection:'row',marginBottom:20}}>
                    {/* <Image style={{marginTop:0,height:48,width:48, marginLeft:0}} source={require('../../assets/img/circulo_1_2.png')} /> */}
                    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M19.6039 31V29.1L24.1639 24.24C24.7772 23.5733 25.2172 22.9867 25.4839 22.48C25.7506 21.96 25.8839 21.4333 25.8839 20.9C25.8839 19.54 25.0639 18.86 23.4239 18.86C22.1439 18.86 20.9639 19.34 19.8839 20.3L19.0239 18.38C19.5839 17.8733 20.2839 17.4667 21.1239 17.16C21.9639 16.8533 22.8372 16.7 23.7439 16.7C25.2506 16.7 26.4039 17.04 27.2039 17.72C28.0172 18.4 28.4239 19.3733 28.4239 20.64C28.4239 21.4933 28.2172 22.3133 27.8039 23.1C27.4039 23.8867 26.7706 24.7333 25.9039 25.64L22.8039 28.88H28.9639V31H19.6039Z" fill="#1EB091"/>
<Path opacity="0.6" d="M24 -1.04907e-06C37.2548 -1.62846e-06 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 -4.69686e-07 37.2548 -1.04907e-06 24C-1.62846e-06 10.7452 10.7452 -4.69686e-07 24 -1.04907e-06ZM24 44.1436C35.125 44.1436 44.1436 35.125 44.1436 24C44.1436 12.875 35.125 3.85643 24 3.85643C12.875 3.85643 3.85643 12.875 3.85643 24C3.85643 35.125 12.875 44.1436 24 44.1436Z" fill="#1EB091"/>
<Path d="M24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52857 30.3652 1.90276e-07 24 -1.04907e-06L24 3.85643C29.3424 3.85643 34.466 5.9787 38.2437 9.75635C42.0213 13.534 44.1436 18.6576 44.1436 24C44.1436 29.3424 42.0213 34.466 38.2436 38.2437C34.466 42.0213 29.3424 44.1436 24 44.1436L24 48Z" fill="#1EB091"/>
</Svg>
                  
                            <View style={{marginLeft:10, flexDirection:'column'}}>
                                <Text style={{fontFamily:'NunitoSans-Blod',fontWeight:'bold', fontSize:16,color:'black' }}>                           
                                Datos del espacio
                                </Text>
                                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>                           
                                Paso 2 de 4
                                </Text>
                            </View>
                        
                    </View>
                    
                   

                    
                <View style={{borderTopWidth:1, borderColor:'#D7D7D7'}}>
               <View style={{marginLeft:20}}>
               <Text style={{marginTop:20, marginLeft:0, fontFamily:'NunitoSans-Blod',fontWeight:'bold', fontSize:18, color:'black'}}>Datos del espacio </Text>
               <View style={{marginTop:25, flexDirection:'row'}}>
                   
                        <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                        Título del aviso
                        </Text>
                    </View>

                    <View style={{ marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'95%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    
                    <TextInput
                    
                    style={{ marginLeft:0,fontFamily:'NunitoSans-Regular',fontSize:16}}
                    placeholder='' >

                        </TextInput>
                    </View>        
                    </View> 

                    <View style={{marginTop:25, flexDirection:'row'}}>
                   
                   <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                   Descripción del espacio
                   </Text>
               </View>
                    <View style={{ height:200,marginTop:5,}}>
                    <View style={{ flexDirection:'row', width:'95%',borderRadius:10 ,height:200,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    
                    <TextInput
                     multiline={true}
                     numberOfLines={10}
                    style={{ fontFamily:'NunitoSans-Regular',fontSize:16}}
                    placeholder='' >

                        </TextInput>
                    </View>        
                    </View> 


                    <View style={{marginTop:30, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8'}}>
                    <View style={{marginTop:25, flexDirection:'row'}}>
                    <Text style={{marginTop:0, marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:18,fontWeight:'bold', color:'black'}}>Tipo de espacio </Text>
                    </View>

                    <View style={{ marginTop:5, flexDirection:'row'}}>
                    <Image style={{marginLeft:20, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_2.png')} />
                    <Image style={{marginLeft:20, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_1.png')} />
                    </View>

                    <View style={{flexDirection:'row',marginLeft:0, marginTop:'5%'}}>

                        <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        
                        >
                        <View style={{width:'90%',flexDirection:'row', }} > 
                        <Icon2 style={{marginLeft:'0%',paddingTop:'0%'}}  name="add-circle-outline" size={30} color="#61D3BA" />
                        <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'#61D3BA',  marginTop:'3%', marginLeft:'5%'}}>
                        Agregar 
                        </Text>
                        </View>   
                        </TouchableHighlight>  
                        </View>

                    </View>



                    <View style={{marginTop:30, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8'}}>
                    <View style={{marginTop:25, flexDirection:'row'}}>
                    <Text style={{marginTop:0, marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black',fontWeight:'bold'}}>Comodidades </Text>
                    </View>

                    <View style={{ marginTop:5, flexDirection:'row'}}>
                    <Image style={{marginLeft:0, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_3.png')} />
                    <Image style={{marginLeft:5, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_4.png')} />
                    <Image style={{marginLeft:5, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_5.png')} />
                    </View>
                    <View style={{ marginTop:5, flexDirection:'row'}}>
                    <Image style={{marginLeft:0, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_6.png')} />
                    <Image style={{marginLeft:5, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_7.png')} />
                   
                    </View>

                    <View style={{flexDirection:'row',marginLeft:0, marginTop:'5%'}}>

                        <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                       
                        >
                        <View style={{width:'90%',flexDirection:'row', }} > 
                        <Icon2 style={{marginLeft:'0%',paddingTop:'0%'}}  name="add-circle-outline" size={30} color="#61D3BA" />
                        <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'#61D3BA',  marginTop:'3%', marginLeft:'5%'}}>
                        Agregar 
                        </Text>
                        </View>   
                        </TouchableHighlight>  
                        </View>

                    </View>



                    <View style={{marginTop:30, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8'}}>
                    <View style={{marginTop:25, flexDirection:'row'}}>
                    <Text style={{marginTop:0, marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black',fontWeight:'bold'}}>Ubicación </Text>
                    </View>

                    <View style={{ marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'95%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    <Icon25 style={{marginTop:10}} name="map-pin" size={25} color="#646464" />
                    <TextInput
                    
                    style={{fontFamily:'NunitoSans-Regular',fontSize:16,marginLeft:20}}
                    placeholder='Colo colo 534, Concepcion' >

                        </TextInput>
                    </View>        
                    </View>
                    </View>






                    <View style={{marginTop:30, borderBottomWidth:1, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8', marginBottom:10}}>
                    <View style={{marginTop:25, flexDirection:'row'}}>
                    <Text style={{marginTop:0, marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black',fontWeight:'bold'}}>Datos físicos </Text>
                    </View>

                    <View style={{flexDirection:'row', marginBottom:20}}>
                    <View style={{flex:1}}>
                            <View style={{marginTop:25, flexDirection:'row'}}>

                            <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                            Mts2
                            </Text>
                            </View>

                            <View style={{ marginTop:5,}}>
                            <View style={{flexDirection:'row', width:'90%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 

                            <TextInput

                            style={{ marginLeft:0,fontFamily:'NunitoSans-Regular',fontSize:16}}
                            placeholder='' >

                            </TextInput>
                            </View>        
                            </View> 
                    </View>

                    <View style={{flex:1}}>
                            <View style={{marginTop:25, flexDirection:'row'}}>

                            <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                            Máx. personas
                            </Text>
                            </View>

                            <View style={{ marginTop:5,}}>
                            <View style={{flexDirection:'row', width:'90%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 

                            <TextInput

                            style={{ marginLeft:0,fontFamily:'NunitoSans-Regular',fontSize:16}}
                            placeholder='' >

                            </TextInput>
                            </View>        
                            </View> 
                    </View>

                    </View>
                   
                    

                    
                    
                    </View>
                   
               </View>
                </View>

                   
                    
                            
                    


                   

                   
                    
                    
                    
                      
                    <View style={{marginLeft:20, marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'95%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Publicar3')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, color:'white',marginTop:'1%', fontWeight:'bold' }} >Siguiente</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>


                    <View style={{marginLeft:20, flexDirection:'row',
                    marginTop:10, width:'90%',borderRadius:64 ,height:40,borderWidth:1,borderColor:'#61D3BA',paddingLeft:20, marginBottom:100}} > 
                    
                    <TouchableHighlight underlayColor='white' style={{ height:40, width:'90%',
                                  paddingTop:5,paddingBottom:0, paddingLeft:35,paddingRight:35, borderRadius:64,
                                   alignItems:'center'}}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,marginLeft:10, marginTop:'1%', fontWeight:'bold', color:'#61D3BA' }} underlayColor={'red'}>Cancelar</Text>
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