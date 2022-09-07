import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image,Button, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';


import Icon2 from 'react-native-vector-icons/Ionicons';




export default class Recuperacodigo extends Component {

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
            
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30,color:'black', marginLeft:20}}>Ingresa el código </Text>
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30,color:'black', marginLeft:20}}>que te enviamos</Text>


                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'black', marginLeft:20, marginTop:20}}>Revisa tus sms e ingresa el código que</Text>
                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, color:'black',marginLeft:20, marginTop:20}}>acabamos de enviarte, estas a sólo un paso.</Text>
                <Text style={{ffontFamily:'NunitoSans-Regular',fontSize:16,color:'black', marginLeft:20, marginTop:20}}>de recuperar tu contraseña</Text>
                


                <View style={{alignItems:'center', marginTop:30,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{ borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                       >

                        </TextInput>
                    </View>
                        

                           
                                    
                    </View>

                <View style={{alignItems:'center', marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',borderRadius:1,
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('CreaContraseña')}
                            >
                                <Text style={{color:'white',marginTop:'2%', fontFamily:'NunitoSans-Regular',fontSize:16 }} underlayColor={'red'}>Recuperar mi contraseña</Text>
                            </TouchableHighlight>

                           
                           
                    </View>
                 
                
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