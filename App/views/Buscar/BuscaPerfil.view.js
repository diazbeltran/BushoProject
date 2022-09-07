import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,Image, TouchableHighlight,SafeAreaView, ScrollView  } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';


import Icon22 from 'react-native-vector-icons/AntDesign';


const { width, height } = Dimensions.get('window');



export default class BuscarPerfil extends Component {

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
            width : width,
            height: height
        };

        
    }


 




    render() {

        return (
            <View style={{ 
              flex:1 }}>
               <View style={{   backgroundColor: 'white', flexDirection:'row' , }} >
            
            <TouchableHighlight 
            underlayColor={'white'}
            style={{marginLeft:10, marginTop:25}}
                title="Press me"
                onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                    >
                         <Icon2 name="arrow-back" size={25} color="#383838" />
                    </TouchableHighlight>
                    <View style={{flexDirection:'row', marginTop:20,}}>
                
            <View style={{width:'67%'}}>                    
            <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'black', fontWeight:'bold'}}></Text>
            </View>

            <TouchableHighlight  underlayColor='white'
                    title="Ingresar"
                    style={{marginLeft:20}}
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
                
            <View style={{  flex:1, backgroundColor: 'white' , marginTop:'0%'}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                
                
                    <View style={{marginTop:'0%',  flexDirection:'column'}}>
                    
                    
                    


               
                

                    <View style={{marginLeft:20, flexDirection:'row', borderTopWidth:1, borderBottomWidth:1, borderColor:'#D3EEE8', width:'90%', marginBottom:0}}>
                                <View style={{flex:0.5, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/img_notificacion_2.png')} />
                                </View> 

                                
                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        <Text style={{marginTop:20,color:'#A6A6A6'}}><Image style={{marginLeft:0, marginTop:0, }} source={require('../../assets/img/Star_1.png')} /> 5.5</Text>
                                        <Text style={{color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Paula Carrera</Text>
                                        <Text style={{fontFamily:'NunitoSans-Regular', color:'black', fontSize:16, marginBottom:20}}>Usuario desde el 2022</Text>

                                        

                                        </View>
                                </View>

                                <View style={{flex:0.3}}>

                                
                                
                                        

                                        
                                </View>

                               


                            </View>


                            <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Acerca de Paula</Text>
                <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                
                
                   

                <View style={{ borderColor:'#D7D7D7'}}>
               <View style={{marginLeft:20}}>
               
                                 



                 



                    <View style={{marginTop:30, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8'}}>
                    <View style={{marginTop:0, flexDirection:'row'}}>
                        <TouchableHighlight style={{}}
                        underlayColor='white'
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('BuscarReseña')}  
                        //onPress={() => this.props.navigation.goBack()}  
                        >
                        <View style={{marginTop:25, flexDirection:'row'}}>
                        <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reseñas </Text>
                        <Text style={{marginLeft:20,color:'#A6A6A6', marginTop:2}}><Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/Star_1.png')} />5.5</Text>
                        <Icon22 style={{ marginLeft:'50%', marginTop:2}}  name="right" size={16} color="#0B121F" />
                        </View>

                        </TouchableHighlight>


                   
                   
                    </View>

                    
                    </View>






                    <View style={{marginTop:30, borderBottomWidth:1, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8', marginBottom:50}}>
                    <View style={{marginTop:0, flexDirection:'row'}}>

                    <TouchableHighlight style={{}}
                        underlayColor='white'
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('BuscarRegla')}  
                        //onPress={() => this.props.navigation.goBack()}  
                        >
                        <View style={{marginTop:25, flexDirection:'row'}}>
                        <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reglas de este espacio </Text>
                        
                        {/* <Icon22 style={{ marginLeft:'50%', marginTop:2}}  name="right" size={16} color="#0B121F" /> */}
                        <Icon22 style={{ marginLeft:'33%', marginTop:2}}  name="right" size={16} color="#0B121F" />
                        </View>

                        </TouchableHighlight>


                    {/* <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reglas de este espacio </Text> */}
                    
                    </View>

                    <View style={{flexDirection:'row', marginBottom:20}}>
                    

                    

                    </View>
                   
                    

                    
                    
                    </View>
                   
               </View>
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