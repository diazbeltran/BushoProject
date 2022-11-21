import React, { Component } from 'react';
import { Dimensions,View, Text, StyleSheet,Image, Modal, TouchableHighlight,SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { CustomPagination } from '../Home/CustomPagination.js';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Svg, { Path, Rect } from 'react-native-svg';
import Icon2 from 'react-native-vector-icons/Ionicons';
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
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart" size={25} color="red" />
                      </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart-outline" size={25} color="white" />
                      </View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s11);
                          this.setState({s11:!this.state.s11})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        {this.state.s11== true ?( 
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart" size={25} color="red" />
                      </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart-outline" size={25} color="white" />
                      </View> )}
                       

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
                        
                        {this.state.s11== true ?( 
                       <View style={{marginLeft:'90%', marginTop:'5%'}}>
                       <Icon2 name="heart" size={25} color="red" />
                     </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart-outline" size={25} color="white" />
                      </View> )}
                       

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
                        
                        {this.state.s11== true ?( 
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M10.08 1.55881C12.4444 -0.564061 16.0983 -0.4936 18.3762 1.78831C20.6531 4.07124 20.7316 7.707 18.6138 10.0785L10.078 18.6264L1.5442 10.0785C-0.573646 7.707 -0.494126 4.0652 1.78175 1.78831C4.06165 -0.49058 7.70849 -0.567081 10.08 1.55881ZM16.9509 3.21061C15.441 1.69873 13.0051 1.63733 11.4248 3.0566L10.081 4.26249L8.7362 3.05761C7.15084 1.63632 4.71995 1.69873 3.20606 3.21262C1.70626 4.71243 1.63076 7.11312 3.0128 8.69949L10.079 15.7767L17.1452 8.70049C18.5282 7.11312 18.4527 4.71545 16.9509 3.21061Z" fill="white"/>
                        </Svg>

                           
                        </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart-outline" size={25} color="white" />
                      </View> )}
                       

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
                          console.log(this.state.s2);
                          this.setState({s2:!this.state.s2})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        {this.state.s2== true ?( 
                       <View style={{marginLeft:'90%', marginTop:'5%'}}>
                       <Icon2 name="heart" size={25} color="red" />
                     </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart-outline" size={25} color="white" />
                      </View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s2);
                          this.setState({s2:!this.state.s2})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s2== true ?( 
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart" size={25} color="red" />
                      </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart-outline" size={25} color="white" />
                      </View> )}
                       

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
                        
                        {this.state.s2== true ?( 
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart" size={25} color="red" />
                      </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                          <Icon2 name="heart-outline" size={25} color="white" />
                        </View> )}
                       

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
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart" size={25} color="red" />
                      </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                          <Icon2 name="heart-outline" size={25} color="white" />
                        </View> )}
                       

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
                          console.log(this.state.s3);
                          this.setState({s3:!this.state.s3})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s3== true ?( 
                       <View style={{marginLeft:'90%', marginTop:'5%'}}>
                       <Icon2 name="heart" size={25} color="red" />
                     </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                          <Icon2 name="heart-outline" size={25} color="white" />
                        </View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s3);
                          this.setState({s3:!this.state.s3})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        {this.state.s3== true ?( 
                         <View style={{marginLeft:'90%', marginTop:'5%'}}>
                         <Icon2 name="heart" size={25} color="red" />
                       </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                          <Icon2 name="heart-outline" size={25} color="white" />
                        </View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:20, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s3);
                          this.setState({s3:!this.state.s3})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:20}}   style={{ marginTop:0,width:width-40, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        {this.state.s3== true ?( 
                        <View style={{marginLeft:'90%', marginTop:'5%'}}>
                        <Icon2 name="heart" size={25} color="red" />
                      </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                          <Icon2 name="heart-outline" size={25} color="white" />
                        </View> )}
                       

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
                         <View style={{marginLeft:'90%', marginTop:'5%'}}>
                         <Icon2 name="heart" size={25} color="red" />
                       </View>
                        
                        ):(   <View style={{marginLeft:'90%', marginTop:'5%'}}>
                          <Icon2 name="heart-outline" size={25} color="white" />
                        </View> )}
                       

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