import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';


export default function Home() {
  return (
    <View syle={StyleSheet.container}>
      <Header name="Marlus (Cliente)" />
      <Text>Pagina home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'

  }
});
