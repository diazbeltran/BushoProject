import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,Image, TouchableHighlight,SafeAreaView, ScrollView  } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';


import Svg, { Path, Rect } from 'react-native-svg';
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
                                        <Text style={{marginTop:20,color:'#A6A6A6'}}> <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#545454"/>
                                    </Svg> 5.5</Text>
                                        <Text style={{color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Paula Carrera</Text>
                                        <Text style={{fontFamily:'NunitoSans-Regular', color:'black', fontSize:16, marginBottom:20}}>Usuario desde el 2022</Text>

                                        

                                        </View>
                                </View>

                                <View style={{flex:0.3}}>

                                
                                
                                        

                                        
                                </View>

                               


                            </View>


                            <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Acerca de Paula</Text>
                            <View style={{width:'95%'}}>
                            <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172'  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                
                            </View>
               
                
                   

                <View style={{ borderColor:'#D7D7D7'}}>
               <View style={{marginLeft:20}}>
               
                                 



                 



               <View style={{marginTop:30, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8', }}>
                   
                   <TouchableHighlight style={{}}
                   underlayColor='white'
                   title="Press me"
                   onPress={() => this.props.navigation.navigate('BuscarReseña')}  
                   //onPress={() => this.props.navigation.goBack()}  
                   >
                   <View style={{marginTop:25, flexDirection:'row', flex:1,}}>
                     <View style={{flex:.9, flexDirection:'row',  }}>
                     <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reseñas </Text>
                   <Text style={{marginLeft:20,color:'#A6A6A6', marginTop:2}}>
                       <View>
                       <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#545454"/>
</Svg>

                       </View>
                       5.5</Text>
                     </View>
                  <View style={{ flex:.2,  flexDirection:'row',}}>
                  <Icon22 style={{  marginTop:2}}  name="right" size={16} color="#0B121F" />
                  </View>
                   
                   </View>

                   </TouchableHighlight>


              
              
               

               
               </View>


               <View style={{height:'27%', marginTop:30, borderBottomWidth:1, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8', marginBottom:100, }}>
               

               <TouchableHighlight style={{marginBottom:20 }}
                   underlayColor='white'
                   title="Press me"
                   onPress={() => this.props.navigation.navigate('BuscarRegla')}  
                   //onPress={() => this.props.navigation.goBack()}  
                   >
                   <View style={{marginTop:25, flexDirection:'row' }}>
                     <View style={{flex:.9}}>
                     <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reglas de este espacio </Text>
                     </View>
                   

                     <View style={{flex:.2}}>
                       <Icon22 style={{ marginLeft:'0%', marginTop:2, }}  name="right" size={16} color="#0B121F" />
                     </View>
                  
                   
                   </View>

                   </TouchableHighlight>


               {/* <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reglas de este espacio </Text> */}
               
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