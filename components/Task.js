import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) => {
    return (
        <View style={styles.task}>
            <View style={styles.left}>
                <BouncyCheckbox
                    size={20}
                    fillColor='#48D1CC'
                    unfillColor='#FFFFFF'                 
                    iconStyle={{ borderColor: '#48D1CC' }}
                    ></BouncyCheckbox>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <Button 
                title='X'
                color = '#B22222'
                onPress={() => Alert.alert('test button')} />
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
});

export default Task;