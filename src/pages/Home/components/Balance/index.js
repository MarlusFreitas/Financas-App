import { View, Text, StyleSheet } from 'react-native';

export default function Balance() {
 return (
   <View style={styles.container}>
    <Text style={styles.balance}>TESTEEE</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
    backgroundColor:'#121212'
  },

  balance:{
    color: '#ffff'
  }
})