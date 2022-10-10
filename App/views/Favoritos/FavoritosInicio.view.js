import React, { Component } from 'react';
import { Dimensions,View, Text, StyleSheet,Image, Modal, TouchableHighlight,SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { CustomPagination } from '../Home/CustomPagination.js';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
//import Svg, { Path, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');



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
              <View style={{flexDirection:'row', marginTop:30,marginBottom:19, marginLeft:20,}}>

                <View style={{flex:0.9}}>
                <Text style={{ marginLeft:0,color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}> Mis favoritos</Text>
                {/* <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:10, color:'black', fontWeight:'bold' }}>Mis favoritos</Text> */}
                </View>

            

                 

                </View>
                
            <View style={{  flex:1, borderTopWidth:1,borderColor:'#dfdede',  backgroundColor: 'white' , marginTop:'0%'}} >
                     
               
                
                    
            <SafeAreaView >
                    

                <ScrollView >

               
                <View>
                 <View style={styles1.container}>
                      <SwiperFlatList showPagination
                      PaginationComponent={CustomPagination} >
                        
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View>   
                   
                
                   
                {/* <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text> */}
                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:10, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:10,  }}>/ Dia</Text>
                </View>
                   
                   </View>     

                    
                   <View>
                 <View style={styles1.container}>
                      <SwiperFlatList showPagination
                      PaginationComponent={CustomPagination} >
                        
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View>   
                   
                
                   
                {/* <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text> */}
                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:10, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:10,  }}>/ Dia</Text>
                </View>
                   
                   </View>   
                
                

                   <View>
                 <View style={styles1.container}>
                      <SwiperFlatList showPagination
                      PaginationComponent={CustomPagination} >
                        
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View>   
                   
                
                   
                {/* <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text> */}
                <TouchableHighlight  underlayColor='white'
                                title="Ingresar"
                                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                                >
                                    <View style={{width:'90%',flexDirection:'row', }} > 
                                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:18,marginTop:'3%',marginLeft:20, color:'#4F4F4F', }}>Oficina pedro de valdivia</Text>
                                    </View>   
                                </TouchableHighlight> 
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:10, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:10,  }}>/ Dia</Text>
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