import { View, Text, StyleSheet } from 'react-native';

export default function Balance({saldo, gastos}) {
 return (
   <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemSaldo}>Saldo</Text>
          <View style={styles.conteudo}>
            <Text style={styles.moeda}>R$</Text>
            <Text style={styles.saldo}>{saldo}</Text>
          </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemSaldo}>Gastos</Text>
          <View style={styles.conteudo}>
            <Text style={styles.moeda}>R$</Text>
            <Text style={styles.despesas}>{gastos}</Text>
          </View>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
    backgroundColor:'#e8e8e8',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingStart: 15,
    paddingEnd: 15,
    marginTop: -15,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 4,
    paddingBottom: 15,
    paddingTop: 15,
    zIndex: 99,
  },

  itemSaldo:{
    color: '#121212',
    fontWeight:'bold',
    fontSize: 18,
  },

  conteudo:{
    flexDirection:'row',
    alignItems:'center',
  },

  moeda:{
    color:'#121212',
    marginRight: 1,
    fontWeight:'bold',
  },

  saldo:{
    fontSize: 16,
    color:'#168a1c',
    fontWeight:'bold',
  },

  despesas:{
    fontSize: 16,
    color: '#bf1206',
    fontWeight:'bold',
  }
})