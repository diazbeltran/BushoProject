import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet, TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';



import Icon25 from 'react-native-vector-icons/Feather';
import Icon23 from 'react-native-vector-icons/MaterialCommunityIcons';

import Svg, { Path } from 'react-native-svg';



export default class PerfilPropiedadAgregarDocto extends Component {

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
                <View style={{  backgroundColor: 'white', flexDirection:'row' }} >
            
            <TouchableHighlight  underlayColor='white' style={{marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('PerfilPropiedadAgregar')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{width:'80%'}}>                    
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:10, color:'black'}}>Nueva propiedad</Text>
                </View>

               
                

                </View>
            </View>
                
            <View style={{  backgroundColor: 'white' , marginTop:25}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{marginLeft:20, flexDirection:'column'}}>
                    
                    <View style={{marginLeft:0, flexDirection:'row'}}>
                    {/* <Image style={{marginTop:0,height:48,width:48, marginLeft:0}} source={require('../../assets/img/circulo_4.png')} /> */}
                    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M19.6039 31V29.1L24.1639 24.24C24.7772 23.5733 25.2172 22.9867 25.4839 22.48C25.7506 21.96 25.8839 21.4333 25.8839 20.9C25.8839 19.54 25.0639 18.86 23.4239 18.86C22.1439 18.86 20.9639 19.34 19.8839 20.3L19.0239 18.38C19.5839 17.8733 20.2839 17.4667 21.1239 17.16C21.9639 16.8533 22.8372 16.7 23.7439 16.7C25.2506 16.7 26.4039 17.04 27.2039 17.72C28.0172 18.4 28.4239 19.3733 28.4239 20.64C28.4239 21.4933 28.2172 22.3133 27.8039 23.1C27.4039 23.8867 26.7706 24.7333 25.9039 25.64L22.8039 28.88H28.9639V31H19.6039Z" fill="#1EB091"/>
<Path opacity="0.6" d="M48 24C48 19.2532 46.5924 14.6131 43.9553 10.6663C41.3181 6.71953 37.5698 3.64339 33.1844 1.82689C28.799 0.0103862 23.9734 -0.464894 19.3178 0.46115C14.6623 1.3872 10.3859 3.67298 7.02944 7.02943C3.67298 10.3859 1.3872 14.6623 0.461153 19.3178C-0.464893 23.9734 0.0103866 28.799 1.82689 33.1844C3.64339 37.5698 6.71953 41.3181 10.6663 43.9553C14.6131 46.5924 19.2532 48 24 48L24 44.1436C20.016 44.1436 16.1214 42.9622 12.8088 40.7488C9.49624 38.5354 6.91439 35.3894 5.38977 31.7086C3.86515 28.0279 3.46624 23.9777 4.24349 20.0702C5.02073 16.1627 6.93922 12.5735 9.75635 9.75635C12.5735 6.93922 16.1627 5.02073 20.0702 4.24349C23.9777 3.46624 28.0279 3.86515 31.7086 5.38977C35.3894 6.91439 38.5354 9.49624 40.7488 12.8088C42.9622 16.1214 44.1436 20.016 44.1436 24L48 24Z" fill="#1EB091"/>
<Path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM3.85643 24C3.85643 35.125 12.875 44.1436 24 44.1436C35.125 44.1436 44.1436 35.125 44.1436 24C44.1436 12.875 35.125 3.85643 24 3.85643C12.875 3.85643 3.85643 12.875 3.85643 24Z" fill="#1EB091"/>
</Svg>

                            <View style={{marginLeft:10, flexDirection:'column'}}>
                            <Text style={{ fontFamily:'NunitoSans-Blod',fontSize:20, marginLeft:0, color:'black', fontWeight:'bold'}}>Documentos</Text>

                              
                                <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16, }}>                           
                                Paso 2 de 2
                                </Text>
                            </View>
                        
                    </View>
                    
                    
                    <View style={{marginTop:25, flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16 }}>
                    Documento de propiedad y bien raíz
                        </Text>
                    </View>

                    <View style={{ marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'95%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    <Icon23 style={{marginTop:10}} name="file-export-outline" size={25} color="#646464" />
                    <TextInput
                    
                    style={{ marginLeft:20}}
                    placeholder='Nombre-documento.pdf' >

                        </TextInput>
                        <Icon25 style={{marginTop:8, marginLeft:30}} name="trash-2" size={25} color="red" />
                                                         </View>        
                    </View>
                   
                    
                    <View style={{marginTop:25, flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16 }}>
                    Certificado de antecedentes
                        </Text>
                    </View>

                    <View style={{ marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'95%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    <Icon23 style={{marginTop:10}} name="file-export-outline" size={25} color="#646464" />
                    <TextInput
                    
                    style={{ marginLeft:20}}
                    placeholder='Nombre-documento.pdf' >

                        </TextInput>
                        <Icon25 style={{marginTop:8, marginLeft:30}} name="trash-2" size={25} color="red" />
                                                         </View>        
                    </View> 
                    

                    <View style={{marginTop:10}}>
                    <View>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16, color:'#717171'}}>Foto de carnet por ambos lados</Text>
                    </View>

                <View style={{flexDirection:'row', marginTop:10,}}>
                <View style={{width:'44%', height:100, borderWidth:0.2, borderColor:'#61D3BA', backgroundColor:'#F9FAFA'}}>
                <Icon23 style={{marginTop:'25%', marginLeft:50}} name="image-plus" size={25} />
                    </View>

                    <View style={{width:'45%', borderWidth:0.2, marginLeft:20, borderColor:'#61D3BA', backgroundColor:'#F9FAFA'}}>
                    <Icon23 style={{marginTop:'25%', marginLeft:50}} name="image-plus" size={25} />
                    </View>


                </View>
                    

                    

                    </View>

                    <View style={{marginTop:20}}>
                    <View>
                        <Text style={{fontFamily:'NunitoSans-Regular', fontSize:16, color:'#717171'}}>Foto de tú propiedad</Text>
                    </View>

                <View style={{flexDirection:'row', marginTop:10,}}>
                <View style={{width:'95%', height:200, borderWidth:0.2, borderColor:'#61D3BA', backgroundColor:'#F9FAFA'}}>
                <Icon23 style={{marginTop:'25%', marginLeft:'50%'}} name="image-plus" size={25} />
                    </View>

                   


                </View>
                    </View>

                   

                   
                    
                    
                    
                      
                    <View style={{ marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'95%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilPropiedadAgregarDoctoFinaliza')}
                            >
                                <Text style={{color:'white',marginTop:'1%', fontWeight:'bold' }} >Finalizar</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>


                    <View style={{flexDirection:'row',
                    marginTop:10, width:'95%',borderRadius:64 ,height:40,borderWidth:1,borderColor:'#61D3BA',paddingLeft:20, marginBottom:80}} > 
                    
                    <TouchableHighlight underlayColor='white' style={{ height:40, width:'90%',
                                  paddingTop:5,paddingBottom:0, paddingLeft:35,paddingRight:35, borderRadius:64,
                                   alignItems:'center'}}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilPago')}
                            >
                                <Text style={{marginTop:'3%', fontWeight:'bold', color:'#61D3BA' }} underlayColor={'red'}>Cancelar</Text>
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