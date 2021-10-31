import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { connect } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/actions';

const Task = ({id, text, isCompleted, deleteTask, toggleComplete}) => {
    const handleDeleteTask = () => {
        deleteTask(id)
      }
    
    const toggleTask = () => {
        toggleComplete(id)
    } 

    return (
        <View style={styles.task}>
            <View style={styles.left}>
                <BouncyCheckbox
                    size={20}
                    fillColor='#48D1CC'
                    unfillColor='#FFFFFF'                 
                    iconStyle={{ borderColor: '#48D1CC' }}
                    isChecked={ isCompleted }
                    onPress={toggleTask}
                    ></BouncyCheckbox>
                <Text style={isCompleted ? styles.taskDoneText : styles.taskText}>{text}</Text>
            </View>
            <Button 
                title='X'
                color = '#B22222'
                onPress={handleDeleteTask} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    taskText: {
        maxWidth: '80%',
        fontSize: 15
    },
    taskDoneText: {
        maxWidth: '80%',
        fontSize: 15,
        textDecorationLine: 'line-through'
    },
});

export default connect(
    null,
    { deleteTask, toggleComplete }
  )(Task);