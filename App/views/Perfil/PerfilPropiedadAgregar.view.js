import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image,TouchableHighlight, SafeAreaView, ScrollView , ImageBackground } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';


import Svg, { Path } from 'react-native-svg';
import Icon25 from 'react-native-vector-icons/Feather';

 



export default class PerfilPropiedadAgregar extends Component {

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
                    onPress={() => this.props.navigation.navigate('PerfilPropiedad')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>
                        <View style={{flexDirection:'row',  marginTop:20,}}>
                    
                <View style={{width:'80%'}}>                    
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:10, color:'black', fontWeight:'bold'}}>Nueva propiedad</Text>
                </View>

               
                

                </View>
            </View>
                
            <View style={{   backgroundColor: 'white' , marginTop:'5%'}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{marginLeft:20, flexDirection:'column'}}>
                    
                    <View style={{marginLeft:0, flexDirection:'row'}}>
                    

            {/* <Image style={{marginTop:0,height:48,width:48, marginLeft:0}} source={require('../../assets/img/circulo_3.png')} /> */}
                

         

{/* <Logo1 width={120} height={40} /> */}
{/* <SvgXml width="200" height="200" xml={Logo1} /> */}

<Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M20.1839 31V28.88H23.3639V19.82L20.9039 21.3L19.9039 19.42L24.1039 16.9H25.9239V28.88H28.9039V31H20.1839Z" fill="#1EB091"/>
<Path opacity="0.6" d="M48 24C48 19.2533 46.5924 14.6131 43.9553 10.6663C41.3181 6.71954 37.5698 3.6434 33.1844 1.8269C28.799 0.01039 23.9734 -0.464891 19.3178 0.461154C14.6623 1.3872 10.3859 3.67298 7.02944 7.02944C3.67298 10.3859 1.3872 14.6623 0.461153 19.3178C-0.464893 23.9734 0.0103866 28.799 1.82689 33.1844C3.64339 37.5698 6.71953 41.3181 10.6663 43.9553C14.6131 46.5924 19.2532 48 24 48L24 44.1436C20.016 44.1436 16.1214 42.9622 12.8088 40.7488C9.49624 38.5354 6.91439 35.3894 5.38977 31.7086C3.86515 28.0279 3.46624 23.9777 4.24349 20.0702C5.02073 16.1627 6.93922 12.5735 9.75635 9.75635C12.5735 6.93922 16.1627 5.02073 20.0702 4.24349C23.9777 3.46625 28.0279 3.86516 31.7086 5.38977C35.3894 6.91439 38.5354 9.49624 40.7488 12.8088C42.9622 16.1214 44.1436 20.016 44.1436 24L48 24Z" fill="#1EB091"/>
<Path d="M24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52857 30.3652 1.23935e-06 24 0V3.85643C29.3424 3.85643 34.466 5.9787 38.2437 9.75635C42.0213 13.534 44.1436 18.6576 44.1436 24C44.1436 29.3424 42.0213 34.466 38.2437 38.2437C34.466 42.0213 29.3424 44.1436 24 44.1436L24 48Z" fill="#1EB091"/>
</Svg>



                            <View style={{marginLeft:10, flexDirection:'column'}}>
                            <Text style={{ fontFamily:'NunitoSans-Blod',fontSize:20, marginLeft:0, color:'black', fontWeight:'bold'}}>Datos de ubicación</Text>
                                
                                <Text style={{fontSize:15, }}>                           
                                Paso 1 de 2
                                </Text>
                            </View>
                        
                    </View>
                    
                    <View style={{marginTop:25, flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                            Nombre de la propiedad
                        </Text>
                    </View>

                   

                    <View style={{ marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'95%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    
                    <TextInput
                    
                    style={{ marginLeft:0,fontFamily:'NunitoSans-Regular',fontSize:16}}
                    placeholder='Casa principal' >

                        </TextInput>
                    </View>        
                    </View> 


                    <View style={{marginTop:12, flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                    Ubicación
                        </Text>
                    </View>

                    <View style={{ marginTop:5,}}>
                    <View style={{flexDirection:'row', width:'95%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20}} > 
                    <Icon25 style={{marginTop:10}} name="map-pin" size={25} color="#646464" />
                    <TextInput
                    
                    style={{fontFamily:'NunitoSans-Regular',fontSize:16,marginLeft:20}}
                    placeholder='Colo colo 534, Concepcion' >

                        </TextInput>
                    </View>        
                    </View>

                    <ImageBackground 
                    
                    source={require('../../assets/img/mapa_1.png')} resizeMode={'cover'}
                    style={{marginTop:20, height:175, marginRight:20,resizeMode: 'contain', borderBottomWidth:1}}
                >
                    
                <Image style={{marginTop:'20%', marginLeft:'40%'}} source={require('../../assets/img/lupa_1.png')} clear/>

            </ImageBackground>


                    {/* <View style={{marginTop:20, borderBottomWidth:0.3, backgroundColor:'white', alignItems:'center', paddingBottom:20}}>

                   


                    <Image style={{ marginRight:10,resizeMode: 'contain'}} source={require('../../assets/img/mapa_1.png')} />
                    </View> */}
                    
                            
                    


                   

                   
                    
                    
                    
                      
                    <View style={{ marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'95%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('PerfilPropiedadAgregarDocto')}
                            >
                                <Text style={{color:'white',marginTop:'1%', fontWeight:'bold' }} >Siguiente</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>


                    <View style={{flexDirection:'row',
                    marginTop:10, width:'95%',borderRadius:64 ,height:40,borderWidth:1,borderColor:'#61D3BA',paddingLeft:20,  marginBottom:100}} > 
                    
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