import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image, TouchableHighlight,  SafeAreaView, ScrollView } from 'react-native';





import CheckBox from '@react-native-community/checkbox';


import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import Icon4 from 'react-native-vector-icons/AntDesign';    




export default class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            status: false,
          
           correo:'',
          
            clave:'',
            email :'',
            modalVisible:false,
            modal_error:'',
            dato1:'',
            aceptar:false
        };

        
    }


    



    render() {

        return (
            <View style={{flexDirection:'column', flex:1, backgroundColor:'white'}}>
 <SafeAreaView >
                    

                    <ScrollView >
                
                 <View style={{flex:0.6}}>
                <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                    <View style={{ flex: 1,marginTop:0, backgroundColor: 'white' , flexDirection: 'row'}}>
                            <Image style={{width:'45%', marginTop:0,resizeMode: 'center'}} source={require('../../assets/img/busho_2.png')} />
                    </View>
                    <View style={{flexDirection:'row', marginTop:-50}}>
                   <Text style={{marginTop:5, color:'#4B4B4B', fontFamily:'NunitoSans-Regular',fontSize:16}}>Crea una nueva cuenta</Text>

                    <TouchableHighlight style={{marginTop:0, marginLeft:20, height:35,  width:'15%',
                                   borderRadius:64,
                                  backgroundColor:'#00D6B9', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Registra')}
                            >
                                <Text style={{color:'white',marginTop:'9%', maxFontSizeMultiplier:1,fontFamily:'NunitoSans-Regular',fontSize:16}} underlayColor={'white'}>Aquí</Text>
                            </TouchableHighlight>
                            </View>
                </View>
                </View>
                
                <View style={{marginTop:26, flex: 1, backgroundColor: 'white' }} >
                
                

                    <View style={{alignItems:'center', marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'90%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    <Icon4 style={{marginTop:'4%'}} name="user" size={22} color="#646464" />
                    <TextInput
                    
                    style={{ marginLeft:11, fontFamily:'NunitoSans-Regular',fontSize:16}}
                    placeholder='Email' >

                        </TextInput>
                    </View>        
                    </View>

                    <View style={{alignItems:'center', marginTop:14,}}>
                    <View style={{flexDirection:'row', width:'90%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    <Icon4 style={{marginTop:'4%'}} name="lock" size={22} color="#646464" />
                    <TextInput
                    
                    style={{ marginLeft:10,fontFamily:'NunitoSans-Regular',fontSize:16}}
                    placeholder='Contraseña' >

                        </TextInput>
                    </View>        
                    </View>

                    <View style={{alignItems:'center', marginTop:18}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#00D6B9', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('App')}
                            >
                                <Text style={{color:'white',marginTop:'1%',fontFamily:'NunitoSans-Regular',fontSize:16 }} underlayColor={'white'}>Ingresar</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>

                    


                    <View style={{alignItems:'center'}}>
                    <View style={{flexDirection:'row', marginTop:36}}>
                     

                    
              <CheckBox
              value={this.state.aceptar}
              tintColors={{ true: '#1EB091', false: '#1EB091' }}
                        style={{marginTop:0, height:20}}
            onValueChange={(value) =>
                            {console.log("el valorx es  "+value);
                            
                            this.setState({
                                aceptar: value,
                               
                            })}
                            }
                        
                
                
                />   
                <Text style={{backgroundColor:'white', marginTop:0, fontFamily:'NunitoSans-Regular',fontSize:16}}> 
                                
                 Acepto los </Text>
                 <Text style={{color:'#61D3BA',backgroundColor:'white', marginTop:0,fontFamily:'NunitoSans-Regular',fontSize:16 }}> 
                                
                                términos y condiciones</Text>
                    </View>
                    </View>
                    <View style={{alignItems:'center', marginTop:20}}>
                        <TouchableHighlight style={{with:10,height:20, marginTop:0}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Recupera')}
                            >
                                <Text style={{color:'#61D3BA' ,backgroundColor:'white', fontFamily:'NunitoSans-Regular',fontSize:16}}> 
                                
                                ¿Olvidaste tu contraseña?</Text>
                            </TouchableHighlight>
                    </View>

                    <View style={{alignItems:'center'}}>
                        <TouchableHighlight style={{with:10,height:20, marginTop:20}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Recupera')}
                            >
                                <Text style={{backgroundColor:'white',fontFamily:'NunitoSans-Regular',fontSize:16 }}> 
                                
                                
                                Ingresa rápidamente usando</Text>
                            </TouchableHighlight>
                    </View>

                    <View style={{alignItems:'center'}}>
                    <View style={{flexDirection:'row', marginTop:20,}}>
                        <TouchableHighlight style={{marginRight:20}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Recupera')}
                            >
                                <Icon name="facebook-with-circle" size={50} color="#3975EA" />
                               
                            </TouchableHighlight>

                            <TouchableHighlight style={{marginRight:20}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Recupera')}
                            >


                        <Image style={{marginLeft:0, marginTop:10,}} source={require('../../assets/img/icono_google.png')} />

                                {/* <Icon2 name="google" size={50} color="#3975EA" /> */}
                               
                            </TouchableHighlight>

                            <TouchableHighlight style={{ backgroundColor:'black',height:50, width:50, borderRadius: 64}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Recupera')}
                            >
                                <Icon2 style={{marginTop:'20%',marginLeft:'30%'}} name="apple" size={25} color="white" />
                               
                            </TouchableHighlight>


                           
                           
                            
                            
                    </View>
                    </View>


                </View>
                
            </ScrollView>

            </SafeAreaView>
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