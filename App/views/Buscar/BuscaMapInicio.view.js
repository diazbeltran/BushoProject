import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet,Image, Modal, TouchableHighlight, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import Icon2 from 'react-native-vector-icons/Ionicons';

import Icon4 from 'react-native-vector-icons/AntDesign';    
import Icon25 from 'react-native-vector-icons/FontAwesome';

import MultiSlider from '@ptomasroos/react-native-multi-slider';



export default class BuscarMap extends Component {

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

            rango_inicio:7000,
            rango_fin:25000,
            selectedItems:'',
        };
        
        
    }


 
    setModalVisible = async (visible, texto) => {
        this.setState({ modalVisible: visible, texto_busqueda:texto });
    }  



    render() {


        return (
            <View style={{ 
              flex:1 }}>
                
                <View style={{flexDirection:'row', marginTop:30, marginBottom:20,}}>
                <View style={{width:'70%',flexDirection:'row'}}>
                <Text style={{fontSize:26, marginLeft:20, color:'black'}}>Buscar</Text>
                </View>
                <Image style={{marginTop:10, height:25,width:25,}} source={require('../../assets/img/top_1.png')} />
                {/* <Icon2 style={{marginLeft:20, marginRight:20}}  name="md-send-outline" size={30} color="#0B121F" /> */}
                <Image style={{marginLeft:20, marginTop:10,height:25,width:25, resizeMode:'contain' }} source={require('../../assets/img/top_2.png')} />
                {/* <Icon2 style={{}}  name="ios-notifications-outline" size={30} color="#0B121F" /> */}
                

                


                </View>
                
                <View style={{marginLeft:'7%', flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:20,}}>
                    <View style={{flexDirection:'row', width:'72%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DBDBDB',paddingLeft:20}} > 
                    <Icon25 style={{marginTop:'6%'}} name="search" size={22} color="#09121F" />
                    <TextInput
                    placeholderTextColor='#09121F'
                    style={{ marginLeft:11, color:'#09121F'}}
                    placeholder='¿Qué espacio buscas?' >

                        </TextInput>

                        <TouchableOpacity style={{marginTop:11}} 
                        onPress={() => this.setModalVisible(true)}
                         >
                        <Icon2 style={{marginLeft:5,marginTop:'0%'}} name="options-outline" size={22} color="#09121F" />
                        </TouchableOpacity>
                        
                    </View> 


                    <View style={{marginLeft:20,flexDirection:'row', width:'15%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#4E5150',paddingLeft:15}} > 
                    <Image style={{ marginTop:15,height:20,width:20, resizeMode:'contain' }} source={require('../../assets/img/map_buscar.png')} />
                    
                    </View>        


                    </View>

                    <Modal 
                     style={{height:'100%', width:'100%'}}
                    animationType="fade"
                   // presentationStyle="formSheet"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                       
                    }}>
                        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center', alignItems:'center'}}>
                            <View style={{width:'95%',height:'95%' ,backgroundColor:'white'}}>

                                    <ScrollView>

                                   
                                    <View >

                                    <TouchableHighlight underlayColor='white' 
                                            title="Ingresar"
                                            onPress={() => 
                                                {this.setState({modalVisible:false})}
                                               }
                                            >
                                           <Icon4 style={{marginTop:'6%', marginLeft:'6%'}} name="close" size={22} color="#09121F" />
                                            </TouchableHighlight>


                                    
                                    </View>
                                    <View  style={{marginLeft:20, marginTop:20}}>
                                    <Text style={{color:'black'}}>Rango de precios</Text>
                                    <Text> ${this.state.rango_inicio} - ${this.state.rango_fin}  </Text>
                                    <Text>precio por dia </Text>
                                    <MultiSlider 
                                    values={[this.state.rango_inicio, this.state.rango_fin]}
                                    sliderLength={280}
                                    onValuesChange={ (data) => {
                                        this.setState({rango_inicio:data[0], rango_fin:data[1]})
                                    }}
                                    min={0}
                                    max={100000}
                                    step={1}
                                    />
                                    </View>

                                    <View  style={{marginLeft:20, marginTop:20, borderTopWidth:1, width:'80%', borderColor:'#DBDBDB'}}>
                                    <Text style={{color:'black', marginTop:15}}>Tipo de espacio</Text>
                                    <View style={{flexDirection:'row', marginTop:15}}>
                                    <View style={{borderColor:'#464646',borderWidth:1 ,height:30, width:'30%', 
                                    borderBottomLeftRadius:20,
                                    borderTopRightRadius:20, borderBottomRightRadius:20}}>
                                        <Text style={{marginTop:5, marginLeft:15}}>Oficina</Text>
                                    </View>
                                    
                                    </View>
                                    
                                    <View style={{flexDirection:'row', marginTop:15}}>
                                    <Icon2 style={{marginTop:'0%', marginLeft:'0%'}} name="add-circle-outline" size={22} color="#00D6B9" />
                                    <Text style={{color:'#00D6B9'}}>Buscar</Text>
                                    </View>
                                    


                                    </View>

                                    <View  style={{marginLeft:20, marginTop:20, borderTopWidth:1, width:'80%', borderColor:'#DBDBDB'}}>
                                    <Text style={{color:'black', marginTop:15}}>Comodidades</Text>
                                    <View style={{flexDirection:'row', marginTop:15}}>
                                    <View style={{borderColor:'#464646',borderWidth:1 ,height:30, width:'30%', 
                                    borderBottomLeftRadius:20,
                                    borderTopRightRadius:20, borderBottomRightRadius:20}}>
                                        <Text style={{marginTop:5, marginLeft:15}}>Internet</Text>
                                    </View>

                                    <View style={{borderColor:'#464646',borderWidth:1 ,height:30, width:'20%', 
                                    borderBottomLeftRadius:20,
                                    borderTopRightRadius:20, borderBottomRightRadius:20,
                                    marginLeft:10,}}>
                                        <Text style={{marginTop:5, marginLeft:10}}>Wifi</Text>
                                    </View>

                                    <View style={{marginLeft:10,borderColor:'#464646',borderWidth:1 ,height:30, width:'20%', 
                                    borderBottomLeftRadius:20,
                                    borderTopRightRadius:20, borderBottomRightRadius:20}}>
                                        <Text style={{marginTop:5, marginLeft:10}}>Baño</Text>
                                    </View>
                                    
                                    </View>
                                    
                                    <View style={{flexDirection:'row', marginTop:15}}>
                                    <Icon2 style={{marginTop:'0%', marginLeft:'0%'}} name="add-circle-outline" size={22} color="#00D6B9" />
                                    <Text style={{color:'#00D6B9'}}>Buscar</Text>
                                    </View>
                                    


                                    </View>

                                    <View  style={{marginLeft:20, marginTop:20, borderTopWidth:1, width:'80%', borderColor:'#DBDBDB'}}>
                                    <Text style={{color:'black', marginTop:15}}>Ubicación</Text>

                                    <Text>Region</Text>
                                        <View style={{alignItems:'center', marginTop:0,}}>
                                        <View style={{width:'100%',flexDirection:'row'}} > 
                                        <TextInput

                                        style={{ borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                                        placeholder='Seleccione'  >

                                        </TextInput>
                                       
                                        
                                        </View>     
                                        </View>


                                        <Text>Comuna</Text>
                                        <View style={{alignItems:'center', marginTop:0,}}>
                                        <View style={{width:'100%',flexDirection:'row'}} > 
                                        <TextInput

                                        style={{ borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DEDFDF',paddingLeft:20, width:'100%'}}
                                        placeholder='Seleccione'  >

                                        </TextInput>
                                        <View style={{marginLeft:'-15%', marginTop:20,resizeMode:'contain'}}>
                                    <Svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M7 11L0.937821 0.500001L13.0622 0.5L7 11Z" fill="#00D6B9"/>
                                    </Svg>

                                </View>
                                        
                                        </View>     
                                        </View>


                                    
                                  
                                    


                                    </View>

                                    



                                    
                                  
                                    </ScrollView>
                                  <View style={{flexDirection:'row', marginBottom:20}}>

                                            <View style={{flex:1, alignItems:'center', marginTop:10, }}>
                                            <View style={{ flexDirection:'row',
                                            marginTop:10, borderRadius:64 ,height:30,borderWidth:1,borderColor:'#61D3BA',}} > 

                                            <TouchableHighlight underlayColor='white' style={{with:10, height:40, 
                                            paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                            alignItems:'center',}}
                                            title="Ingresar"
                                            onPress={() => 
                                                {this.setState({modalVisible:false})}
                                               }
                                            >
                                            <Text style={{marginTop:'3%', fontWeight:'bold', color:'#61D3BA' }} underlayColor={'red'}>Limpiar</Text>
                                            </TouchableHighlight>

                                            </View>

                                            </View>



                                        <View style={{flex:1, alignItems:'center', marginTop:20}}>
                                        <TouchableHighlight style={{with:10, height:30, 
                                        paddingTop:5,paddingBottom:5, paddingLeft:35,paddingRight:35, borderRadius:64,
                                        backgroundColor:'#61D3BA', alignItems:'center' }}
                                        title="Ingresar"
                                        onPress={() => 
                                            {this.setState({modalVisible:false})}
                                           }
                                        >
                                        <Text style={{color:'white',marginTop:'1%', fontWeight:'bold' }} >Buscar</Text>
                                        </TouchableHighlight>



                                        </View>


                                  </View>
                            </View>
                            
                        
                        </View>
                        
                </Modal>
                <SafeAreaView >
                    

                <ScrollView >

               

                    <Text style={{marginTop:'6%',marginLeft:20,color:'black', fontSize:15,}}>Existen mas de 1000 espacios disponibles</Text>
                    
                
                   
                
                
                
                  
               
                
                   
              
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