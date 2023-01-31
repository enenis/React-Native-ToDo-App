import { View,Text,StyleSheet,filter } from 'react-native';
import React from 'react'



const Main =props=> {
    const filteredTodo = props.item.filter(todo=>!todo.completed)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.number}>{filteredTodo.length}</Text>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:"left",
        flex:1,
        margin:3,
        
    },
    number: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:"right",
        margin:3,
    }
})