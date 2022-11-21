import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image,Button,  TouchableHighlight, TouchableOpacity,SafeAreaView, ScrollView } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/EvilIcons';




export default class Recupera extends Component {

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
                <View style={{  flex:0.2, backgroundColor: 'white' }} >
            
                <TouchableHighlight style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.goBack()}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight>
                </View>
                <View style={{  flex:1, backgroundColor: 'white' }} >
            
               
                
                <SafeAreaView >
                    

                    <ScrollView >

                <View style={{alignItems:'center', marginTop:30,}}>

                    <View style={{backgroundColor:'#EAEAEA',borderColor:'#1EB091',borderWidth:1, borderRadius:74, height:150, width:150}}>
                    <Icon2 style={{marginTop:'45%', marginLeft:'43%'}}  name="add" size={20} color='#1EB091' />
                    <Icon5 style={{borderRadius:64, backgroundColor:'white', marginTop:'20%', marginLeft:'80%'}} name="camera" size={20}  color="#0B121F" />
                    </View>
                
                        

                           
                                    
                    </View>

                    <View style={{alignItems:'center',marginTop:30,}}>
                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:20,color:'black' }}>Para comenzar, sube</Text>
                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:20,color:'black' }}>tu foto</Text>
                        

                           
                                    
                    </View>


                    <View style={{alignItems:'center', marginTop:17,}}>
                    <Text style={{fontFamily:'NunitoSans-Regular',fontSize:15,color:'#949494', marginLeft:10}}>Te queremos conocer, esto genera confianza</Text>
                    <Text style={{fontFamily:'NunitoSans-Regular',fontSize:15,color:'#949494', marginLeft:10}}>y seguridad en la comunidad Busho</Text>
                        

                           
                                    
                    </View>
                    
                <View style={{alignItems:'center', marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{fontFamily:'NunitoSans-Regular',color:'white',marginTop:'2%',  }} underlayColor={'red'}>Comenzar</Text>
                            </TouchableHighlight>
                         
                           
                                    
                    </View>
                    
                    </ScrollView>

</SafeAreaView>
                
            </View>
           
                

            <View style={{alignItems:'flex-end', marginTop:'0%'}}> 
                    <Image style={{marginLeft:'70%',marginTop:'0%' }} source={require('../../assets/img/footer.png')} />
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