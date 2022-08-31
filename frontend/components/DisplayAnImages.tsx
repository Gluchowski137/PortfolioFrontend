import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet,Dimensions } from 'react-native';

const DisplayAnImage = (props: any) => {
  return (
    <View >
      <Image
        style={{width: props.width , height: props.height}}
        source={require('C:\\Users\\krzys\\Desktop\\Portfolio\\PortfolioFrontend\\frontend\\assets\\kuwaaspock.jpg')}
      />
    </View>
  );
}


export default DisplayAnImage;