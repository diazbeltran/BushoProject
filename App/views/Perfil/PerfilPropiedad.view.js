import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView  ,ImageBackground} from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';


import Svg, { Path, Rect } from 'react-native-svg';




export default class PerfilPropiedad extends Component {

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
                <TouchableHighlight 
                        underlayColor='white'
                        style={{marginLeft:20, marginTop:5}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Perfil')}  >

                        <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>
                <Text style={{ marginLeft:0,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}> Mis propiedades</Text>
                {/* <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'black', fontWeight:'bold'}}></Text> */}
                </View>
               

                


                </View>
                  
               
                
            <View style={{  flex:1, backgroundColor: 'white' , marginTop:'0%'}} >
                     
               
                
                    
                    
            <SafeAreaView >
                    

                    <ScrollView >
                       
                        <View>
                        
                            <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                                <View style={{ flex: 1,marginTop:'6%', backgroundColor: 'white' , flexDirection: 'row'}}>

                                {/* <Image style={{borderRadius:10, width:'90%' , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_1.png')} /> */}

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
                                onPress={() => this.props.navigation.navigate('PerfilPropiedadVer')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{marginTop:'3%',marginLeft:20, fontSize:17,color:'black'  }}>Casa Principal</Text>
                                    </View>   
                                </TouchableHighlight> 
                            
                            <Text style={{marginTop:'0%',marginLeft:20, fontSize:14, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>


                            <View style={{flexDirection:'row', marginLeft:20, marginTop:7}}>
                            <Image style={{marginTop:2,resizeMode: 'stretch'}} source={require('../../assets/img/mis_propiedades.png')} /> 
                            <Text style={{marginTop:0,marginLeft:10, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>3 espacios publicados</Text>
                            </View>
                            


                            {/* <Text style={{marginTop:'2%',marginLeft:20, fontSize:17, marginBottom:0,  }}>$5.500</Text> */}

                            <View style={{flexDirection:'row',marginLeft:20, marginTop:'5%'}}>

                                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('PerfilPropiedadAgregar')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                        <Icon2 style={{marginLeft:'0%',paddingTop:'0%'}}  name="add-circle-outline" size={30} color="#61D3BA" />
                                        <Text style={{color:'#61D3BA',  marginTop:'3%', marginLeft:'5%'}}>
                                        Agregar nueva propiedad
                                        </Text>
                                    </View>   
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