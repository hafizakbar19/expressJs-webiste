import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable
} from 'react-native';

function App(){
  return(
    <SafeAreaView>
      <View>
        <Text>Hello world</Text>
        <Pressable><Text>Click me!</Text></Pressable>
      </View>
    </SafeAreaView>
  )
}

export default App;