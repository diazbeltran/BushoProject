import React, { Component } from 'react';
import { Dimensions,View, Text, TextInput , StyleSheet, Modal, TouchableHighlight, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Svg, { Path, Circle,Rect } from 'react-native-svg';

import Icon2 from 'react-native-vector-icons/Ionicons';


import Icon4 from 'react-native-vector-icons/AntDesign';    


import MultiSlider from '@ptomasroos/react-native-multi-slider';

const { width, height } = Dimensions.get('window');

export default class BuscarMapa extends Component {

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
            ubicacionActual: "",
            apiKey: "AIzaSyDMRG59nygLdl3HLo3jJQNekPrH2T__0eo",


            region: {
                latitude: -33.438711,
                longitude: -70.691979,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
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
                <Text style={{fontFamily:'NunitoSans-Blod',fontSize:25, marginLeft:20, color:'black', fontWeight:'bold'}}>Buscar</Text>
                </View>
                <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
                        onPress={() => this.props.navigation.navigate('Mensajes')}
                            >
                       
                     {/* <Image style={{marginTop:0, }} source={require('../../assets/img/top_3.png')} /> */}
                     <Svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M3.741 6.40798L22.203 16.562C22.2814 16.6051 22.3468 16.6686 22.3923 16.7456C22.4378 16.8226 22.4618 16.9105 22.4618 17C22.4618 17.0895 22.4378 17.1773 22.3923 17.2544C22.3468 17.3314 22.2814 17.3948 22.203 17.438L3.741 27.592C3.66487 27.6339 3.57915 27.6552 3.49227 27.6538C3.4054 27.6525 3.32037 27.6285 3.24558 27.5843C3.17078 27.5401 3.1088 27.4772 3.06573 27.4017C3.02267 27.3262 3.00001 27.2409 3 27.154V6.84598C3.00001 6.7591 3.02267 6.67372 3.06573 6.59825C3.1088 6.52279 3.17078 6.45985 3.24558 6.41564C3.32037 6.37143 3.4054 6.34747 3.49227 6.34613C3.57915 6.34479 3.66487 6.36611 3.741 6.40798ZM5 18V24.617L18.85 17L5 9.38298V16H10V18H5Z" fill="#09121F"/>
                  <Rect x="12" y="1" width="12" height="12" rx="6" fill="#E46060" stroke="white" stroke-width="2"/>
                  </Svg>

                    </TouchableHighlight> 

                    <TouchableHighlight  underlayColor='white'
                        title="Ingresar"
                        style={{marginLeft:20}}
                        onPress={() => this.props.navigation.navigate('Notificacion')}
                            >
                       
                     {/* <Image style={{marginLeft:20, marginTop:0, resizeMode:'contain'}} source={require('../../assets/img/top_4.png')} /> */}
                     <Svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M18 13C18 11.4087 17.3679 9.88258 16.2426 8.75736C15.1174 7.63214 13.5913 7 12 7C10.4087 7 8.88258 7.63214 7.75736 8.75736C6.63214 9.88258 6 11.4087 6 13V21H18V13ZM20 21.667L20.4 22.2C20.4557 22.2743 20.4896 22.3626 20.498 22.4551C20.5063 22.5476 20.4887 22.6406 20.4472 22.7236C20.4057 22.8067 20.3419 22.8765 20.2629 22.9253C20.1839 22.9741 20.0929 23 20 23H4C3.90714 23 3.81612 22.9741 3.73713 22.9253C3.65815 22.8765 3.59431 22.8067 3.55279 22.7236C3.51126 22.6406 3.49368 22.5476 3.50202 22.4551C3.51036 22.3626 3.54429 22.2743 3.6 22.2L4 21.667V13C4 10.8783 4.84286 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13V21.667ZM9.5 24H14.5C14.5 24.663 14.2366 25.2989 13.7678 25.7678C13.2989 26.2366 12.663 26.5 12 26.5C11.337 26.5 10.7011 26.2366 10.2322 25.7678C9.76339 25.2989 9.5 24.663 9.5 24Z" fill="#09121F"/>
                <Rect x="15" y="1" width="12" height="12" rx="6" fill="#E46060" stroke="white" stroke-width="2"/>
                </Svg>

                    </TouchableHighlight> 
                

                


                </View>
                
                <View style={{ marginLeft:'7%', flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:20, }}>
                    <View style={{flexDirection:'row', width:'72%',borderRadius:64 ,height:50,borderWidth:1,borderColor:'#DBDBDB',paddingLeft:20}} > 
                    {/* <Icon25 style={{marginTop:'6%'}} name="search" size={22} color="#09121F" /> */}
                    <View style={{marginTop:18}}>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M12.5232 11.4627L15.7355 14.6742L14.6742 15.7355L11.4627 12.5232C10.2678 13.4812 8.7815 14.0022 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5C10.976 0.5 14 3.524 14 7.25C14.0022 8.7815 13.4812 10.2678 12.5232 11.4627ZM11.0187 10.9062C11.9706 9.92741 12.5021 8.61532 12.5 7.25C12.5 4.349 10.1502 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1502 4.349 12.5 7.25 12.5C8.61532 12.5021 9.92741 11.9706 10.9062 11.0187L11.0187 10.9062Z" fill="#09121F"/>
</Svg>
                    </View>



                    <TextInput
                    placeholderTextColor='#09121F'
                    style={{ marginLeft:11, color:'#09121F', fontSize:16}}
                    
                    placeholder='¿Qué espacio buscas?' >

                        </TextInput>

                        <TouchableOpacity style={{marginTop:11}} 
                        onPress={() => this.setModalVisible(true)}
                         >
                        <Icon2 style={{marginLeft:'15%',marginTop:'0%'}} name="options-outline" size={22} color="#09121F" />
                        </TouchableOpacity>
                        
                    </View> 

                  

                        <TouchableOpacity style={{marginLeft:0,flexDirection:'row', width:'15%',height:50,borderColor:'#4E5150',paddingLeft:15}} 
                        onPress={() => this.props.navigation.navigate('BuscarMapa')}
                            >
                             
                        <View > 

                        <Svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<Circle cx="24.5" cy="24.5" r="24.5" fill="#4E5150"/>
<Path d="M15 17L22 14L28 17L34.303 14.299C34.3791 14.2664 34.4621 14.2532 34.5445 14.2605C34.627 14.2679 34.7063 14.2956 34.7754 14.3412C34.8445 14.3868 34.9012 14.4489 34.9404 14.5218C34.9796 14.5947 35.0001 14.6762 35 14.759V31L28 34L22 31L15.697 33.701C15.6209 33.7336 15.5379 33.7468 15.4555 33.7395C15.373 33.7321 15.2937 33.7044 15.2246 33.6588C15.1555 33.6132 15.0988 33.5511 15.0596 33.4782C15.0204 33.4053 14.9999 33.3238 15 33.241V17ZM29 31.395L33 29.681V17.033L29 18.747V31.395ZM27 31.264V18.736L23 16.736V29.264L27 31.264ZM21 29.253V16.605L17 18.319V30.967L21 29.253Z" fill="white"/>
</Svg>


                 
                    
                    </View> 
                        </TouchableOpacity>
                          


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
                                        console.log("wewe");
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
               

                <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
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
    container: {
        ...StyleSheet.absoluteFillObject,
        height: height,
        width: width,
        marginTop:170,
        marginLeft:0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
  });