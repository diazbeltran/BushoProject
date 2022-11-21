import React, { Component } from 'react';
import {Dimensions,TouchableOpacity, ImageBackground, View, Text, StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';

import { CustomPagination } from '../Home/CustomPagination.js';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { SimpleCarousel } from 'react-native-simple-banner-carousel';

import { SwiperFlatList } from 'react-native-swiper-flatlist';

const { width, height } = Dimensions.get('window');



export default class PerfilAviso extends Component {

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
                <Text style={{ marginLeft:0,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}>Mis avisos</Text>
                {/* <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'black', fontWeight:'bold'}}></Text> */}
                </View>
               

                


                </View>
               
                
            <View style={{  flex:1, borderTopWidth:1,borderColor:'#dfdede',  backgroundColor: 'white' , marginTop:'1%'}} >
                     
               
                
                    
            <SafeAreaView >
                    

                <ScrollView >

               
                    
                <View style={styles1.container}>
                      <SwiperFlatList showPagination
                      PaginationComponent={CustomPagination} >
                        
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s11);
                          this.setState({s11:!this.state.s11})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s11== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s12);
                          this.setState({s12:!this.state.s12})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s12== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s13);
                          this.setState({s13:!this.state.s13})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s13== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s14);
                          this.setState({s14:!this.state.s14})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        {this.state.s14== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View> 
                   
                <Text style={{marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black' }}>Oficina pedro de valdivia</Text>
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
                          console.log(this.state.s21);
                          this.setState({s21:!this.state.s21})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s21== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s22);
                          this.setState({s22:!this.state.s22})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s22== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s23);
                          this.setState({s23:!this.state.s23})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s23== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s24);
                          this.setState({s24:!this.state.s24})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        {this.state.s24== true ?( 
                        <View style={{marginLeft:'90%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View> 
                   
                <Text style={{marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black' }}>Quincho con piscina</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Concón, Región de Valparaíso</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$25.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:100,  }}> / Día</Text>
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