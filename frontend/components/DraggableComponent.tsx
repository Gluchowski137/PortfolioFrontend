import React, { useRef } from "react";
import { Animated, PanResponder, SafeAreaView, StyleSheet, View } from "react-native";

const DraggableView = (props:any) => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true
        } // Back to zero
      ).start();
    },
  });
  return (
      <Animated.View  {...panResponder.panHandlers} style={[pan.getLayout(), styles.box]}>  
        {props.name}
      </Animated.View>


      
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#69737f',
    borderRadius: 15,
    textAlign : "center",
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
  },
});

export default DraggableView;