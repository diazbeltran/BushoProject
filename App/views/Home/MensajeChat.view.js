import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';






import Icon2 from 'react-native-vector-icons/Ionicons';




export default class MensajeChat extends Component {

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
                
                <View style={{flexDirection:'row', marginTop:20,}}>
                <TouchableHighlight 
                underlayColor={'white'}
                style={{marginLeft:10, marginTop:10}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('Mensajes')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight>
                <View style={{width:'100%'}}>
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:18, marginLeft:20, color:'black' }}>Carlos Becerra</Text>
                
                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20, color:'#A9A9A9' }}>Últ. mensaje recibido a las 22:05 hrs</Text>

                </View>

                
               
                
      
               

                </View>


                <View style={{flex:1}}>

                
                <SafeAreaView >
                    

                <ScrollView >
                    
                    <View style={{alignItems:'center', marginTop:19, marginBottom:300}}>
                            <View style={{flexDirection:'row',  width:'90%', }}>
                                <View style={{flex:0.2, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:10, }} source={require('../../assets/img/image_5.png')} />
                                </View> 

                                
                                <View style={{flex:1 }}>

                                       
                                        <View style={{width:'80%',height:43, backgroundColor:'#EBEBEB', borderRadius:30}}>
                                        <Text style={{marginTop:10,marginBottom:5, marginLeft:10,color:'000000', fontFamily:'NunitoSans-Regular', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                                        </View>
                                     
                                </View>

                            </View>


                            <View style={{flexDirection:'row',  width:'100%', alignItems:'center'}}>
                               

                                
                                <View style={{marginTop:15, marginLeft:150}}>

                                       
                                        <View style={{width:'100%', backgroundColor:'#00D6B9', borderBottomLeftRadius:20, borderTopLeftRadius:20, borderTopRightRadius:20}}>
                                        <Text style={{marginTop:10,marginBottom:5, marginLeft:10,color:'white', fontFamily:'NunitoSans-Regular', fontSize:16}}>Lorem ipsum dolor 
                                        sit amet incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                                        </View>
                                     
                                </View>

                            </View>

                            

                            <View style={{flexDirection:'row',  width:'90%',marginTop:22 }}>
                                <View style={{flex:0.2, alignItems:'center'}}>

                                
                                </View> 

                                
                                <View style={{flex:1 }}>

                                       
                                        <View style={{width:'80%',height:43, backgroundColor:'#EBEBEB', borderRadius:30}}>
                                        <Text style={{marginTop:10,marginBottom:5, marginLeft:10,color:'000000', fontFamily:'NunitoSans-Regular', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                                        </View>
                                     
                                </View>

                            </View>

                            <View style={{flexDirection:'row',  width:'90%', marginTop:15}}>
                                <View style={{flex:0.2, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:10, }} source={require('../../assets/img/image_5.png')} />
                                </View> 

                                
                                <View style={{flex:1 }}>

                                       
                                        <View style={{width:'45%',height:43, backgroundColor:'#EBEBEB', borderRadius:30}}>
                                        <Text style={{marginTop:10,marginBottom:5, marginLeft:10,color:'000000', fontFamily:'NunitoSans-Regular', fontSize:16}}>Lorem ipsum </Text>
                                        </View>
                                     
                                </View>

                            </View>


                           





                    </View>

                
                    
                
            </ScrollView>
            
                </SafeAreaView>
                </View>
                    
                <View style={{ width:'90%',marginLeft:20, height:43, backgroundColor:'#EBEBEB', borderRadius:30 , flexDirection:'row', marginTop:10,marginBottom:10 }}>
                <Text style={{marginTop:10,marginBottom:5, marginLeft:20,color:'000000', fontFamily:'NunitoSans-Regular', fontSize:16}}>Enviar mensaje </Text>
                <Text style={{marginTop:10,marginBottom:5, marginLeft:'40%',color:'#1EB091', fontFamily:'NunitoSans-Regular', fontSize:16}}>Enviar </Text>
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