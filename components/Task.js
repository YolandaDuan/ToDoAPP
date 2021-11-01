import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { connect } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/actions';

import { themeColor } from '../constants';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
                    fillColor={themeColor}
                    unfillColor='white'                 
                    iconStyle={{borderColor: themeColor}}
                    isChecked={isCompleted}
                    onPress={toggleTask}
                    ></BouncyCheckbox>
                <Text style={isCompleted ? styles.taskDoneText : styles.taskText}>{text}</Text>
            </View>

            <TouchableOpacity onPress={handleDeleteTask}>
                <View>
                    <FontAwesomeIcon icon={faTrashAlt} style={styles.deleteIcon}/>
                </View>
            </TouchableOpacity>       
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
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
    deleteIcon: {
        color: 'red'
    }
});

export default connect(
    null,
    { deleteTask, toggleComplete }
  )(Task);