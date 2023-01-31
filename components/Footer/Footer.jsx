import {View, Text, StyleSheet,SafeAreaView,ScrollView, TextInput, Button,Dimensions} from 'react-native';
import React,{useState} from 'react';

import Main from "../Header"

function ToDoCard() {
    const [todoList, setTodoList] =useState([])
    const [input,setInput] = useState("")
    const add = ()=>{
        if (input.trim()){
            const newTodos={
              id:Math.floor(Math.random()*1000),
              title: input,
              completed:false,
            }
            setTodoList([...todoList,newTodos])
            setInput("")
        }
    }
    const toggleTodo=id=>{
      const newTodos = todoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
    })
    setTodoList(newTodos)
  }

  const removeTodo = id => {
    const newTodos = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodos);
  };

  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.title}>Yapılacaklar</Text>
        <Main item={todoList} />
      </View>
      <ScrollView style={styles.card_container}>
        {todoList.map(todo => (
          <View
            style={{
              backgroundColor: todo.completed ? '#37474f' : '#7da453',
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}
            key={todo.id}>
            <Text
              onLongPress={() => removeTodo(todo.id)}
              onPress={() => toggleTodo(todo.id)}
              style={{
                color: '#fff',
                textDecorationLine: todo.completed ? 'line-through' : 'none',
                fontSize: 20,
              }}
              key={todo.id}>
              {todo.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.createContainer}>
        <TextInput
          placeholder={'Yapılacak...'}
          placeholderTextColor="#808080"
          style={styles.input}
          value={input}
          onChangeText={text => setInput(text)}
        />
        <View style={styles.seperator} />
        <View style={styles.innerContainer}>
          <Button
            title="Kaydet"
            color="#808080"
            onPress={add}
            borderRadius="5"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ToDoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 10,
  },
  card_container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  createContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#37474f',
    borderRadius: 10,
  },
  innerContainer: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    padding: 10,
    color: '#808080',
    fontSize: 16,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#78909c',
  },
  title:{
   color:"orange",
   fontWeight:"bold",
   fontSize:20
  }

});
