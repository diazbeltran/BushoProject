import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,Image, TouchableHighlight,TouchableOpacity,ImageBackground, TouchableWithoutFeedback, SafeAreaView, ScrollView  } from 'react-native';

import { CustomPagination } from './CustomPagination.js';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Svg, { Path } from 'react-native-svg';

import Icon22 from 'react-native-vector-icons/AntDesign';


const { width, height } = Dimensions.get('window');




export default class PerfilPropiedadAgregar extends Component {

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
            width : width,
            height: height
        };

        
    }


 




    render() {

        return (
            <View style={{ 
              flex:1 }}>
               
                
            <View style={{  flex:1, backgroundColor: 'white' , marginTop:'0%'}} >
                     
               
                
                    
                    
                <SafeAreaView >
                    

                <ScrollView >
                
                <View style={{ position:'absolute',  backgroundColor: 'white', flexDirection:'row' }} >

                <View style={styles1.container}>
                      <SwiperFlatList showPagination
                      PaginationComponent={CustomPagination} >
                        
                        <View style={[styles1.child, { position:'relative', borderRadius:0, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s4);
                          this.setState({s4:!this.state.s4})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:0}}   style={{ marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_1.png')} >
                        
                       
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>
                        <View style={[styles1.child, { position:'relative', borderRadius:0, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:0}}   style={{ marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_2.png')} >
                        
                        
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>

                        <View style={[styles1.child, { position:'relative', borderRadius:0, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:0}}   style={{ marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_3.png')} >
                        
                        
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>


                        <View style={[styles1.child, { position:'relative', borderRadius:0, backgroundColor: 'white' }]}>
                        <TouchableOpacity  onPress={() => 
                        {
                          console.log(this.state.s1);
                          this.setState({s1:!this.state.s1})}
                        } >
                        
                        <ImageBackground imageStyle={{borderRadius:0}}   style={{ marginTop:0,width:width, height:height/3 }} source={require('../../assets/img/inicio_4.png')} >
                        
                        
                       

                          </ImageBackground>
                         
                        </TouchableOpacity>

                        </View>



                        
                      </SwiperFlatList>
              </View> 

               
               

              <TouchableHighlight style={{position:'absolute',marginLeft:20,marginTop:20 }}
              underlayColor='white'
                title="Press me"
                 onPress={() => this.props.navigation.navigate('Buscar')}  
                //onPress={() => this.props.navigation.goBack()}  
                >

                <Icon2 name="arrow-back" size={25} color="white" />
                </TouchableHighlight>


                <TouchableHighlight style={{position:'absolute',marginLeft:'75%',marginTop:20 }}
                underlayColor='white'
                title="Press me"
                 onPress={() => this.props.navigation.navigate('Buscar')}  
                //onPress={() => this.props.navigation.goBack()}  
                >

                <Icon2 name="heart-outline" size={25} color="white" />
                </TouchableHighlight>


                <TouchableHighlight style={{position:'absolute',marginLeft:'85%',marginTop:20 }}
                underlayColor='white'
                title="Press me"
                 onPress={() => this.props.navigation.navigate('Buscar')}  
                //onPress={() => this.props.navigation.goBack()}  
                >

                <Icon2 name="share-social-outline" size={25} color="white" />
                </TouchableHighlight>


                        
        
            </View>
                    <View style={{marginTop:'70%',  flexDirection:'column'}}>
                    <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:18, fontWeight:'bold'  }}>Oficina Pedro Panamericana sur</Text>

                    <View style={{flexDirection:'row'}}>
                    <Image style={{marginLeft:20, marginTop:3, }} source={require('../../assets/img/puntox.png')} />
                    <Text style={{marginTop:'0%',marginLeft:6, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172', marginBottom:23  }}>  Panamericana Sur, Concepción, Chile</Text>
                </View>


               
                

                    <View style={{marginLeft:20, flexDirection:'row', borderTopWidth:1, borderBottomWidth:1, borderColor:'#D3EEE8', width:'90%', marginBottom:0}}>
                                <View style={{flex:0.5, alignItems:'center'}}>

                                <Image style={{marginLeft:0, marginTop:20, }} source={require('../../assets/img/img_notificacion_2.png')} />
                                </View> 

                                
                                <View style={{flex:1}}>

                                        <View style={{flexDirection:'column'}}>
                                        <Text style={{marginTop:20,color:'#A6A6A6'}}>Anfitrión</Text>
                                        <Text style={{color:'black', fontFamily:'NunitoSans-Bold', fontSize:18}}>Paula Carrera</Text>
                                        <TouchableHighlight 
                underlayColor='white'
                title="Press me"
                 onPress={() => this.props.navigation.navigate('BuscarPerfil')}  
                //onPress={() => this.props.navigation.goBack()}  
                >

<Text style={{fontFamily:'NunitoSans-Regular', color:'#00D6B9', fontSize:16, marginBottom:20}}>Ver perfil</Text>
                </TouchableHighlight>
                                       

                                        

                                        </View>
                                </View>

                                <View style={{flex:0.3}}>

                                
                                <Text style={{marginTop:40,color:'#A6A6A6'}}>
                                <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#545454"/>
</Svg>5.5</Text>
                                        

                                        
                                </View>

                               


                            </View>


                            <Text style={{color:'#4f4f4f', marginTop:'3%',marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:18,  }}>Sobre este lugar</Text>
                            <View style={{width:'90%', marginTop:10}}>
                            <Text style={{marginTop:'0%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16, color:'#717172' , lineHeight:30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                            </View>
                
                <View style={{flexDirection:'row'}}>
               


                </View>
                
                <View style={{marginTop:25, flexDirection:'row'}}>
                    <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Bold',fontSize:16, color:'#444444'}}>Tipo de espacio </Text>
                    </View>

                {/* <Image style={{marginLeft:20, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/oficina.png')} /> */}
{/* <View style={{marginLeft:20, marginTop:10}}>
<Svg width="93" height="42" viewBox="0 0 93 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0.5 0.5H72C83.3218 0.5 92.5 9.67816 92.5 21C92.5 32.3218 83.3218 41.5 72 41.5H21.4615C9.8848 41.5 0.5 32.1152 0.5 20.5385V0.5Z" stroke="#464646"/>
<Path d="M19.392 26V14.72H20.704V26H19.392ZM23.3098 26V18.224H24.5738V19.552C24.8298 19.0613 25.1924 18.6933 25.6618 18.448C26.1311 18.2027 26.6591 18.08 27.2458 18.08C29.0911 18.08 30.0138 19.104 30.0138 21.152V26H28.7178V21.232C28.7178 20.5067 28.5738 19.9787 28.2858 19.648C28.0084 19.3067 27.5604 19.136 26.9418 19.136C26.2271 19.136 25.6564 19.36 25.2298 19.808C24.8138 20.2453 24.6058 20.832 24.6058 21.568V26H23.3098ZM35.5235 26.144C34.6062 26.144 33.9182 25.904 33.4595 25.424C33.0008 24.9333 32.7715 24.2293 32.7715 23.312V19.232H31.2515V18.224H32.7715V15.84H34.0675V18.224H36.5315V19.232H34.0675V23.184C34.0675 23.792 34.1955 24.256 34.4515 24.576C34.7075 24.8853 35.1235 25.04 35.6995 25.04C35.8702 25.04 36.0408 25.0187 36.2115 24.976C36.3822 24.9333 36.5368 24.8907 36.6755 24.848L36.8995 25.84C36.7608 25.9147 36.5582 25.984 36.2915 26.048C36.0248 26.112 35.7688 26.144 35.5235 26.144ZM41.4231 26.144C40.1965 26.144 39.2258 25.7867 38.5111 25.072C37.7965 24.3467 37.4391 23.3653 37.4391 22.128C37.4391 21.328 37.5991 20.624 37.9191 20.016C38.2391 19.3973 38.6765 18.9227 39.2311 18.592C39.7965 18.2507 40.4471 18.08 41.1831 18.08C42.2391 18.08 43.0658 18.4213 43.6631 19.104C44.2605 19.776 44.5591 20.704 44.5591 21.888V22.384H38.7031C38.7458 23.2693 39.0018 23.9467 39.4711 24.416C39.9405 24.8747 40.5911 25.104 41.4231 25.104C41.8925 25.104 42.3405 25.0347 42.7671 24.896C43.1938 24.7467 43.5991 24.5067 43.9831 24.176L44.4311 25.088C44.0791 25.4187 43.6311 25.68 43.0871 25.872C42.5431 26.0533 41.9885 26.144 41.4231 26.144ZM41.2151 19.04C40.4791 19.04 39.8978 19.2693 39.4711 19.728C39.0445 20.1867 38.7938 20.7893 38.7191 21.536H43.4391C43.4071 20.7467 43.1991 20.1333 42.8151 19.696C42.4418 19.2587 41.9085 19.04 41.2151 19.04ZM46.4348 26V18.224H47.6988V19.616C48.1148 18.6773 48.9681 18.16 50.2588 18.064L50.7228 18.016L50.8188 19.136L50.0028 19.232C49.2668 19.296 48.7068 19.5307 48.3228 19.936C47.9388 20.3307 47.7468 20.8747 47.7468 21.568V26H46.4348ZM52.1691 26V18.224H53.4331V19.552C53.6891 19.0613 54.0518 18.6933 54.5211 18.448C54.9905 18.2027 55.5185 18.08 56.1051 18.08C57.9505 18.08 58.8731 19.104 58.8731 21.152V26H57.5771V21.232C57.5771 20.5067 57.4331 19.9787 57.1451 19.648C56.8678 19.3067 56.4198 19.136 55.8011 19.136C55.0865 19.136 54.5158 19.36 54.0891 19.808C53.6731 20.2453 53.4651 20.832 53.4651 21.568V26H52.1691ZM64.7669 26.144C63.5402 26.144 62.5695 25.7867 61.8549 25.072C61.1402 24.3467 60.7829 23.3653 60.7829 22.128C60.7829 21.328 60.9429 20.624 61.2629 20.016C61.5829 19.3973 62.0202 18.9227 62.5749 18.592C63.1402 18.2507 63.7909 18.08 64.5269 18.08C65.5829 18.08 66.4095 18.4213 67.0069 19.104C67.6042 19.776 67.9029 20.704 67.9029 21.888V22.384H62.0469C62.0895 23.2693 62.3455 23.9467 62.8149 24.416C63.2842 24.8747 63.9349 25.104 64.7669 25.104C65.2362 25.104 65.6842 25.0347 66.1109 24.896C66.5375 24.7467 66.9429 24.5067 67.3269 24.176L67.7749 25.088C67.4229 25.4187 66.9749 25.68 66.4309 25.872C65.8869 26.0533 65.3322 26.144 64.7669 26.144ZM64.5589 19.04C63.8229 19.04 63.2415 19.2693 62.8149 19.728C62.3882 20.1867 62.1375 20.7893 62.0629 21.536H66.7829C66.7509 20.7467 66.5429 20.1333 66.1589 19.696C65.7855 19.2587 65.2522 19.04 64.5589 19.04ZM72.8985 26.144C71.9812 26.144 71.2932 25.904 70.8345 25.424C70.3758 24.9333 70.1465 24.2293 70.1465 23.312V19.232H68.6265V18.224H70.1465V15.84H71.4425V18.224H73.9065V19.232H71.4425V23.184C71.4425 23.792 71.5705 24.256 71.8265 24.576C72.0825 24.8853 72.4985 25.04 73.0745 25.04C73.2452 25.04 73.4158 25.0187 73.5865 24.976C73.7572 24.9333 73.9118 24.8907 74.0505 24.848L74.2745 25.84C74.1358 25.9147 73.9332 25.984 73.6665 26.048C73.3998 26.112 73.1438 26.144 72.8985 26.144Z" fill="black"/>
</Svg>

</View> */}
<View style={{marginLeft:20, flexDirection:'row', marginTop:15,}} >
<View style={{borderColor:'#464646',borderWidth:1 ,height:40, width:'20%', 
borderBottomLeftRadius:20,
borderTopRightRadius:20, borderBottomRightRadius:20}}>
<Text maxFontSizeMultiplier={1} style={{fontFamily:'NunitoSans-Regular',marginTop:7, marginLeft:15}}>Oficina</Text>
</View>

</View>




                <View style={{ borderColor:'#D7D7D7'}}>
               <View style={{marginLeft:20}}>
               
                                 



                    <View style={{marginTop:0, width:'95%', borderColor:'#D8D8D8'}}>
                    <View style={{marginTop:25, flexDirection:'row'}}>
                    <Text style={{marginTop:0, marginLeft:0, fontFamily:'NunitoSans-Bold',fontSize:16, color:'#444444'}}>Comodidades </Text>
                    </View>

                    <View style={{ marginTop:10, flexDirection:'row'}}>
                    {/* <Image style={{marginLeft:0, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_3.png')} /> */}

                    <Svg width="93" height="42" viewBox="0 0 93 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0.5 0.5H72C83.3218 0.5 92.5 9.67816 92.5 21C92.5 32.3218 83.3218 41.5 72 41.5H21.4615C9.8848 41.5 0.5 32.1152 0.5 20.5385V0.5Z" stroke="#464646"/>
<Path d="M19.392 26V14.72H20.704V26H19.392ZM23.3098 26V18.224H24.5738V19.552C24.8298 19.0613 25.1924 18.6933 25.6618 18.448C26.1311 18.2027 26.6591 18.08 27.2458 18.08C29.0911 18.08 30.0138 19.104 30.0138 21.152V26H28.7178V21.232C28.7178 20.5067 28.5738 19.9787 28.2858 19.648C28.0084 19.3067 27.5604 19.136 26.9418 19.136C26.2271 19.136 25.6564 19.36 25.2298 19.808C24.8138 20.2453 24.6058 20.832 24.6058 21.568V26H23.3098ZM35.5235 26.144C34.6062 26.144 33.9182 25.904 33.4595 25.424C33.0008 24.9333 32.7715 24.2293 32.7715 23.312V19.232H31.2515V18.224H32.7715V15.84H34.0675V18.224H36.5315V19.232H34.0675V23.184C34.0675 23.792 34.1955 24.256 34.4515 24.576C34.7075 24.8853 35.1235 25.04 35.6995 25.04C35.8702 25.04 36.0408 25.0187 36.2115 24.976C36.3822 24.9333 36.5368 24.8907 36.6755 24.848L36.8995 25.84C36.7608 25.9147 36.5582 25.984 36.2915 26.048C36.0248 26.112 35.7688 26.144 35.5235 26.144ZM41.4231 26.144C40.1965 26.144 39.2258 25.7867 38.5111 25.072C37.7965 24.3467 37.4391 23.3653 37.4391 22.128C37.4391 21.328 37.5991 20.624 37.9191 20.016C38.2391 19.3973 38.6765 18.9227 39.2311 18.592C39.7965 18.2507 40.4471 18.08 41.1831 18.08C42.2391 18.08 43.0658 18.4213 43.6631 19.104C44.2605 19.776 44.5591 20.704 44.5591 21.888V22.384H38.7031C38.7458 23.2693 39.0018 23.9467 39.4711 24.416C39.9405 24.8747 40.5911 25.104 41.4231 25.104C41.8925 25.104 42.3405 25.0347 42.7671 24.896C43.1938 24.7467 43.5991 24.5067 43.9831 24.176L44.4311 25.088C44.0791 25.4187 43.6311 25.68 43.0871 25.872C42.5431 26.0533 41.9885 26.144 41.4231 26.144ZM41.2151 19.04C40.4791 19.04 39.8978 19.2693 39.4711 19.728C39.0445 20.1867 38.7938 20.7893 38.7191 21.536H43.4391C43.4071 20.7467 43.1991 20.1333 42.8151 19.696C42.4418 19.2587 41.9085 19.04 41.2151 19.04ZM46.4348 26V18.224H47.6988V19.616C48.1148 18.6773 48.9681 18.16 50.2588 18.064L50.7228 18.016L50.8188 19.136L50.0028 19.232C49.2668 19.296 48.7068 19.5307 48.3228 19.936C47.9388 20.3307 47.7468 20.8747 47.7468 21.568V26H46.4348ZM52.1691 26V18.224H53.4331V19.552C53.6891 19.0613 54.0518 18.6933 54.5211 18.448C54.9905 18.2027 55.5185 18.08 56.1051 18.08C57.9505 18.08 58.8731 19.104 58.8731 21.152V26H57.5771V21.232C57.5771 20.5067 57.4331 19.9787 57.1451 19.648C56.8678 19.3067 56.4198 19.136 55.8011 19.136C55.0865 19.136 54.5158 19.36 54.0891 19.808C53.6731 20.2453 53.4651 20.832 53.4651 21.568V26H52.1691ZM64.7669 26.144C63.5402 26.144 62.5695 25.7867 61.8549 25.072C61.1402 24.3467 60.7829 23.3653 60.7829 22.128C60.7829 21.328 60.9429 20.624 61.2629 20.016C61.5829 19.3973 62.0202 18.9227 62.5749 18.592C63.1402 18.2507 63.7909 18.08 64.5269 18.08C65.5829 18.08 66.4095 18.4213 67.0069 19.104C67.6042 19.776 67.9029 20.704 67.9029 21.888V22.384H62.0469C62.0895 23.2693 62.3455 23.9467 62.8149 24.416C63.2842 24.8747 63.9349 25.104 64.7669 25.104C65.2362 25.104 65.6842 25.0347 66.1109 24.896C66.5375 24.7467 66.9429 24.5067 67.3269 24.176L67.7749 25.088C67.4229 25.4187 66.9749 25.68 66.4309 25.872C65.8869 26.0533 65.3322 26.144 64.7669 26.144ZM64.5589 19.04C63.8229 19.04 63.2415 19.2693 62.8149 19.728C62.3882 20.1867 62.1375 20.7893 62.0629 21.536H66.7829C66.7509 20.7467 66.5429 20.1333 66.1589 19.696C65.7855 19.2587 65.2522 19.04 64.5589 19.04ZM72.8985 26.144C71.9812 26.144 71.2932 25.904 70.8345 25.424C70.3758 24.9333 70.1465 24.2293 70.1465 23.312V19.232H68.6265V18.224H70.1465V15.84H71.4425V18.224H73.9065V19.232H71.4425V23.184C71.4425 23.792 71.5705 24.256 71.8265 24.576C72.0825 24.8853 72.4985 25.04 73.0745 25.04C73.2452 25.04 73.4158 25.0187 73.5865 24.976C73.7572 24.9333 73.9118 24.8907 74.0505 24.848L74.2745 25.84C74.1358 25.9147 73.9332 25.984 73.6665 26.048C73.3998 26.112 73.1438 26.144 72.8985 26.144Z" fill="black"/>
</Svg>


<View style={{marginLeft:10}}>
<Svg width="71" height="42" viewBox="0 0 71 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0.5 0.5H50C61.3218 0.5 70.5 9.67816 70.5 21C70.5 32.3218 61.3218 41.5 50 41.5H25.3571C11.6289 41.5 0.5 30.3711 0.5 16.6429V0.5Z" stroke="#464646"/>
<Path d="M23.432 26L19.48 14.72H20.856L24.04 24.08L27.304 14.72H28.36L31.592 24.16L34.84 14.72H36.152L32.2 26H31.032L27.816 16.72L24.568 26H23.432ZM37.6654 16.288V14.832H39.2654V16.288H37.6654ZM37.8254 26V18.224H39.1214V26H37.8254ZM41.9601 26V19.232H40.4241V18.224H41.9601V17.952C41.9601 16.9173 42.2161 16.1333 42.7281 15.6C43.2508 15.0667 44.0508 14.768 45.1281 14.704L45.7201 14.672L45.8001 15.68L45.1281 15.712C44.4668 15.7547 43.9868 15.952 43.6881 16.304C43.4001 16.6453 43.2561 17.1413 43.2561 17.792V18.224H48.0561V26H46.7601V19.232H43.2561V26H41.9601ZM46.6161 16.288V14.832H48.2001V16.288H46.6161Z" fill="black"/>
</Svg>
</View>


<View style={{marginLeft:10}}>
<Svg width="74" height="42" viewBox="0 0 74 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0.5 0.5H53C64.3218 0.5 73.5 9.67816 73.5 21C73.5 32.3218 64.3218 41.5 53 41.5H26.4286C12.1086 41.5 0.5 29.8914 0.5 15.5714V0.5Z" stroke="#464646"/>
<Path d="M19.392 26V14.72H23.904C25.0667 14.72 25.9627 14.9813 26.592 15.504C27.232 16.016 27.552 16.736 27.552 17.664C27.552 18.2827 27.392 18.8107 27.072 19.248C26.752 19.6853 26.3093 20.0053 25.744 20.208C26.3947 20.3787 26.9013 20.6933 27.264 21.152C27.6373 21.6107 27.824 22.192 27.824 22.896C27.824 23.8987 27.4987 24.6667 26.848 25.2C26.1973 25.7333 25.28 26 24.096 26H19.392ZM20.672 19.76H23.712C25.408 19.76 26.256 19.0987 26.256 17.776C26.256 16.4427 25.408 15.776 23.712 15.776H20.672V19.76ZM20.672 24.944H23.968C25.6747 24.944 26.528 24.256 26.528 22.88C26.528 21.504 25.6747 20.816 23.968 20.816H20.672V24.944ZM32.4765 26.144C31.9432 26.144 31.4632 26.0427 31.0365 25.84C30.6205 25.6267 30.2898 25.3387 30.0445 24.976C29.7992 24.6133 29.6765 24.208 29.6765 23.76C29.6765 23.1947 29.8205 22.7467 30.1085 22.416C30.4072 22.0853 30.8925 21.8507 31.5645 21.712C32.2472 21.5627 33.1752 21.488 34.3485 21.488H34.8605V20.992C34.8605 20.3307 34.7218 19.856 34.4445 19.568C34.1778 19.2693 33.7458 19.12 33.1485 19.12C32.6792 19.12 32.2258 19.1893 31.7885 19.328C31.3512 19.456 30.9032 19.6693 30.4445 19.968L29.9965 19.024C30.4018 18.736 30.8925 18.5067 31.4685 18.336C32.0552 18.1653 32.6152 18.08 33.1485 18.08C34.1512 18.08 34.8925 18.3253 35.3725 18.816C35.8632 19.3067 36.1085 20.0693 36.1085 21.104V26H34.8925V24.656C34.6898 25.1147 34.3752 25.4773 33.9485 25.744C33.5325 26.0107 33.0418 26.144 32.4765 26.144ZM32.6845 25.168C33.3245 25.168 33.8472 24.9493 34.2525 24.512C34.6578 24.064 34.8605 23.4987 34.8605 22.816V22.336H34.3645C33.5005 22.336 32.8178 22.3787 32.3165 22.464C31.8258 22.5387 31.4792 22.6773 31.2765 22.88C31.0845 23.072 30.9885 23.3387 30.9885 23.68C30.9885 24.1173 31.1378 24.4747 31.4365 24.752C31.7458 25.0293 32.1618 25.168 32.6845 25.168ZM38.5129 26V18.224H39.7769V19.552C40.0329 19.0613 40.3955 18.6933 40.8649 18.448C41.3342 18.2027 41.8622 18.08 42.4489 18.08C44.2942 18.08 45.2169 19.104 45.2169 21.152V26H43.9209V21.232C43.9209 20.5067 43.7769 19.9787 43.4889 19.648C43.2115 19.3067 42.7635 19.136 42.1449 19.136C41.4302 19.136 40.8595 19.36 40.4329 19.808C40.0169 20.2453 39.8089 20.832 39.8089 21.568V26H38.5129ZM39.7129 16.56L38.9769 16.512C39.0302 15.84 39.2062 15.3173 39.5049 14.944C39.8142 14.5707 40.2089 14.384 40.6889 14.384C40.9235 14.384 41.1369 14.4427 41.3289 14.56C41.5315 14.6667 41.7609 14.832 42.0169 15.056C42.2515 15.2587 42.4382 15.4027 42.5769 15.488C42.7262 15.5627 42.8702 15.6 43.0089 15.6C43.5529 15.6 43.8835 15.1787 44.0009 14.336L44.7369 14.384C44.6835 15.056 44.5075 15.5787 44.2089 15.952C43.9102 16.3253 43.5209 16.512 43.0409 16.512C42.8169 16.512 42.6035 16.464 42.4009 16.368C42.2089 16.2613 41.9742 16.0853 41.6969 15.84C41.4729 15.6373 41.2862 15.4987 41.1369 15.424C40.9982 15.3387 40.8595 15.296 40.7209 15.296C40.1769 15.296 39.8409 15.7173 39.7129 16.56ZM50.8386 26.144C50.0813 26.144 49.4253 25.9787 48.8706 25.648C48.316 25.3173 47.884 24.8533 47.5746 24.256C47.276 23.648 47.1266 22.9333 47.1266 22.112C47.1266 21.2907 47.276 20.5813 47.5746 19.984C47.884 19.376 48.316 18.9067 48.8706 18.576C49.4253 18.2453 50.0813 18.08 50.8386 18.08C51.5853 18.08 52.236 18.2453 52.7906 18.576C53.356 18.9067 53.788 19.376 54.0866 19.984C54.396 20.5813 54.5506 21.2907 54.5506 22.112C54.5506 22.9333 54.396 23.648 54.0866 24.256C53.788 24.8533 53.356 25.3173 52.7906 25.648C52.236 25.9787 51.5853 26.144 50.8386 26.144ZM50.8386 25.104C51.564 25.104 52.1453 24.848 52.5826 24.336C53.02 23.8133 53.2386 23.072 53.2386 22.112C53.2386 21.1413 53.02 20.4 52.5826 19.888C52.1453 19.376 51.564 19.12 50.8386 19.12C50.1026 19.12 49.516 19.376 49.0786 19.888C48.652 20.4 48.4386 21.1413 48.4386 22.112C48.4386 23.072 48.652 23.8133 49.0786 24.336C49.516 24.848 50.1026 25.104 50.8386 25.104Z" fill="black"/>
</Svg>
</View>






                    {/* <Image style={{marginLeft:5, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_4.png')} />
                    <Image style={{marginLeft:5, marginTop:10, resizeMode:'contain' }} source={require('../../assets/img/tag_5.png')} /> */}
                    </View>
                    

                   

                    </View>



                    <View style={{marginTop:30, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8', }}>
                   
                        <TouchableHighlight style={{}}
                        underlayColor='white'
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('BuscarReseña')}  
                        //onPress={() => this.props.navigation.goBack()}  
                        >
                        <View style={{marginTop:25, flexDirection:'row', flex:1,}}>
                          <View style={{flex:.9, flexDirection:'row',  }}>
                          <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reseñas </Text>
                        <Text style={{marginLeft:20,color:'#A6A6A6', marginTop:2}}>
                            <View>
                            <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#545454"/>
</Svg>

                            </View>
                            5.5</Text>
                          </View>
                       <View style={{ flex:.2,  flexDirection:'row',}}>
                       <Icon22 style={{  marginTop:2}}  name="right" size={16} color="#0B121F" />
                       </View>
                        
                        </View>

                        </TouchableHighlight>


                   
                   
                    

                    
                    </View>






                    <View style={{height:'20%', marginTop:30, borderBottomWidth:1, borderTopWidth:1, width:'95%', borderColor:'#D8D8D8', marginBottom:100}}>
                    

                    <TouchableHighlight style={{}}
                        underlayColor='white'
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('BuscarRegla')}  
                        //onPress={() => this.props.navigation.goBack()}  
                        >
                        <View style={{marginTop:25, flexDirection:'row' }}>
                          <View style={{flex:.9}}>
                          <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reglas de este espacio </Text>
                          </View>
                        

                          <View style={{flex:.2}}>
                            <Icon22 style={{ marginLeft:'0%', marginTop:2, }}  name="right" size={16} color="#0B121F" />
                          </View>
                       
                        
                        </View>

                        </TouchableHighlight>


                    {/* <Text style={{marginTop:0, marginLeft:20, fontFamily:'NunitoSans-Blod',fontSize:16, color:'#2D2D2D'}}>Reglas de este espacio </Text> */}
                    
                    </View>

                    <View style={{flexDirection:'row', marginBottom:20}}>
                    

                    

                    </View>
                   
                    

                    
                    
                   
                   
               </View>
                </View>

                   
                    
                            
                    


                   

                   
                    
                    
                    
                      
                


                    

                
               

                    </View>
     


                    </ScrollView>

                    </SafeAreaView>

                
            </View>
           

               <View style={{flexDirection:'row', marginTop:10, marginBottom:10}}>
               
                <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                <Text maxFontSizeMultiplier={1} style={{marginTop:'2%',marginLeft:20, fontFamily:'NunitoSans-Regular',fontSize:16,marginBottom:0, fontWeight:'bold',color:'#4d4d4d'   }}>$10.000</Text>
                <Text maxFontSizeMultiplier={1} style={{marginTop:'2%',marginLeft:0, fontSize:17, marginBottom:0,  }}>/ Dia</Text>
                </View>
                <Text  style={{marginLeft:20,color:'#A6A6A6'}}>
                <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#545454"/>
</Svg>5.5</Text>
                </View>

                <View style={{alignItems:'center',marginTop:0, marginLeft:'8%', width:'60%'}}>
                        <TouchableHighlight style={{with:10, height:40, width:'90%',
                                  paddingTop:5,paddingBottom:5, paddingLeft:10,paddingRight:10, borderRadius:64,
                                  backgroundColor:'#61D3BA', alignItems:'center' }}
                        title="Ingresar"
                        onPress={() => this.props.navigation.navigate('BuscaDisponibilidad')}
                            >
                                <Text maxFontSizeMultiplier={1} style={{color:'white',marginTop:'1%', fontFamily:'NunitoSans-Bold',fontSize:16 }} >Ver disponibilidad</Text>
                            </TouchableHighlight>

                           
                                    
                    </View>
               </View>

          </View>
        );
    }



}
const styles1 = StyleSheet.create({
    container:  { borderRadius:0, marginTop:0, width:width, backgroundColor: 'white', alignContent:'center', marginLeft:0,},
    child: { width:width,  height:height/3, borderRadius:0, marginRight:0  },
    
  });
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