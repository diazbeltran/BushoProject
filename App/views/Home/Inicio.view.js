import React, { Component,} from 'react';
import {Dimensions ,  View, Text, StyleSheet,Image,TouchableHighlight,ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { CustomPagination } from './CustomPagination.js';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Svg, { Path, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');


import { SimpleCarousel } from 'react-native-simple-banner-carousel';


const { screen } = Dimensions.get('screen');
const datax = [
  {
      title: 'Hokkaido',
      source : require('../../assets/img/inicio_1.png'),
    },
    {
      title: 'Hokkaido',
      source : require('../../assets/img/inicio_2.png'),
    },  
  {
    title: 'Hokkaido',
    source : require('../../assets/img/inicio_3.png'),
  },
  {
    title: 'Tokyo',
   source: require('../../assets/img/inicio_2.png'),
  },
  
];

export default class Home extends Component {

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
            a1 : Dimensions.get('window'),
            a2 : Dimensions.get('screen'),
            orientation:this.isPortrait(),
        };

        
    }

    componentDidMount(){



      Dimensions.addEventListener('change', () => { 
      console.log("la weaita cambio", this.isPortrait());
      this.setState({orientation:this.isPortrait()})
      });

      
      console.log("window ");
console.log("window ", this.state.a1);
console.log("window2 ", this.state.a2);
console.log("screen ", screen);


    }

    isPortrait = () => { const dim = Dimensions.get('screen'); return dim.height >= dim.width; };
 
 
   




    render() {

        return (
            <View style={{ 
              flex:1 }}>
                
                <View style={{flexDirection:'row', marginTop:30,}}>

                <View style={{flexDirection:'row',flex:0.9}}>
                <Text style={{ marginLeft:20,fontFamily:'NunitoSans-Regular',fontSize:25}}>Hola,</Text><Text style={{ color:'black', fontFamily:'NunitoSans-Bold',fontSize:25}}> Fernando</Text>
                   </View>

                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
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


             
                

                <SafeAreaView >
                    

                <ScrollView >

                <View style={{ marginTop:23, marginLeft:20}}>
                    <Text style={{color:'black',fontFamily:'NunitoSans-Bold',fontSize:18}}>
                        ¿Qué quieres hacer hoy?
                    </Text>
                    
              
                </View>


                <View style={{alignItems:'center', marginTop:19, flexDirection:'row', }}>
                    <View style={{flex:1, marginLeft:20, }}>

                        {/* <ImageBackground
                        source={require('../../assets/img/boton_buscar.png')} 
                        >

                        </ImageBackground> */}
                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Buscar')}
                            >
                       
                     {/* <Image style={{marginTop:'10%',width:'80%', resizeMode: 'stretch'}} source={require('../../assets/img/fondo_publica.png')} /> */}
                     {(this.state.orientation==true?(
                       <View>
                         
                         <View style={{ width:'100%'}}>
                          <Image style={{ height:80, width:'100%',resizeMode:'stretch'  }} source={require('../../assets/img/boton_buscar_1.png')} />
                      
                       </View>

                       </View>
                      
                     ):(
                      <View>
                         <View style={{ width:'90%'}}>
                          <Image style={{ height:100, width:'100%',resizeMode:'stretch'  }} source={require('../../assets/img/boton_buscar_1.png')} />
                      {/* <SVGImg3  /> */}
                       </View>
                      {/* <SVGImg4 width="250" /> */}
                       </View>
                     )) }  

                    </TouchableHighlight> 
                    

                    </View>
                

                    <View style={{flex:1, justifyContent:'flex-end', marginRight:10, }}>
                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{}}
                        onPress={() => this.props.navigation.navigate('Publicar')}
                            >
                       
                       
                     {(this.state.orientation==true?(
                       <View>
                         
                       <View style={{marginLeft:10, width:'95%',}}>
                          <Image style={{ height:80, width:'100%',resizeMode:'stretch'  }} source={require('../../assets/img/boton_publicar_01.png')} />
                      
                       </View>
                       </View>
                      
                     ):(
                      <View style={{ width:'100%'}}>
                          <Image style={{ height:100, width:'100%',resizeMode:'stretch'  }} source={require('../../assets/img/boton_publicar_01.png')} />
                      {/* <SVGImg3  /> */}
                       </View>
                     )) }  

                    </TouchableHighlight> 

                    


                </View>
               

               
                                    
                    </View>


                
            
             
               
                    <Text style={{color:'black', marginTop:30,marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18 }}>Agregado recientemente</Text>
                    
               
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
                        
                        <ImageBackground   style={{ marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
                            <Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { backgroundColor: 'thistle' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_2.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_3.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'teal' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_4.png')} /> 
                        </View>
                      </SwiperFlatList>
              </View>   
                   
                
                   
                <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:100, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:100,  }}>/ Dia</Text>
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
                        
                        <ImageBackground   style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
<Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { backgroundColor: 'thistle' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_2.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_3.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'teal' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_4.png')} /> 
                        </View>
                      </SwiperFlatList>
              </View>   
                   
                
                   
                <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:100, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:100,  }}>/ Dia</Text>
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
                        
                        <ImageBackground   style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
<Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { backgroundColor: 'thistle' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_2.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_3.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'teal' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_4.png')} /> 
                        </View>
                      </SwiperFlatList>
              </View>   
                   
                
                   
                <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:100, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:100,  }}>/ Dia</Text>
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
                        
                        <ImageBackground   style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                        {this.state.s1== true ?( 
                        <View style={{marginLeft:'80%'}}>
<Image   style={{marginTop:10, }} source={require('../../assets/img/ss22.png')} /> 
                        </View>
                        
                        ):( <View></View> )}
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { backgroundColor: 'thistle' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_2.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_3.png')} /> 
                        </View>

                        <View style={[styles1.child, { backgroundColor: 'teal' }]}>
                        <Image style={{marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_4.png')} /> 
                        </View>
                      </SwiperFlatList>
              </View>   
                   
                
                   
                <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Oficina pedro de valdivia</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:100, fontWeight:'bold',color:'#4d4d4d'   }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:100,  }}>/ Dia</Text>
                </View>
                   
                   </View>    
             
                
            </ScrollView>

</SafeAreaView>
                


               

          </View>
        );
    }



}

const styles1 = StyleSheet.create({
  container:  { borderRadius:20, marginTop:20, width:width-40, backgroundColor: 'white', alignContent:'center', marginLeft:20 },
  child: { width:width-40,  height:height/3,  },
  
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