import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Balance from './components/Balance';


export default function Home() {
  return (
    <View syle={StyleSheet.container}>
      <Header name="Marlus (Cliente)" />
      <Balance saldo="9.250,00" gastos="-527,50"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'

  }
});
