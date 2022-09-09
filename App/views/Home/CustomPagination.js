import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Pagination } from 'react-native-swiper-flatlist';

const styles = StyleSheet.create({
  paginationContainer: {
    top: 220,
  },
  pagination: {
    // borderRadius: 40,
    // fontSize:10,
    // width:10, height:10,
    // borderWidth:1,
    width:10,
    height:10,
    borderRadius:50,
    borderWidth:1,
    borderColor:'white'
  // overflow:hidden,

  },
});

export const CustomPagination = (props) => {
  return (
      

<Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      
      paginationActiveColor="white"
    />
    
  );
};