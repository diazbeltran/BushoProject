import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';




import Icon2 from 'react-native-vector-icons/Ionicons';


import Svg, { Path, Rect } from 'react-native-svg';





export default class Reseña extends Component {

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
                
                <View style={{flexDirection:'row', marginTop:20,}}>

                <TouchableHighlight style={{marginLeft:10, marginTop:5}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>


                <View style={{width:'65%'}}>
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'#000000', fontWeight:'bold'}}>Disponibilidad</Text>
                </View>

                
               
                
      
               

                </View>

                <SafeAreaView >
                    

                <ScrollView >
                    
                    <View style={{alignItems:'center', marginTop:33, marginBottom:100}}>
                            
                            <View style={{width:'90%',marginTop:0, flexDirection:'column'}}>
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Selecciona la fecha y el horario</Text>
                            <Image style={{marginLeft:10, marginTop:21,height:250, width:'90%'}} source={require('../../assets/img/dispo_horario_2.png')} />
                            
                            </View>


                            <View style={{flexDirection:'row'}}>
                              <View style={{flex:0.8, flexDirection:'column', marginLeft:40}}>
                                <Text>
                                Hora de llegada
                                </Text>

                            <View style={{ marginTop:5, }}>
                            <View style={{flexDirection:'row', width:'90%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:0}} > 
       
       <View style={{marginTop:'7%', marginLeft:'10%'}}>
       <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="#717171"/>
            </Svg>
       </View>
           

                            <TextInput

                            style={{ marginLeft:11, fontFamily:'NunitoSans-Regular',fontSize:16}}
                            placeholder='10:00 am' >

                            </TextInput>
                            </View>        
                            </View>
                              </View>

                              <View style={{flex:1,flexDirection:'column'}}>
                                <Text>
                                Hora de salida
                                </Text>

                                <View style={{ marginTop:5, width:'90%' }}>
                            <View style={{flexDirection:'row', width:'90%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:0}} > 
                            <View style={{marginTop:'7%', marginLeft:'10%'}}>
       <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="#717171"/>
            </Svg>
       </View>
                            <TextInput

                            style={{ marginLeft:11, fontFamily:'NunitoSans-Regular',fontSize:16}}
                            placeholder='18:30 pm ' >

                            </TextInput>
                            </View>        
                            </View>
                              </View>
                            </View>


                          


                            <View style={{alignItems:'center', marginTop:20, width:'88%' }}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#00D6B9', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('BuscaFinal')}
                            >
                                <Text  maxFontSizeMultiplier={1} style={{color:'white',marginTop:'1%', fontFamily:'NunitoSans-Bold',fontSize:16}} >Reservar</Text>
                            </TouchableHighlight>

                           
                                    
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