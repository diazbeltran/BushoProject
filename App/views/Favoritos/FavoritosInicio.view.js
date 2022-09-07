import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Modal, TouchableHighlight,SafeAreaView, ScrollView, ImageBackground } from 'react-native';





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
              <View style={{flexDirection:'row', marginTop:30,marginBottom:19, marginLeft:20,}}>

                <View style={{flex:0.9}}>
                <Text style={{ marginLeft:0,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}> Mis favoritos</Text>
                {/* <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:10, color:'black', fontWeight:'bold' }}>Mis favoritos</Text> */}
                </View>

            

                 

                </View>
                
            <View style={{  flex:1, borderTopWidth:1,borderColor:'#dfdede',  backgroundColor: 'white' , marginTop:'0%'}} >
                     
               
                
                    
            <SafeAreaView >
                    

                <ScrollView >

               
                    
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
        style={{borderRadius:10, width:'95%' ,height: 242 , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_2.png')} 
        >
             <View style={{flexDirection:'column', marginTop:'60%', marginLeft:'45%'}}>
                            
                            <View style={{flexDirection:'row', }}>
                                    
                                
                                <Image style={{ marginLeft:'2%'}} source={require('../../assets/img/a1_4.png')} />
                                
                            </View>
        
        
                                                                
                            </View>
        </ImageBackground>
                    </View>
                   
                </View>
                   
                <Text style={{marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black' }}>Quincho con piscina</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Concón, Región de Valparaíso</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$25.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:50,  }}> / Día</Text>
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