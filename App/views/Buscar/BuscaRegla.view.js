import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';


import Svg, { Path, Rect } from 'react-native-svg';

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
                            
                         <View style={{marginTop:5}}>
                         <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="black"/>
</Svg>
                         </View>

                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Llegada desde 15:00 a 16:00 hrs</Text>
                            </View>


                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <View style={{marginTop:5}}>
                         <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="black"/>
</Svg>
                         </View>
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Salida a las 18.10 hrs</Text>
                            </View>


                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <View style={{marginTop:5}}>
                            <Svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M9 4.22002L5.603 7.00002H2V11H5.603L9 13.78V4.22002ZM4.889 13H1C0.734784 13 0.48043 12.8947 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12V6.00002C0 5.73481 0.105357 5.48045 0.292893 5.29291C0.48043 5.10538 0.734784 5.00002 1 5.00002H4.889L10.183 0.668021C10.2563 0.607968 10.3451 0.569958 10.4391 0.558415C10.5331 0.546871 10.6284 0.56227 10.714 0.602819C10.7996 0.643367 10.872 0.707397 10.9226 0.787454C10.9732 0.867511 11.0001 0.960301 11 1.05502V16.945C11.0001 17.0397 10.9732 17.1325 10.9226 17.2126C10.872 17.2926 10.7996 17.3567 10.714 17.3972C10.6284 17.4378 10.5331 17.4532 10.4391 17.4416C10.3451 17.4301 10.2563 17.3921 10.183 17.332L4.89 13H4.889ZM19.414 9.00002L22.95 12.536L21.536 13.95L18 10.414L14.464 13.95L13.05 12.536L16.586 9.00002L13.05 5.46402L14.464 4.05002L18 7.58602L21.536 4.05002L22.95 5.46402L19.414 9.00002Z" fill="black"/>
</Svg>

                         </View>
                            <Text style={{marginLeft:20, lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>No se permite música fuerte</Text>
                            </View>
                            

                            <View style={{width:'90%',marginTop:13, flexDirection:'row'}}>
                            <View style={{marginTop:5}}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18 14.818L19.5 16.318V11.25H18V14.818ZM20.625 11.25H22.125V16.875H20.625V11.25ZM17.0368 5.34633C16.6136 5.84272 16.3635 6.46333 16.3242 7.1144C16.2849 7.76548 16.4585 8.41167 16.8188 8.95538L17.0986 9.375H18.9014L18.067 8.12344C17.8872 7.85215 17.8006 7.52971 17.8202 7.20483C17.8398 6.87995 17.9646 6.57027 18.1758 6.32259C18.6123 5.81492 18.8656 5.17537 18.8952 4.5065C18.9248 3.83763 18.7289 3.17821 18.3389 2.634L18.0645 2.25H16.35L16.2647 2.31094L17.1182 3.50578C17.3128 3.77734 17.4105 4.10638 17.3958 4.44014C17.381 4.77389 17.2546 5.09301 17.0368 5.34633V5.34633ZM20.4118 5.34633C19.9886 5.84272 19.7385 6.46333 19.6992 7.1144C19.6599 7.76548 19.8335 8.41167 20.1938 8.95538L20.4736 9.375H22.2764L21.442 8.12344C21.2622 7.85215 21.1756 7.52971 21.1952 7.20483C21.2148 6.87995 21.3396 6.57027 21.5508 6.32259C21.9873 5.81492 22.2406 5.17537 22.2702 4.5065C22.2998 3.83763 22.1039 3.17821 21.7139 2.634L21.4395 2.25H19.725L19.6397 2.31094L20.4932 3.50578C20.6878 3.77734 20.7855 4.10638 20.7708 4.44014C20.756 4.77389 20.6296 5.09301 20.4118 5.34633V5.34633ZM12.3106 11.25L1.81064 0.75H0.75V1.81064L10.1894 11.25H0.75V16.875H15.8144L22.1894 23.25H23.25V22.1894L12.3106 11.25ZM2.25 15.375V12.75H11.6894L14.3144 15.375H2.25Z" fill="black"/>
</Svg>

                         </View>
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