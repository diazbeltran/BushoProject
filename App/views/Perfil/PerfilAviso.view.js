import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';

import { SimpleCarousel } from 'react-native-simple-banner-carousel';







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
                  <View style={{flexDirection:'row', marginTop:30,marginBottom:20}}>
<TouchableHighlight 
                        underlayColor='white'
                        style={{marginLeft:20, marginTop:5}}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Perfil')}  >

                        <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>
                <View style={{flex:0.9}}>
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:10, color:'black', fontWeight:'bold' }}>Mis avisos</Text>
                </View>

                

                 
                </View>

               
                
            <View style={{  flex:1, borderTopWidth:1,borderColor:'#dfdede',  backgroundColor: 'white' , marginTop:'1%'}} >
                     
               
                
                    
            <SafeAreaView >
                    

                <ScrollView >

               
                    
                <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                    <View style={{ flex: 1,marginTop:'6%', backgroundColor: 'white' , flexDirection: 'row'}}>
                    <SimpleCarousel 
                                                data={[{
                                                    title: 'Hokkaido',
                                                    source : require('../../assets/img/inicio_1.png'),
                                                    },
                                                    {
                                                    title: 'Tokyo',
                                                    source: require('../../assets/img/inicio_1.png'),
                                                    },
                                                    
                                                ]}
                                                renderItem={(props, i, width) => {
                                                    return (
                                                            <Image style={{ borderRadius:10, width: 342, height: 242 }} id={`${props.title}_${i}`} source={props.source} />

                                                            //   <Banner styles={{height:300}} id={`${props.title}_${i}`} source={props.source} width={width}  onPress={(id) => console.log(`${id} was tapped.`)} />
                                                            )
                                                    }} 
                                />
                            {/* <Image style={{borderRadius:10, width:'90%' , resizeMode: 'stretch'}} source={require('../../assets/img/inicio_1.png')} /> */}
                    </View>
                   
                </View>
                   
                <Text style={{marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:18, color:'black' }}>Oficina pedro de valdivia</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#717172'  }}>Pedro de Valdivia, Concepción</Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,color:'black'  }}>$5.500</Text>
                <Text style={{marginTop:'2%',marginLeft:0, fontFamily:'NunitoSans-Blod',fontSize:16, marginBottom:0,  }}> / Día</Text>
                </View>
                
                

                <View style={{  flex: 1, backgroundColor: 'white' ,alignItems:'center'}} >
                    <View style={{ flex: 1,marginTop:'6%', backgroundColor: 'white' , flexDirection: 'row'}}>
                    
                    <SimpleCarousel 
                                                data={[{
                                                    title: 'Hokkaido',
                                                    source : require('../../assets/img/inicio_2.png'),
                                                    },
                                                    {
                                                    title: 'Tokyo',
                                                    source: require('../../assets/img/inicio_1.png'),
                                                    },
                                                    
                                                ]}
                                                renderItem={(props, i, width) => {
                                                    return (
                                                            <Image style={{ borderRadius:10, width: 342, height: 242 }} id={`${props.title}_${i}`} source={props.source} />

                                                            //   <Banner styles={{height:300}} id={`${props.title}_${i}`} source={props.source} width={width}  onPress={(id) => console.log(`${id} was tapped.`)} />
                                                            )
                                                    }} 
                                />
                    </View>
                   
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