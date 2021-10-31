import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task';
import NewTask from './components/NewTask';

import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function TaskList({ tasks }) {
  return (
    <View style={styles.tasksWrapper}>
      <View style={styles.tasksList}>
      { tasks.map(task => <Task key={task.id} id={task.id} text={task.text} isCompleted={task.isCompleted} />) }
      </View>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

function Todo({ tasks }) {
  const all = tasks;
  const toDo = tasks.filter(task => !task.isCompleted);
  const done = tasks.filter(task => task.isCompleted);

  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="All" options={{ tabBarLabel: 'All' }} children={() => <TaskList tasks={all}/>} />
            <Tab.Screen name="To do" options={{ tabBarLabel: 'To do' }} children={() => <TaskList tasks={toDo}/>} />
            <Tab.Screen name="Done" options={{ tabBarLabel: 'Done' }} children={() => <TaskList tasks={done}/>} />
          </Tab.Navigator>
        </NavigationContainer> 
      <NewTask />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20
  }
});

export default connect(mapStateToProps, null)(Todo);