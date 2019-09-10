import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const AddItems = ({text, onChangeText, addTodoItem, addMode, cancelAddMode}) => {
    return (
        <Modal visible={addMode} animationType="slide">
            <View style={styles.container}>
                <TextInput 
                    placeholder="Enter a task" 
                    style={styles.textInput}
                    value={text}
                    onChangeText={onChangeText} 
                />
                <View style={styles.alignBtn}>
                    <View style={styles.button}>
                        <Button 
                            title="Cancel" 
                            onPress={cancelAddMode} 
                            color="red"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Add" 
                            onPress={addTodoItem}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
      textInput: {
        borderColor: "#727271",
        borderWidth: 2,
        width: "100%",
        padding: 10,
        color: "black",
        marginBottom: 10
    },
    alignBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default AddItems;