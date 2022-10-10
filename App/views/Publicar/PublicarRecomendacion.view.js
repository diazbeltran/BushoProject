import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image,TouchableHighlight, ScrollView } from 'react-native';

import CheckBox from '@react-native-community/checkbox';





export default class PublicarRecomendacion extends Component {

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
                <View style={{  flex:0.1, backgroundColor: 'white' }} >
            
                {/* <TouchableHighlight style={{height:50,marginLeft:10, marginTop:25}}
                    title="Press me"
                    onPress={() => this.props.navigation.goBack()}
                        >
                             <Icon2 name="arrow-back" size={25} color="#383838" />
                        </TouchableHighlight> */}
                </View>

                <ScrollView style={{marginTop:'10%'}} >

                            
                <View style={{  flex:1, backgroundColor: 'white' }} >
                
                    

                  
                <View style={{marginLeft:'7%', width:'80%', alignItems:'center'}}>
                <Text style={{fontFamily:'NunitoSans-Regular',fontSize:25, marginLeft:20, color:'black'}}>Antes de publicar hay algo que debes saber...</Text>

                <Text style={{fontFamily:'NunitoSans-Regular',marginTop:20, fontSize:16, marginLeft:20, color:'black'}}>Te recomendamos:</Text>
                


                <View style={{flexDirection:'row'}}>

                <Image style={{ marginLeft:20, marginTop:'8%',borderRadius:10,resizeMode: 'stretch'}} source={require('../../assets/img/check_1.png')} />
                <Text style={{flex:2,fontFamily:'NunitoSans-Regular',marginTop:20, fontSize:16, marginLeft:20, color:'#717171'}}>Subir fotos atractivas y de buena calidad</Text>
                </View>

                <View style={{flexDirection:'row'}}>

                <Image style={{ marginLeft:20, marginTop:'8%',borderRadius:10,resizeMode: 'stretch'}} source={require('../../assets/img/check_1.png')} />
                <Text style={{flex:2,fontFamily:'NunitoSans-Regular',marginTop:20, fontSize:16, marginLeft:20, color:'#717171'}}>La iluminación es fundamental para lucir tu espacio</Text>
                </View>

                <View style={{flexDirection:'row'}}>

                <Image style={{ marginLeft:20, marginTop:'8%',borderRadius:10,resizeMode: 'stretch'}} source={require('../../assets/img/check_1.png')} />
                <Text style={{flex:2,fontFamily:'NunitoSans-Regular',marginTop:20, fontSize:16, marginLeft:20, color:'#717171'}}>Sube varias fotos de diferentes perspectivas para sacarle provecho a tu espacio</Text>
                </View>


                <View style={{flexDirection:'row'}}>

                <Image style={{ marginLeft:20, marginTop:'8%',borderRadius:10,resizeMode: 'stretch'}} source={require('../../assets/img/check_1.png')} />
                <Text style={{flex:2,fontFamily:'NunitoSans-Regular',marginTop:20, fontSize:16, marginLeft:20, color:'#717171'}}>¡Para arrendar más rápido tu espacio, especifica sus detalles y comienza tu negocio!</Text>
                </View>


                

                </View>
       
        

      


        

        <View style={{alignItems:'center', marginTop:20}}>
                <TouchableHighlight style={{with:10, height:40, width:'90%',
                          paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                          backgroundColor:'#61D3BA', alignItems:'center' }}
                title="Ingresar"
                
                    >
                        <Text maxFontSizeMultiplier={1} style={{fontFamily:'NunitoSans-Regular',fontSize:16,color:'white',marginTop:'1%', }} underlayColor={'red'}>Ver un tutorial</Text>
                    </TouchableHighlight>



                    <View style={{flexDirection:'row'}}>
             

            
      <CheckBox
      
      lineWidth={3}
      boxType='square'
      onCheckColor='red'
      onTintColor='#61D3BA'
      onFillColor='#61D3BA'
                style={{marginTop:'6%', height:20}}
        //value={}
        
        />   
        <Text maxFontSizeMultiplier={1} style={{backgroundColor:'white', marginTop:20, fontFamily:'NunitoSans-Regular',fontSize:16}}> 
                        
         No volver a mostrar</Text>
        
            </View>

            <TouchableHighlight 
            underlayColor={'white'}
                title="Ingresar"
                onPress={() => this.props.navigation.navigate('PublicarRecomendacion')}
                    >
                      <Text  maxFontSizeMultiplier={1} style={{color:'#61D3BA',backgroundColor:'white', marginTop:20,fontFamily:'NunitoSans-Regular',fontSize:16 }}> 
                        
                        Cerrar</Text>
                    </TouchableHighlight>



            

                    <Image style={{marginLeft:'70%',marginTop:'0%' }} source={require('../../assets/img/footer.png')} />
                            
            </View>

            
    

     
        
    </View>
   




                </ScrollView>
                
               
                


               

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