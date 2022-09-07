import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Platform,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default (Preview => ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
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
        aceptar:false
    };

    

    console.log("el super item esx --->", item);
  return (

<View >
    <TouchableOpacity
      //style={[styles.videoContainer]}
      style={{width:width}}
      onPress={() => {

      }
        
      }>
      <View >

      <ImageBackground
        imageStyle={{borderRadius:10, marginLeft:20}}
        style={{
            alignItems:'flex-end',
            borderRadius:10, 
            width:'95%' ,
            height: 242 , 
            resizeMode: 'stretch'
        }} 
        source={{uri: item[imageKey]}} 
        >
        {/* <SvgXml width="200" height="200" xml={Logo1} /> */}
            {/* <Icon25 style={{marginTop:10}} name="map-pin" size={25} color="red" /> */}
            {item.selected==true?(<Image style={{marginTop:10, marginRight:10 }} source={require('../../../assets/img/select_1_img.png')} />):
            ( <View style={{flexDirection:'row', }}>
                              
                                                                
                            </View>)}
            
              <View style={{flexDirection:'column', marginTop:'47%', marginLeft:'45%'}}>
                            
                            <View style={{flexDirection:'row', }}>
                                  
                                                                
                            </View>
                                    
                            </View>
        </ImageBackground>
        {/* <Image 
          // style={[styles.videoPreview, active ? {} : {height: 120}]}
          style={{width:width-50, height: 200, marginLeft:20, marginTop:20}}
          
          source={{uri: item[imageKey]}}
          //source={{uri: require( item.banner )}}

        />  */}
        
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      
    </TouchableOpacity>
</View>
    
  );
});

const styles = StyleSheet.create({
  videoContainer: {
    width: width + 50,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
  },
  videoPreview: {
    width: width -50,
    height: 155,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
    marginLeft:'30%',
    fontFamily:'NunitoSans-Bold',
    color:'black'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});