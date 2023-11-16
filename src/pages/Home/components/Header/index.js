import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.username}>
                Marlus (cliente)
            </Text>
            <TouchableOpacity style={styles.buttomuser} activeOpacity={0.8}>
            <FontAwesome name="user-circle" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#121212',
    }
});