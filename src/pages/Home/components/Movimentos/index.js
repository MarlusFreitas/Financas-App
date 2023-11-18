import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function Movimentos({data}) {
    const [showValue, setShowValue]=useState(false);
 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>
        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            {showValue ? (
                <Text style={data.type === 1 ? styles.value : styles.despesas}>
                    {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </Text>
            ) : (
                <View style={styles.hide}>
                    
                </View>
            )}
        </View>

    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 15,
        borderBottomWidth: 0.5,
        borderBlockColor: '#2e2e2e'

},

content:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:2,
    marginBottom: 4,
},

date:{
    color: '#121212',
    fontWeight:'bold',

},

label:{
    fontWeight:'bold',
    fontSize: 15,
},

value:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'#168a1c'
},

despesas:{
    fontSize: 15,
    color: '#bf1206',
    fontWeight:'bold',
},

hide:{
    backgroundColor: '#DADADA',
    width: 80,
    borderRadius: 8,
    height: 12,
    marginTop: 8,
}
})