import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 42;

export default function Header({name}){
    return(
        <View style={styles.container}>
            <Text style={styles.username}>{name}</Text>
            <TouchableOpacity style={styles.buttomuser} activeOpacity={0.8}>
                <FontAwesome name="user-circle" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#121212',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 15,
        paddingEnd: 15,
        paddingBottom: 30,
        justifyContent:'space-between',

    },

    username:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff',
    },

    buttomuser:{
        width: 35,
        height: 35,
    },

});