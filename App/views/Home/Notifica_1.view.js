import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';




export default class Notifica_1 extends Component {

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
            
                
                <TouchableHighlight 
                underlayColor={'white'}
                style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.goBack()}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight>
                </View>
                <View style={{  flex:1, backgroundColor: 'white' }} >
            
               
                
                <SafeAreaView >
                    

                    <ScrollView >

                <View style={{alignItems:'center', marginTop:0,}}>

                    <View style={{backgroundColor:'#EAEAEA',borderColor:'#1EB091',borderWidth:1, borderRadius:100, height:200, width:200}}>
                    {/* <Icon2 style={{marginTop:'45%', marginLeft:'43%'}}  name="add" size={20} color='#1EB091' /> */}
                    {/* <Icon5 style={{borderRadius:64, backgroundColor:'white', marginTop:'20%', marginLeft:'80%'}} name="camera" size={20}  color="#0B121F" /> */}
                    </View>
                
                        

                           
                                    
                    </View>

                    <View style={{alignItems:'center',marginTop:30,width:'90%'}}>
                    <Text style={{fontFamily:'NunitoSans-Bold',fontSize:25, marginLeft:50,color:'black' }}>¡Maria Jose aceptó tu solicitud de arriendo!</Text>
                    

                           
                                    
                    </View>


                    <View style={{alignItems:'center', marginTop:17,}}>
                    <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'#949494', marginLeft:10}}>Realiza el pago para coordinar tu llegada</Text>
                    {/* <Text style={{fontFamily:'NunitoSans-Regular',fontSize:15,color:'#949494', marginLeft:10}}>y seguridad en la comunidad Busho</Text> */}
                        

                           
                                    
                    </View>
                    
                <View style={{alignItems:'center', marginTop:20}}>
                        
                        <TouchableHighlight 
                        underlayColor={'white'}
                        style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Notificacion2')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{ fontSize:16,fontWeight:'bold', fontFamily:'NunitoSans-Regular',color:'white',marginTop:'1%',  }} underlayColor={'red'}>Ir a pagar</Text>
                            </TouchableHighlight>
                            <Image style={{marginLeft:'70%',marginTop:'25%' }} source={require('../../assets/img/footer.png')} />
                           
                                    
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