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
              flex:1 ,alignItems:'center' }}>
                
                <ImageBackground source={require('../../assets/img/a3.jpg')} resizeMode={'cover'}
                style={{ flex: 1, width: '100%', }}>

                <ImageBackground source={require('../../assets/img/a1.png')} resizeMode={'cover'}
                style={{ flex: 1, width: '100%' }}>

                    <View style={{ marginTop:'10%', }}>
                        <Text style={{color:'white', fontFamily:'NunitoSans-Bold',fontSize:25,width:'80%', marginLeft:50 }}>
                        Tu publicación está en proceso de validación
                        </Text>

                       

                        <Text style={{marginTop:23, color:'white', fontFamily:'NunitoSans-Regular',fontSize:16,width:'80%',marginLeft:'10%'}}>
                        Te llegará una notificación cuando esté  
                        </Text>
                        <Text style={{color:'white', fontFamily:'NunitoSans-Regular',fontSize:16,width:'80%',marginLeft:'40%'}}>
                        aprobada. 
                        </Text>

                        

                        <Text style={{color:'white', fontFamily:'NunitoSans-Regular',fontSize:16,width:'80%',marginLeft:'30%'}}>
                    Durante 48 horas
                        </Text>



                        <Text style={{marginTop:14,color:'white',  fontFamily:'NunitoSans-Bold',fontSize:15,marginLeft:'10%'}}>
                     Continúa generando ingresos con Busho
                     </Text>

                    <View style={{ marginTop:20, marginLeft:'25%'}}>
                        <TouchableHighlight style={{with:10, height:40, width:'70%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Buscar')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Regular',color:'white',marginTop:'3%', fontWeight:'bold' }} >Seguir buscando</Text>
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