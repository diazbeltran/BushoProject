import React, { Component } from 'react';
import { View, Text,  StyleSheet,Image,TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';



import Svg, { Path, Rect } from 'react-native-svg';

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
                    <Text style={{marginLeft:20,color:'#A6A6A6', fontSize:18}}>
                    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#545454"/>
                                    </Svg> 
                        5.5</Text>
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
                                        
                                        <View style={{flexDirection:'row'}}>
                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>

                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>

                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>


                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" stroke="#3A3A3A"/>
                                    </Svg>

                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" stroke="#3A3A3A"/>
                                    </Svg>



                                        </View>
                                       
                                       




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
                                        

                                        <View style={{flexDirection:'row'}}>
                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>

                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>

                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>


                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" stroke="#3A3A3A"/>
                                    </Svg>

                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" stroke="#3A3A3A"/>
                                    </Svg>



                                        </View>




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
                                        

                                        <View style={{flexDirection:'row'}}>
                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>

                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>

                                        <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" fill="#3A3A3A" stroke="#3A3A3A"/>
                                        </Svg>


                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" stroke="#3A3A3A"/>
                                    </Svg>

                                    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.2606 14.5733L9.99999 14.4141L9.73938 14.5733L4.88722 17.5368L6.20635 12.006L6.2772 11.7089L6.04527 11.5103L1.72832 7.81239L7.39492 7.3584L7.69937 7.33401L7.81666 7.052L9.99999 1.80209L12.1833 7.052L12.3006 7.33401L12.6051 7.3584L18.2725 7.81239L13.9548 11.5102L13.7228 11.7089L13.7936 12.006L15.1128 17.5368L10.2606 14.5733Z" stroke="#3A3A3A"/>
                                    </Svg>



                                        </View>



                                        </View>
                                </View>

                                

                               


                            </View>
                            <View style={{width:'80%',marginTop:13,}}>
                            <Text style={{lineHeight:30, fontFamily:'NunitoSans-Regular', color:'#424242', fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
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