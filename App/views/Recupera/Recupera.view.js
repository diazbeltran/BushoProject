import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image,TouchableHighlight,  SafeAreaView, ScrollView  } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';

//import WSRestApi from '../../services/wsRestApi.js';


export default class Recupera extends Component {

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
                    <View style={{flex:0.86}}>
                  <SafeAreaView >
                    

                    <ScrollView >
                <View style={{  flex:0.2, backgroundColor: 'white' }} >
            
                <TouchableHighlight style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.goBack()}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight>
                </View>
                <View style={{  flex:1, backgroundColor: 'white', }} >
            
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30,color:'black', marginLeft:20}}>Recupera </Text>
                <Text style={{fontFamily:'NunitoSans-Bold',fontSize:30,color:'black', marginLeft:20}}>tu contraseña</Text>


                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'black', marginLeft:20, marginTop:20}}>Para recuperar tu contraseña debes ingresar</Text>
                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'black', marginLeft:20, marginTop:20}}>tu célular y te enviarémos un código.</Text>
                


                <View style={{alignItems:'center', marginTop:30,}}>
                    <View style={{width:'90%'}} > 
                    <TextInput
                    
                    style={{ borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                        placeholder='Ej: +569 40446572'>

                        </TextInput>
                    </View>
                        

                           
                                    
                    </View>

                <View style={{alignItems:'center', marginTop:20}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',borderRadius:1,
                                  paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('IngresoCodigo')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{color:'white',marginTop:'2%', fontFamily:'NunitoSans-Regular',fontSize:16}} underlayColor={'red'}>Enviar código</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>
                    
                   
                
            </View>
           
                
           

                    </ScrollView>

</SafeAreaView>
</View>
<View style={{flex:0.1, marginTop:'0%', alignItems:'flex-end', }}> 
                    <Image style={{ marginLeft:'70%',marginTop:'0%' }} source={require('../../assets/img/footer.png')} />
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