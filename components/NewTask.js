import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

import { themeColor } from '../constants';

const NewTask = ({ addTask }) => {
  const [task, setTask] = React.useState('');
  
  const handleAddTask = () => {
    addTask(task),
    setTask('')
  }

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.newTaskWrapper}>
        <TextInput 
          style={styles.newTaskInput}
          placeholder={'new task'}
          value={task}
          onChangeText={task => setTask(task)}             
          />
        <TouchableOpacity onPress={handleAddTask}>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    bottom: 10,
  },
  newTaskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: themeColor,
    borderWidth: 1,
    width: 280,
    bottom: 30,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: themeColor,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    bottom: 30,
  },
  buttonText: {
    fontSize: 20
  }
});

export default connect(
  null,
  { addTask }
)(NewTask);
