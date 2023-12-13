import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme
} from 'react-native';

function App(){

  const isDarkMode = useColorScheme() === 'dark';

  return(

      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello world!</Text>
        <Text>Welcome to my new App</Text>
        <Pressable style={styles.button}><Text style={{color: 'white'}}>Click me!</Text></Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  whiteText: {
    color: '#ffffff'
  },
  blackText: {
    color: '#000000'
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 5,
    padding: 5
  }
})

export default App;