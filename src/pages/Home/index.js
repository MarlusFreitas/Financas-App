import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import Balance from './components/Balance';
import Movimentos from './components/Movimentos';
import Actions from './components/Actions';



const lista = [{
  id: 1,
  label: 'Boleto de luz',
  value: '150,57',
  date: '17/08/2023',
  type: 0 //despesa
},

{
  id: 2,
  label: 'Pix X',
  value: '200,57',
  date: '12/08/2023',
  type: 1 //entradas
},

{
  id: 3,
  label: 'Salário',
  value: '1.500,57',
  date: '3/08/2023',
  type: 1 //entradas
},

]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Marlus (Cliente)" />
      <Balance saldo="9.111,00" gastos="-527,50"/>

      <Actions/>

      <Text style={styles.titulo}>Últimas movimentações</Text>
      <FlatList style={styles.list} data={lista} keyExtractor={(item) => String(item.id)} showsVerticalScroLLIndicator={false} renderItem={({item}) => <Movimentos data={item}/>}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  titulo:{
    fontSize: 14,
    fontWeight:'bold',
    marginStart: 15,
    marginEnd: 15,
    marginTop: 15,
    marginBottom: 15,
  },

  list:{
    marginStart: 15,
    
  }

});
