import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Ahmed Welcome to App</Text>
      <Button title='Tap me' onPress={()=> alert('button pressed!')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
