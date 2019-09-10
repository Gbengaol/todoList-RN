import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

const Todos = ({todo, deleteItem}) => {
    return (
        <TouchableHighlight 
            onLongPress={() => deleteItem(todo.id)}
            underlayColor="#727271"
            activeOpacity={0.25}
        >       
        <View style={styles.todo}>
            <Text>{todo.text}</Text>
            <TouchableOpacity
                activeOpacity={0.5}
                underlayColor="#faa831"
            >
                <View 
                    style={styles.deleteButton}                    
                >
                    <Text onPress={() => deleteItem(todo.id)}>X</Text>
                </View>
            </TouchableOpacity>
        </View>
        </TouchableHighlight> 
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#fff',
        borderWidth: 2,
        marginVertical: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#727271'
    },
    deleteButton: {
       fontWeight: 'bold'
    }
})

export default Todos;