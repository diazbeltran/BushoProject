import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView , ImageBackground } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';



import Icon28 from 'react-native-vector-icons/Feather';






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
                <View style={{   backgroundColor: 'white', flexDirection:'row' , }} >
            
                <TouchableHighlight style={{marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('Perfil')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight>
                        <View style={{flexDirection:'row', marginTop:20,}}>
                    
                <View style={{width:'67%'}}>                    
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'black', fontWeight:'bold'}}>Editar</Text>
                </View>

                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
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
                
                <View style={{flexDirection:'row', marginTop:30, marginLeft:20}}>

                <ImageBackground style={{ borderRadius:10, height:132,width:132, resizeMode: 'center'}} source={require('../../assets/img/perfil.jpeg')}
                 imageStyle={{ borderRadius: 65}}>
                     <View style={{height:30,width:30,borderRadius:30, backgroundColor:'white', marginTop:100, marginLeft:100}}>
                     <Icon28 style={{marginTop:4, marginLeft:4}}  name="camera" size={20} color="black" />
                     </View>
                   
                </ImageBackground>

                {/* <Image style={{ borderRadius:65, height:132,width:132, resizeMode: 'center'}} source={require('../../assets/img/perfil.jpeg')} />                 */}
                
                
                </View>

                <View style={{  flex:1, backgroundColor: 'white' , marginTop:'3%'}} >
            
             
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{marginLeft:20, flexDirection:'column'}}>
                    <View style={{marginLeft:0, flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16}}>
                            Informacion personal
                        </Text>
                        {/* <TouchableHighlight 
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('Perfil')}
                        >
                            <Icon22 style={{ paddingLeft:10, flex:0.2}}  name="edit" size={20} color="#0B121F" />
                        </TouchableHighlight> */}
                        
                        </View>
                    </View>
                   
                    <View style={{marginLeft:20, paddingTop:10, paddingBottom:10,paddingRight:10 ,paddingLeft:20, marginTop:20 ,marginRight:20, borderWidth:1, borderRadius:10, borderColor:'#D4D4D4'}}>
                            <Text style={{lineHeight: 27, fontFamily:'NunitoSans-Regular',fontSize:16}} >En mi cabeza se pasea,
                            como en su propio aposento,
                            un bello gato fuerte, suave y encantador.
                            Cuando maúlla, apenas se le oye,
                            de tan tierno y discreto que es su timbre;
                            pero su voz, ya se apacigüe o gruña,
                            es siempre rica y profunda.</Text>

                            <Text style={{lineHeight: 27, fontFamily:'NunitoSans-Regular',fontSize:16}}>
                            Ahí está su atractivo y su secreto.
                            Esta voz, que gotea y se filtra
                            en mi interior más tenebroso,
                            me invade como un verso cadencioso
                            y me refocila como un bebedizo.

                            </Text>


                    </View>

                   
                    <View style={{alignItems:'center', marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilInformacion')}
                            >
                                <Text style={{color:'white',marginTop:'1%', fontFamily:'NunitoSans-Regular',fontSize:16}} >Guardar</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>

                    <View style={{alignItems:'center', marginTop:10, }}>
                    <View style={{ flexDirection:'row',
                    marginTop:10, width:'90%',borderRadius:64 ,height:40,borderWidth:1,borderColor:'#61D3BA',paddingLeft:20,marginBottom:40}} > 
                       
                        <TouchableHighlight underlayColor='white' style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                   alignItems:'center'}}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Perfil')}
                            >
                                <Text style={{marginTop:'1%', fontFamily:'NunitoSans-Regular',fontSize:16, color:'#61D3BA' }} underlayColor={'red'}>Cancelar</Text>
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