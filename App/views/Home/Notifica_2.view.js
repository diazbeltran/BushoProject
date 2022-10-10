import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight,ImageBackground,TouchableWithoutFeedback, SafeAreaView, ScrollView  } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';




import Icon22 from 'react-native-vector-icons/AntDesign';



export default class Notifica_2 extends Component {

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
            
            <TouchableHighlight  underlayColor='white' style={{marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{marginLeft:20, width:'80%'}}>                    
                <Text style={{ marginLeft:0,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}>Resumen de reserva</Text>       
              
                
                </View>

                

                </View>
            </View>
                
            <View style={{   backgroundColor: 'white' , marginTop:'5%'}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{flexDirection:'column'}}>
                    
                  
                  
                    
                   

                    
                <View style={{borderTopWidth:1, borderColor:'#D7D7D7'}}>
                
                    <View style={{ alignItems:'center', marginTop:10}}>
                    <ImageBackground
        imageStyle={{borderRadius:10, marginLeft:10}}
        style={{borderRadius:10, width:'95%' ,height: 191 , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_1.png')} 
        >
             <View style={{flexDirection:'column', marginTop:'60%', marginLeft:'45%'}}>
                            
                            <View style={{flexDirection:'row', }}>
                                    <TouchableWithoutFeedback
                                    onPress={console.log("pan con queso")}
                                    >
                                    <Image style={{ }} source={require('../../assets/img/a1_4.png')} />
                                    </TouchableWithoutFeedback>
                                
                            </View>
        
        
                                                                
                            </View>
        </ImageBackground>
        <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                            
                            <Text style={{marginTop:'01%',marginLeft:20, fontSize:14, color:'#717172' }}>Pedro de Valdivia, Concepción</Text>
                    </View>

                    <View style={{marginLeft:20, marginTop:16,borderColor:'#d2d2d2',  flexDirection:'row', borderWidth:1, width:'90%', borderTopRightRadius:20, borderBottomRightRadius:20, height:80, borderBottomLeftRadius:20}}>
                    <View style={{flexDirection:'column', marginTop:'0%'}}>
                    <Image style={{marginLeft:35, marginTop:15, }} source={require('../../assets/img/resumen_1.png')} />
                    <Image style={{marginLeft:35, marginTop:5 }} source={require('../../assets/img/resumen_2.png')} />
                        </View>
                        
                        
                        <View style={{flexDirection:'column', marginTop:'5%', marginLeft:20}}>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16}}>  Desde el 23 Mayo 2022</Text>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16}}>  A las 10:00 am</Text>
                        </View>
                        

                        <Icon22 style={{marginLeft:'45%',marginTop:'10%', marginRight:20}}  name="checkcircleo" size={20} color="#00d6b9" />

                        </View>



                        <View style={{marginLeft:20, marginTop:16,borderColor:'#d2d2d2',  flexDirection:'row', borderWidth:1, width:'90%', borderTopRightRadius:20, borderBottomRightRadius:20, height:80, borderBottomLeftRadius:20}}>
                    <View style={{flexDirection:'column', marginTop:'0%'}}>
                    <Image style={{marginLeft:35, marginTop:15, }} source={require('../../assets/img/resumen_1.png')} />
                    <Image style={{marginLeft:35, marginTop:5 }} source={require('../../assets/img/resumen_2.png')} />
                        </View>
                        
                        
                        <View style={{flexDirection:'column', marginTop:'5%', marginLeft:20}}>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16}}>  Hasta el 24 Mayo 2022</Text>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16}}>  Hasta las 18:00 pm</Text>
                        </View>
                        

                        <Icon22 style={{marginLeft:'45%',marginTop:'10%', marginRight:20}}  name="checkcircleo" size={20} color="#00d6b9" />

                        </View>

                        <Image style={{marginLeft:'25%', marginTop:15, }} source={require('../../assets/img/resumen_3.png')} />



                        <View style={{marginLeft:20, marginTop:15,borderColor:'#d2d2d2',  flexDirection:'row', borderWidth:1, width:'90%', borderTopRightRadius:20, borderBottomRightRadius:20, height:50, borderBottomLeftRadius:20}}>
                    <View style={{flexDirection:'column', marginTop:'0%'}}>
                    <Text style={{fontFamily:'NunitoSans-Regular',marginTop:10,marginLeft:40, fontSize:16, color:'#717171'}}>  Total a pagar</Text>
                        </View>
                        
                        <TouchableHighlight 
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                            >
                              <View style={{flexDirection:'column', marginTop:'3%', marginLeft:20}}>
                        <Text style={{fontFamily:'NunitoSans-Bold',marginLeft:20, fontSize:21,color:'#4F4F4F'}}> $25.500</Text>
                  
                        </View>
                            </TouchableHighlight>
                        
                        

                        <Icon22 style={{marginLeft:'45%',marginTop:'10%', marginRight:20}}  name="checkcircleo" size={20} color="#00d6b9" />

                        </View>

                        
                </View>

                   
                    
                            
                    


                   

                   
                    
                    
                    
                      
                    <View style={{marginLeft:20, marginTop:20, marginBottom:200 }}>
                        <TouchableHighlight style={{with:10, height:40, width:'95%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Notificacion3')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{fontFamily:'NunitoSans-Blod',fontSize:16,color:'white',marginTop:'1%',  }} >Pagar con Webpay</Text>
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