import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';



import Svg, { Path,Rect } from 'react-native-svg';







export default class Notifica extends Component {

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
                
                <View style={{   backgroundColor: 'white', flexDirection:'row', marginTop:10 }} >
            
            {/* <TouchableHighlight  underlayColor='white' style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight> */}
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{marginLeft:20, width:'63%'}}> 
                <Text style={{ marginLeft:10,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}>Notificaciones</Text>                   
               
                
                </View>

                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:40}}
                        onPress={() => this.props.navigation.navigate('Mensajes')}
                            >
                       
                     {/* <Image style={{marginTop:0, }} source={require('../../assets/img/top_3.png')} /> */}
                     <Svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M3.741 6.40798L22.203 16.562C22.2814 16.6051 22.3468 16.6686 22.3923 16.7456C22.4378 16.8226 22.4618 16.9105 22.4618 17C22.4618 17.0895 22.4378 17.1773 22.3923 17.2544C22.3468 17.3314 22.2814 17.3948 22.203 17.438L3.741 27.592C3.66487 27.6339 3.57915 27.6552 3.49227 27.6538C3.4054 27.6525 3.32037 27.6285 3.24558 27.5843C3.17078 27.5401 3.1088 27.4772 3.06573 27.4017C3.02267 27.3262 3.00001 27.2409 3 27.154V6.84598C3.00001 6.7591 3.02267 6.67372 3.06573 6.59825C3.1088 6.52279 3.17078 6.45985 3.24558 6.41564C3.32037 6.37143 3.4054 6.34747 3.49227 6.34613C3.57915 6.34479 3.66487 6.36611 3.741 6.40798ZM5 18V24.617L18.85 17L5 9.38298V16H10V18H5Z" fill="#09121F"/>
                  <Rect x="12" y="1" width="12" height="12" rx="6" fill="#E46060" stroke="white" stroke-width="2"/>
                  </Svg>

                    </TouchableHighlight> 

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
                        onPress={() => this.props.navigation.navigate('Notificacion')}
                            >
                       
                     {/* <Image style={{marginLeft:20, marginTop:0, resizeMode:'contain'}} source={require('../../assets/img/top_4.png')} /> */}
                     <Svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M18 13C18 11.4087 17.3679 9.88258 16.2426 8.75736C15.1174 7.63214 13.5913 7 12 7C10.4087 7 8.88258 7.63214 7.75736 8.75736C6.63214 9.88258 6 11.4087 6 13V21H18V13ZM20 21.667L20.4 22.2C20.4557 22.2743 20.4896 22.3626 20.498 22.4551C20.5063 22.5476 20.4887 22.6406 20.4472 22.7236C20.4057 22.8067 20.3419 22.8765 20.2629 22.9253C20.1839 22.9741 20.0929 23 20 23H4C3.90714 23 3.81612 22.9741 3.73713 22.9253C3.65815 22.8765 3.59431 22.8067 3.55279 22.7236C3.51126 22.6406 3.49368 22.5476 3.50202 22.4551C3.51036 22.3626 3.54429 22.2743 3.6 22.2L4 21.667V13C4 10.8783 4.84286 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13V21.667ZM9.5 24H14.5C14.5 24.663 14.2366 25.2989 13.7678 25.7678C13.2989 26.2366 12.663 26.5 12 26.5C11.337 26.5 10.7011 26.2366 10.2322 25.7678C9.76339 25.2989 9.5 24.663 9.5 24Z" fill="#09121F"/>
                <Rect x="15" y="1" width="12" height="12" rx="6" fill="#E46060" stroke="white" stroke-width="2"/>
                </Svg>

                    </TouchableHighlight> 
                

                </View>
            </View>

                <SafeAreaView >
                    

                <ScrollView >
                    
                    <View style={{alignItems:'center', marginTop:19, marginBottom:200}}>

                    <View style={{flexDirection:'row', borderWidth:1, borderColor:'#D3EEE8', width:'100%', }}>
                                <View style={{flex:0.4, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/img_notificacion_1.png')} />
                                </View> 


                                <View style={{flex:1, paddingRight:10}}>

                                        <View style={{flexDirection:'column'}}>
                                        <Text style={{marginTop:20,color:'#A6A6A6'}}>Hace 31 minuto</Text>
                                        <Text style={{color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Maria Gallegos</Text>
                                        <Text style={{fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Quiere arrendar tu espacio    
                                                <Text style={{fontFamily:'NunitoSans-Bold', color:'#424242', fontSize:16}}> “Oficina en
                                                    pedro de valdivia”.</Text> </Text>

                                                    <Text style={{fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>
                                            

                                            Para el día 21-01-2021</Text>



                                        <View style={{width:'100%', flexDirection:'row'}}>
                                       
                                    <TouchableHighlight 
                                        underlayColor={'white'}
                                        style={{flex:0.4,marginTop:23,marginLeft:0, with:10, height:40, marginBottom:25, width:'100%',
                                        paddingTop:5,paddingBottom:5, paddingLeft:0,paddingRight:0, borderRadius:64,
                                        backgroundColor:'#00D6B9', alignItems:'center' , borderWidth:1,borderColor:'#00D6B9'}}
                                        title="Ingresar"
                                        onPress={() =>
                                            { 
                                                console.log("aqui  voy perras!!! ");
                                                this.props.navigation.navigate('Notificacion1')
                                        }
                                            }
                                        >
                                        <Text maxFontSizeMultiplier={1} style={{color:'white',marginTop:'1%',fontFamily:'NunitoSans-Bold',fontSize:16 }} underlayColor={'white'}>Confirmar</Text>
                                        </TouchableHighlight>

                                        <TouchableHighlight 
                                        underlayColor={'white'}
                                        style={{flex:0.4,marginTop:23,marginLeft:11, with:10, height:40, marginBottom:25, width:'100%',
                                        paddingTop:5,paddingBottom:5, paddingLeft:0,paddingRight:0, borderRadius:64,
                                        backgroundColor:'white', alignItems:'center' , borderWidth:1,borderColor:'#00D6B9'}}
                                        title="Ingresar"
                                        onPress={() => this.props.navigation.navigate('App')}
                                        >
                                        <Text maxFontSizeMultiplier={1} style={{color:'#00D6B9',marginTop:'1%',fontFamily:'NunitoSans-Bold',fontSize:16 }} underlayColor={'white'}>Rechazar</Text>
                                        </TouchableHighlight>
                                        
                                        </View>

                                        </View>
                                </View>

                               


                            </View>


                            <View style={{flexDirection:'row', borderWidth:1, borderColor:'#D3EEE8', width:'100%' }}>
                                <View style={{flex:0.4, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/Group.png')} />
                                </View> 


                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        <Text style={{marginTop:20,color:'#A6A6A6'}}>Hace 1 dia</Text>
                                        <Text style={{color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Equipo de Busho</Text>
                                        <Text style={{fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16, marginTop:15}}>Tu propiedad <Text style={{fontFamily:'NunitoSans-Bold', color:'#424242', fontSize:16}}> "Casa 1"</Text> ha sido revisada y aprobada por nuestro equipo. Ya puedes comenzar a anunciar.</Text>

                                        <View style={{width:'55%', marginTop:20}}>
                                        <TouchableHighlight 
                                        underlayColor={'white'}
                                        style={{with:10, height:40, marginBottom:25, width:'100%',
                                        paddingTop:5,paddingBottom:5, paddingLeft:0,paddingRight:0, borderRadius:64,
                                        backgroundColor:'#00D6B9', alignItems:'center' }}
                                        title="Ingresar"
                                        onPress={() => this.props.navigation.navigate('App')}
                                        >
                                        <Text maxFontSizeMultiplier={1} style={{color:'white',marginTop:'1%',fontFamily:'NunitoSans-Bold',fontSize:16 }} underlayColor={'white'}>Enviar Mensaje</Text>
                                        </TouchableHighlight>
                                        </View>

                                        </View>
                                </View>

                               


                            </View>



                            <View style={{flexDirection:'row', borderWidth:1, borderColor:'#D3EEE8', width:'100%' }}>
                                <View style={{flex:0.4, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/Group.png')} />
                                </View> 


                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        <Text style={{marginTop:20,color:'#A6A6A6'}}>Hace 1 dia</Text>
                                        <Text style={{color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Equipo de Busho</Text>
                                        <Text style={{fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16, marginTop:15}}>Tu propiedad <Text style={{fontFamily:'NunitoSans-Bold', color:'#424242', fontSize:16}}> "Casa 2"</Text> ha sido revisada y aprobada por nuestro equipo. Ya puedes comenzar a anunciar.</Text>

                                        <View style={{width:'55%', marginTop:20}}>
                                        <TouchableHighlight 
                                        underlayColor={'white'}
                                        style={{with:10, height:40, marginBottom:25, width:'100%',
                                        paddingTop:5,paddingBottom:5, paddingLeft:0,paddingRight:0, borderRadius:64,
                                        backgroundColor:'#00D6B9', alignItems:'center' }}
                                        title="Ingresar"
                                        onPress={() => this.props.navigation.navigate('App')}
                                        >
                                        <Text maxFontSizeMultiplier={1} style={{color:'white',marginTop:'1%',fontFamily:'NunitoSans-Bold',fontSize:16 }} underlayColor={'white'}>Enviar Mensaje</Text>
                                        </TouchableHighlight>
                                        </View>

                                        </View>
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