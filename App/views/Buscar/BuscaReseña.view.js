import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image,TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';





import Icon2 from 'react-native-vector-icons/Ionicons';





export default class Reseña extends Component {

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
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'#000000' }}>Reseñas</Text>
                </View>

                
               
                
      
               

                </View>

                <SafeAreaView >
                    

                <ScrollView >
                    <View style={{flexDirection:'row'}}>
                    <Text style={{marginLeft:20,color:'#A6A6A6', fontSize:18}}><Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/Star_1.png')} />5.5</Text>
                    <Text style={{marginLeft:20,color:'#2B2A2A', fontSize:18, fontFamily:'NunitoSans-Bold'}}>14 reseñas</Text>
                    </View>
                    <View style={{alignItems:'center', marginTop:19, marginBottom:100}}>
                            <View style={{flexDirection:'row', borderColor:'#D3EEE8', width:'90%', }}>
                                <View style={{flex:0.4, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/img_rese_1.png')} />
                                </View> 

                                
                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        
                                        <Text style={{marginTop:20,color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Fernando Garrido</Text>
                                        <Text style={{color:'#A6A6A6'}}>Hace 1 semana</Text>                                        
                                        

                                        <Image style={{marginLeft:0, marginTop:0, }} source={require('../../assets/img/img_rese_star.png')} />




                                        </View>
                                </View>

                                

                               


                            </View>
                            <View style={{width:'80%',marginTop:13,}}>
                            <Text style={{lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                            </View>
                            

                            <View style={{flexDirection:'row', borderColor:'#D3EEE8', width:'90%', }}>
                                <View style={{flex:0.4, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/img_rese_1.png')} />
                                </View> 

                                
                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        
                                        <Text style={{marginTop:20,color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Fernando Garrido</Text>
                                        <Text style={{color:'#A6A6A6'}}>Hace 1 semana</Text>                                        
                                        

                                        <Image style={{marginLeft:0, marginTop:0, }} source={require('../../assets/img/img_rese_star.png')} />




                                        </View>
                                </View>

                                

                               


                            </View>
                            <View style={{width:'80%',marginTop:13,}}>
                            <Text style={{lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                            </View>



                            <View style={{flexDirection:'row', borderColor:'#D3EEE8', width:'90%', }}>
                                <View style={{flex:0.4, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/img_rese_1.png')} />
                                </View> 

                                
                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        
                                        <Text style={{marginTop:20,color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Fernando Garrido</Text>
                                        <Text style={{color:'#A6A6A6'}}>Hace 1 semana</Text>                                        
                                        

                                        <Image style={{marginLeft:0, marginTop:0, }} source={require('../../assets/img/img_rese_star.png')} />



                                        </View>
                                </View>

                                

                               


                            </View>
                            <View style={{width:'80%',marginTop:13,}}>
                            <Text style={{lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                            </View>
                        
                           

                            <Image style={{marginLeft:0, marginTop:10,marginBottom:20 }} source={require('../../assets/img/img_rese_footer.png')} />



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