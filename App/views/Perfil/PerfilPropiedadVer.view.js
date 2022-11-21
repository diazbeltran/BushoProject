import React, { Component } from 'react';
import {Dimensions, View, Text,  StyleSheet,Image, TouchableHighlight, ImageBackground,SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native';

import { CustomPagination } from './CustomPagination.js';
import Icon2 from 'react-native-vector-icons/Ionicons';

import Icon30 from 'react-native-vector-icons/FontAwesome';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Svg, { Path, Rect } from 'react-native-svg';
const { width, height } = Dimensions.get('window');



export default class PerfilPropiedadVer extends Component {

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
            <SafeAreaView >
                    

                <ScrollView >
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
                    
                <View style={{width:'65%'}}>                    
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:20, color:'black', }}>Casa Principal</Text>

                
                </View>

               
                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:25}}
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
                
            <View style={{  flex:1, backgroundColor: 'white' , marginTop:'5%'}} >
                     
               
                
                    
                    
                
                    <View style={{marginLeft:20, borderWidth:1,borderColor:'#DEDEDE',  borderRadius:64, width:'90%', flexDirection:'row'}}> 
                    <Icon30 style={{marginTop:10, marginLeft:10}} name="address-card-o" size={20} color="#0B121F" />
                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:15,paddingTop:10, paddingBottom:10,marginLeft:10,color:'#2C2C2C',}}>3 espacios publicados</Text>
                    </View>
                
                    
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
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,  }}> / Día</Text>
                </View>
                    
                    
    
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
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,  }}> / Día</Text>
                </View>
    
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
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:100,  }}> / Día</Text>
                </View>
     


                    

                
            </View>
           

               

          </View>
          </ScrollView>

                    </SafeAreaView>
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