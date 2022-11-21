import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight,ImageBackground,TouchableWithoutFeedback, SafeAreaView, ScrollView  } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';


import Svg, { Path, Rect } from 'react-native-svg';



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
                    <View style={{marginTop:'35%', alignItems:'flex-end', marginLeft:'10%'}} >
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM13 4H7V6H5V4H2V8H18V4H15V6H13V4ZM18 10H2V18H18V10Z" fill="black"/>
                        </Svg>

                        </View>
                        <View style={{marginTop:'10%', alignItems:'flex-end', marginLeft:'10%'}} >
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="black"/>
</Svg>


                        </View>
                        </View>
                        
                        
                        <View style={{flexDirection:'column', marginTop:'4%', marginLeft:20}}>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16}}>  Desde el 23 Mayo 2022</Text>
                        <Text style={{marginTop:'2%',fontFamily:'NunitoSans-Regular', fontSize:16}}>  A las 10:00 am</Text>
                        </View>
                        

                        <Icon22 style={{marginLeft:'45%',marginTop:'10%', marginRight:20}}  name="checkcircleo" size={20} color="#00d6b9" />

                        </View>



                        <View style={{marginLeft:20, marginTop:16,borderColor:'#d2d2d2',  flexDirection:'row', borderWidth:1, width:'90%', borderTopRightRadius:20, borderBottomRightRadius:20, height:80, borderBottomLeftRadius:20}}>
                        <View style={{flexDirection:'column', marginTop:'0%'}}>
                    <View style={{marginTop:'35%', alignItems:'flex-end', marginLeft:'10%'}} >
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM13 4H7V6H5V4H2V8H18V4H15V6H13V4ZM18 10H2V18H18V10Z" fill="black"/>
                        </Svg>

                        </View>
                        <View style={{marginTop:'10%', alignItems:'flex-end', marginLeft:'10%'}} >
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="black"/>
</Svg>


                        </View>
                        </View>
                        
                        
                        <View style={{flexDirection:'column', marginTop:'4%', marginLeft:20}}>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16}}>  Hasta el 24 Mayo 2022</Text>
                        <Text style={{marginTop:'2%',fontFamily:'NunitoSans-Regular', fontSize:16}}>  Hasta las 18:00 pm</Text>
                        </View>
                        

                        <Icon22 style={{marginLeft:'45%',marginTop:'10%', marginRight:20}}  name="checkcircleo" size={20} color="#00d6b9" />

                        </View>
                        <View style={{alignItems:'center',marginTop:20}} >
                        <View style={{alignItems:'center', borderRadius:20, borderWidth:1,width:'50%',height:40, flexDirection:'row', borderColor:'#676767' }} >
                            

                        <View style={{color:"#00d6b9", marginTop:'0%', alignItems:'flex-end', marginLeft:'10%',marginRight:'10%'}} >
                        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M13.167 2.49992H16.5003C16.7213 2.49992 16.9333 2.58772 17.0896 2.744C17.2459 2.90028 17.3337 3.11224 17.3337 3.33325V16.6666C17.3337 16.8876 17.2459 17.0996 17.0896 17.2558C16.9333 17.4121 16.7213 17.4999 16.5003 17.4999H1.50033C1.27931 17.4999 1.06735 17.4121 0.91107 17.2558C0.75479 17.0996 0.666992 16.8876 0.666992 16.6666V3.33325C0.666992 3.11224 0.75479 2.90028 0.91107 2.744C1.06735 2.58772 1.27931 2.49992 1.50033 2.49992H4.83366V0.833252H6.50033V2.49992H11.5003V0.833252H13.167V2.49992ZM11.5003 4.16659H6.50033V5.83325H4.83366V4.16659H2.33366V7.49992H15.667V4.16659H13.167V5.83325H11.5003V4.16659ZM15.667 9.16659H2.33366V15.8333H15.667V9.16659Z" fill="#474747"/>
</Svg>


                        </View>


                            <Text style={{color:'#676767'}}>Cambiar fecha</Text>
                        </View>
                    </View>
                       

                        



                        <View style={{marginLeft:20, marginTop:15,borderColor:'#d2d2d2',  flexDirection:'row', borderWidth:1, width:'90%', borderTopRightRadius:20, borderBottomRightRadius:20, height:50, borderBottomLeftRadius:20}}>
                    <View style={{flexDirection:'column', marginTop:'0%'}}>
                    <Text style={{fontFamily:'NunitoSans-Regular',marginTop:10,marginLeft:40, fontSize:16, color:'#717171'}}>  Total a pagar</Text>
                        </View>
                        
                        <TouchableHighlight 
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                            >
                              <View style={{flexDirection:'column', marginTop:'5%', marginLeft:20}}>
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
                                <Text maxFontSizeMultiplier={1} style={{  fontFamily:'NunitoSans-Bold',fontSize:16,color:'white',marginTop:'1%',  }} >Pagar con Webpay</Text>
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