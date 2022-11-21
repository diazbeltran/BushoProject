import React, { Component } from 'react';
import { Dimensions,View, Text, TouchableOpacity,StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView  ,ImageBackground} from 'react-native';
import { CustomPagination } from './CustomPagination.js';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Svg, { Path, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

import Icon22 from 'react-native-vector-icons/Ionicons';







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
                        
                        <View style={styles1.container}>
                      <SwiperFlatList showPagination
                      PaginationComponent={CustomPagination} >
                        
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s2);
                          this.setState({s2:!this.state.s2})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                      
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s2);
                          this.setState({s1:!this.state.s2})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                       
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s2);
                          this.setState({s2:!this.state.s2})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                       
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s2);
                          this.setState({s1:!this.state.s2})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View>   

              
                            <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('PerfilPropiedadVer')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Casa Principal</Text>
                                    </View>   
                                </TouchableHighlight> 
                            
                           
                            <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                           
                           

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

const styles1 = StyleSheet.create({
    container:  { borderRadius:20, marginTop:20, width:width-40, backgroundColor: 'white', alignContent:'center', marginLeft:20,},
    child: { width:width-40,  height:height/3, borderRadius:20, marginRight:0  },
    
  });


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