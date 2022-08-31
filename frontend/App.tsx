import React, { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";
import DisplayAnImage from "./components/DisplayAnImages";
import DraggableView from "./components/DraggableComponent";

const App = () => {

  let windowHeight: number = useResponsiveHeight(100);
  let windowWidth: number = useResponsiveWidth(100);

  return (
    <View style={styles.appContainer}>
      <View>
        <DisplayAnImage width = {windowWidth / 2} height = {windowHeight}  />
      </View>
      <View style = {styles.drag}>
        <DraggableView name=   "elo "/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#215542',
  },
  drag:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 500,
    width:500,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    maxHeight: 200,
  }
});

export default App;