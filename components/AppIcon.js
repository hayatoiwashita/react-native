import React from "react";
import { Image, View } from "react-native";

function AppIcon() {
  return (
    <View>
      <Image 
        source={{uri:'/Users/iwashitasatsuto/Documents/develop/react-native/expo_sample/assets/threetter_logo.png'}}
        style={{ width: 120, height: 40 }}
      />
    </View>
  )
}

export default AppIcon;