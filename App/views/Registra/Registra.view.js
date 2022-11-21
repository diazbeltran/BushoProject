import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image,Button, Modal,TouchableWithoutFeedback,Keyboard, TouchableHighlight, KeyboardAvoidingView,TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';






import Icon2 from 'react-native-vector-icons/Ionicons';





export default class Registra extends Component {

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
                flex: 1,
                // flexWrap: "wrap",
                backgroundColor: 'white', }}>
<SalirDelTeclado>
<KeyboardAvoidingView  >


                 <SafeAreaView >
                    

                    <ScrollView >
                <View style={{ flex:.1,  backgroundColor: 'white' }} >
            
                <TouchableHighlight underlayColor={'white'} style={{marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.goBack()}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight>
                </View>

                
                <View style={{flex:0.9, marginTop:42,  backgroundColor: 'white' }} >
                
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30, marginLeft:20, color:'black',  }}>Regístrate y comienza</Text>
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30, marginLeft:20, color:'black',}}>tu negocio</Text>

              


                <View style={{alignItems:'center', marginTop:31,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{fontFamily:'NunitoSans-Regular',fontSize:16, borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                    placeholderTextColor='#717171'
                     placeholder='Nombre completo'  >

                        </TextInput>
                    </View>     
                    </View>
                
                    <View style={{alignItems:'center', marginTop:14,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{ fontFamily:'NunitoSans-Regular',fontSize:16,borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                    placeholderTextColor='#717171'
                     placeholder='Email'  >

                        </TextInput>
                    </View>     
                    </View>
                    <View style={{alignItems:'center', marginTop:14,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{ fontFamily:'NunitoSans-Regular',fontSize:16,borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                    placeholderTextColor='#717171'
                     placeholder='Teléfono'  >

                        </TextInput>
                    </View>     
                    </View>
                    <View style={{alignItems:'center', marginTop:14,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{fontFamily:'NunitoSans-Regular',fontSize:16, borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                    placeholderTextColor='#717171'
                     placeholder='Contraseña'  >

                        </TextInput>
                    </View>     
                    </View>


                    <View style={{alignItems:'center', marginTop:14,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{ fontFamily:'NunitoSans-Regular',fontSize:16,borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                    placeholderTextColor='#717171'
                    placeholder='Repetir contraseña' >

                        </TextInput>
                    </View>
                        

                           
                                    
                    </View>

                <View style={{alignItems:'center', marginTop:25}}>
                        <TouchableHighlight style={{with:10, height:45, width:'90%',borderRadius:1,
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#00D6B9', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('RegistraFoto')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{fontFamily:'NunitoSans-Bold',fontSize:16,color:'white',marginTop:"1%", }} underlayColor={'red'}>Registrarme</Text>
                            </TouchableHighlight>

                            
                                    
                    </View>
                    
                    
               
                
            </View>
           
            
            
            <View style={{flex:0.1, marginTop:'30%', alignItems:'flex-end', }}> 
                    <Image style={{ marginLeft:'70%',marginTop:'0%' }} source={require('../../assets/img/footer.png')} />
                    </View> 
           
                    </ScrollView>

</SafeAreaView>   


    </KeyboardAvoidingView>
    </SalirDelTeclado>

                
{/* <View style={{flex:0.1, marginTop:'0%', alignItems:'flex-end', }}> 
                    <Image style={{ marginLeft:'70%',marginTop:'0%' }} source={require('../../assets/img/footer.png')} />
                    </View> */}
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

  const SalirDelTeclado = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(), console.log("se ha presionado fuera") }}>
      {children}
    </TouchableWithoutFeedback>
  )