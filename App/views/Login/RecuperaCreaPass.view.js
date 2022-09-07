import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image,Button, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';

//import WSRestApi from '../../services/wsRestApi.js';


export default class Recuperapass extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            status: false,
           
           correo:'',
           
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
            
                
                </View>
                <View style={{  flex:1, backgroundColor: 'white' }} >
            
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30, marginLeft:20, color:'black',}}>Crea tu nueva</Text>
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30, marginLeft:20, color:'black'}}>contraseña</Text>


                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20, marginTop:20, color:'black'}}>¡Excelente, el código fue validado de manera</Text>
                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20, marginTop:20, color:'black'}}>exitosa, ahora debes crear tu nueva</Text>
                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16, marginLeft:20, marginTop:20, color:'black'}}>contraseña</Text>
                


                <View style={{alignItems:'center', marginTop:30,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{ fontFamily:'NunitoSans-Regular',fontSize:16,borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                     placeholder='Contraseña'  >

                        </TextInput>
                    </View>
                        

                           
                                    
                    </View>
                    <View style={{alignItems:'center', marginTop:30,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{fontFamily:'NunitoSans-Regular',fontSize:16, borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                    placeholder='Repetir contraseña' >

                        </TextInput>
                    </View>
                        

                           
                                    
                    </View>

                <View style={{alignItems:'center', marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',borderRadius:1,
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'white',marginTop:'2%',  }} underlayColor={'red'}>Guardar</Text>
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