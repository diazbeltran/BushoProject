import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';



export default class Publicar5 extends Component {

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
              flex:1 ,alignItems:'center' }}>
                
                <ImageBackground source={require('../../assets/img/publica_fondo.png')} resizeMode={'cover'}
                style={{ flex: 1, width: '100%' }}>

                <ImageBackground source={require('../../assets/img/publica_fondo2.png')} resizeMode={'cover'}
                style={{ flex: 1, width: '100%' }}>

                    <View style={{ marginTop:'70%', }}>
                        <Text style={{color:'white', fontFamily:'NunitoSans-Regular',fontSize:25, marginLeft:'25%'}}>
                        Tu espacio fue 
                        </Text>

                        <Text style={{color:'white', fontFamily:'NunitoSans-Regular',fontSize:25, marginLeft:'20%'}}>
                        publicado con éxito
                        </Text>


                        <Text style={{color:'white', fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:'15%'}}>
                        Bienvenido a la comunidad Busho
                        </Text>

                    <View style={{ marginTop:20, marginLeft:'25%'}}>
                        <TouchableHighlight style={{with:10, height:40, width:'70%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Regular',color:'white',marginTop:'3%', fontWeight:'bold' }} >Volver al inicio</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>


                    </View>
                    
                </ImageBackground>
                    
                </ImageBackground>



                
                
                
                {/* <Image  style={{ flex:1, resizeMode:'stretch', }} source={require('../../assets/img/publica_fondo.png')} /> */}
                
            
                    
                
                          

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