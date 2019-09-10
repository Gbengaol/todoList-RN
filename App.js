import React, { useState } from "react";
import { StyleSheet, FlatList, Button, View } from "react-native";
import Todos from "./components/Todos.component"
import AddItems from "./components/AddItems.component";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [addMode, setAddMode] = useState(false)

  const onChangeText = (text) => {
    setText(text)
  }

  const addTodoItem = async() => {
    if(text.length === 0){
      alert('Enter a todo')
    } else {
      await setTodos([...todos, {id:Math.random().toString() ,text:text}])
    }
    setText('');
    setAddMode(false)
  }
  const deleteItem = (itemToDelete) => {
    setTodos(todos => {
      return todos.filter((todo) => {
        return todo.id !== itemToDelete
      })
    })
  }
  const makeAddModeVisible = () => {
    setAddMode(true)
  }
  const cancelAddMode = () => {
    setAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button 
        title="Add a Todo Item" 
        onPress={makeAddModeVisible}
      />
      <AddItems 
        text={text}
        addTodoItem={addTodoItem}
        onChangeText={onChangeText}
        addMode={addMode}
        cancelAddMode={cancelAddMode}
      />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => item.id }
        renderItem={itemData => (
          <Todos 
            todo={itemData.item}
            deleteItem={deleteItem}
          />
        )}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10
  }
});