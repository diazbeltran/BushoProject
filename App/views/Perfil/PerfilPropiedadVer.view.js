import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight, ImageBackground,SafeAreaView, ScrollView  } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';

import Icon30 from 'react-native-vector-icons/FontAwesome';




export default class PerfilPropiedadVer extends Component {

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
            <SafeAreaView >
                    

                <ScrollView >
            <View style={{ 
              flex:1 }}>
                <View style={{  backgroundColor: 'white', flexDirection:'row' }} >
            
            <TouchableHighlight  underlayColor='white' style={{marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{width:'65%'}}>                    
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:20, color:'black', }}>Casa Principal</Text>

                
                </View>

               
                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:25}}
                        onPress={() => this.props.navigation.navigate('Mensajes')}
                            >
                       
                     <Image style={{}} source={require('../../assets/img/top_3.png')} />

                    </TouchableHighlight> 

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Notificacion')}
                            >
                       
                     <Image style={{marginLeft:20,  resizeMode:'contain'}} source={require('../../assets/img/top_4.png')} />

                    </TouchableHighlight> 

                </View>
            </View>
                
            <View style={{  flex:1, backgroundColor: 'white' , marginTop:'5%'}} >
                     
               
                
                    
                    
                
                    <View style={{marginLeft:20, borderWidth:1,borderColor:'#DEDEDE',  borderRadius:64, width:'90%', flexDirection:'row'}}> 
                    <Icon30 style={{marginTop:10, marginLeft:10}} name="address-card-o" size={20} color="#0B121F" />
                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:15,paddingTop:10, paddingBottom:10,marginLeft:10,color:'#2C2C2C',}}>3 espacios publicados</Text>
                    </View>
                
                    
                    <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                    <View style={{ flex: 1,marginTop:'6%', backgroundColor: 'white' , flexDirection: 'row'}}>
                    
                    <ImageBackground
        imageStyle={{borderRadius:10, marginLeft:10}}
        style={{borderRadius:10, width:'95%' ,height: 242 , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_1.png')} 
        >
             <View style={{flexDirection:'column', marginTop:'60%', marginLeft:'45%'}}>
                            
                            <View style={{flexDirection:'row', }}>
                                    
                                
                                <Image style={{ marginLeft:'2%'}} source={require('../../assets/img/a1_4.png')} />
                                
                            </View>
        
        
                                                                
                            </View>
        </ImageBackground>
                    </View>
                   
                </View>
                   
                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,  }}> / Día</Text>
                </View>
                    
                    
    
                <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                    <View style={{ flex: 1,marginTop:'6%', backgroundColor: 'white' , flexDirection: 'row'}}>
                    
                    <ImageBackground
        imageStyle={{borderRadius:10, marginLeft:10}}
        style={{borderRadius:10, width:'95%' ,height: 242 , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_1.png')} 
        >
             <View style={{flexDirection:'column', marginTop:'60%', marginLeft:'45%'}}>
                            
                            <View style={{flexDirection:'row', }}>
                                    
                                
                                <Image style={{ marginLeft:'2%'}} source={require('../../assets/img/a1_4.png')} />
                                
                            </View>
        
        
                                                                
                            </View>
        </ImageBackground>
                    </View>
                   
                </View>
                   
                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,  }}> / Día</Text>
                </View>
    
                <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                    <View style={{ flex: 1,marginTop:'6%', backgroundColor: 'white' , flexDirection: 'row'}}>
                    
                    <ImageBackground
        imageStyle={{borderRadius:10, marginLeft:10}}
        style={{borderRadius:10, width:'95%' ,height: 242 , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_1.png')} 
        >
             <View style={{flexDirection:'column', marginTop:'60%', marginLeft:'45%'}}>
                            
                            <View style={{flexDirection:'row', }}>
                                    
                                
                                <Image style={{ marginLeft:'2%'}} source={require('../../assets/img/a1_4.png')} />
                                
                            </View>
        
        
                                                                
                            </View>
        </ImageBackground>
                    </View>
                   
                </View>
                   
                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:100,  }}> / Día</Text>
                </View>
     


                    

                
            </View>
           

               

          </View>
          </ScrollView>

                    </SafeAreaView>
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