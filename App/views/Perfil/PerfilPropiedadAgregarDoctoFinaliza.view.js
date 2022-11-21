import React, { Component } from 'react';
import { View, Text,  StyleSheet, TouchableHighlight,  ImageBackground } from 'react-native';




export default class PerfilPropiedadAgregarDoctoFinaliza extends Component {

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
                
                <ImageBackground source={require('../../assets/img/a3.jpg')} resizeMode={'cover'}
                style={{ flex: 1, width: '100%', }}>

                <ImageBackground source={require('../../assets/img/a1.png')} resizeMode={'cover'}
                style={{ flex: 1, width: '100%' }}>

                    <View style={{alignItems:'center', marginTop:'50%',flexDirection:'column'}}>
                        <View style={{alignItems:'center', width:'80%'}}>
                        <Text maxFontSizeMultiplier={1} style={{color:'white', fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:0,  }}>
                        Tu publicación está en proceso de validación
                        </Text>    
                        </View>
                        

                        <View style={{alignItems:'center', width:'64%'}}>
                        <Text maxFontSizeMultiplier={1} style={{marginTop:0, color:'white', fontFamily:'NunitoSans-Regular',fontSize:16}}>
                        Te llegará una notificación cuando 
                        </Text> 
                        </View>
                        <View style={{alignItems:'center', width:'64%'}}>
                        <Text maxFontSizeMultiplier={1} style={{marginTop:0, color:'white', fontFamily:'NunitoSans-Regular',fontSize:16}}>
                        esté aprobada. 
                        </Text> 
                        </View>
                        

                        <View style={{alignItems:'center', width:'64%'}}>
                        <Text maxFontSizeMultiplier={1} style={{marginTop:0, color:'white', fontFamily:'NunitoSans-Regular',fontSize:16}}>
                        Durante 48 horas 
                        </Text> 
                        </View>

                     
                        <View style={{alignItems:'center', width:'80%'}}>
                        <Text maxFontSizeMultiplier={1} style={{marginTop:14,color:'white',  fontFamily:'NunitoSans-Bold',fontSize:15,marginLeft:'0%'}}>
                     Continúa generando ingresos con Busho
                     </Text>  
                        </View>


                        

                    <View style={{alignItems:'center', marginTop:20,}}>
                        <TouchableHighlight style={{with:10, height:40, width:'70%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Buscar')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{fontFamily:'NunitoSans-Bold',color:'white',marginTop:'1%', fontSize:16  }} >Seguir buscando</Text>
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