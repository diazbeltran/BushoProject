import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';




import Icon2 from 'react-native-vector-icons/Ionicons';


export default class BuscaRegla extends Component {

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

                <TouchableHighlight style={{height:50,marginLeft:10, marginTop:5}}
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('BuscarDetalle')}
                        >
                             <Icon2 name="arrow-back" size={25} color="#0B121F" />
                        </TouchableHighlight>


                <View style={{width:'65%'}}>
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'#000000' }}>Reglas del espacio</Text>
                </View>

                
               
                
      
               

                </View>

                <SafeAreaView >
                    

                <ScrollView >
                    
                    <View style={{alignItems:'center', marginTop:19, marginBottom:100}}>
                            
                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <Image style={{marginLeft:0, marginTop:5, }} source={require('../../assets/img/reglas_reloj.png')} />
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Llegada desde 15:00 a 16:00 hrs</Text>
                            </View>


                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <Image style={{marginLeft:0, marginTop:5, }} source={require('../../assets/img/reglas_reloj.png')} />
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Salida a las 18.10 hrs</Text>
                            </View>


                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <Image style={{marginLeft:0, marginTop:5, }} source={require('../../assets/img/reglas_mute.png')} />
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>No se permite música fuerte</Text>
                            </View>
                            

                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <Image style={{marginLeft:0, marginTop:5, }} source={require('../../assets/img/reglas_cigarro.png')} />
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Se prohibe fumar</Text>
                            </View>



                            <View style={{width:'90%',marginTop:13, flexDirection:'column'}}>
                            
                            <Text style={{marginLeft:0, lineHeight:30, fontFamily:'NunitoSans-Bold', color:'#424242', fontSize:16}}>Otras reglas</Text>
                            <Text style={{marginLeft:0, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>No se permite música fuerte ni invitar amigos, el espacio esta destinado al trabajo por ende sólo se permite una actitud adecuada al espacio.</Text>
                            </View>



                            
                           
                           

                         



                    </View>

                
                        
                
            </ScrollView>

</SafeAreaView>
                


               

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