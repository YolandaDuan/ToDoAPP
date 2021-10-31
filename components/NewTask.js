import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const NewTask = () => {
  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.newTaskWrapper}>
        <TextInput 
          style={styles.newTaskInput}
          placeholder={'new task'}></TextInput>
        <TouchableOpacity>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  newTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  newTaskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#48D1CC',
    borderWidth: 1,
    width: 300,

  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#48D1CC',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20
  }
});

export default NewTask;