import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableHighlight} from 'react-native';


export default class BuscarFinal extends Component {

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
              flex:1 ,alignItems:'center' }}>
                
                <View style={{ marginTop:'50%',alignItems:'center'  }}>
                    <View style={{ width:'80%'}}>
                    <Text style={{ marginLeft:'15%', color:'black', fontFamily:'NunitoSans-Bold',fontSize:25 }}>
                        ¡Tu solicitud ha 
                        </Text>

                        <Text style={{ marginLeft:'20%',  color:'black', fontFamily:'NunitoSans-Bold',fontSize:25 }}>
                        sido  enviada!
                        </Text>
                        
                        


                        <Text style={{marginTop:20, color:'#5B5B5B', fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                        Te llegará una notificación cuando esté 
                        </Text>
                        <Text style={{ marginLeft:'30%',color:'#5B5B5B', fontFamily:'NunitoSans-Regular',fontSize:16, }}>
                     aprobada
                        </Text>
                    </View>
                       

                    <View style={{ marginTop:20, }}>
                        <TouchableHighlight style={{with:10, height:40, width:'70%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('Perfil')}
                            >
                                <Text style={{fontFamily:'NunitoSans-Bold',color:'white',marginTop:'3%',  }} >Ir a mi perfil</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>
                   

                    </View>

                    <View style={{alignItems:'flex-end', marginTop:'55%'}}> 
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